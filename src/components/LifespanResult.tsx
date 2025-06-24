import { useEffect, useState, useRef } from 'react';
import { 
  convertToUnit, 
  getCircleAttributes, 
  getAgePercentile,
  formatNumber,
  famousPeople,
  longLivedFamousPeople
} from '../utils/lifespan';
import type { TimeUnit, FamousPerson, CircleVisualizationAttributes } from '../utils/lifespan';
import { shuffleArray } from '../utils/arrayUtils';
import { generateShareUrl } from '../utils/urlParamUtils';
import './LifespanResult.css';

interface LifespanResultProps {
  remainingYears: number;
  averageLifeExpectancyYears: number;
  units: TimeUnit[];
  onReset: () => void;
  age?: number; // Actual age from user input
  gender?: string; // User's gender/sex
  initialTimeView?: 'achieved' | 'remaining';
  initialPersonName?: string;
  initialTimeUnit?: string;
}

const LifespanResult = ({ 
  remainingYears, 
  averageLifeExpectancyYears, 
  units, 
  onReset, 
  age = 0, 
  gender = '',
  initialTimeView = 'remaining',
  initialPersonName,
  initialTimeUnit 
}: LifespanResultProps) => {
  // Add state for tracking the time view mode (remaining or achieved)
  const [timeView, setTimeView] = useState<'remaining' | 'achieved'>(initialTimeView);
  const [currentUnitIndex, setCurrentUnitIndex] = useState(() => {
    if (initialTimeUnit) {
      const index = units.findIndex(unit => unit.name === initialTimeUnit);
      return index >= 0 ? index : 0;
    }
    return 0;
  });
  const currentUnit = units[currentUnitIndex];
  // Set initial progress to 0 so animation starts immediately
  const [animationProgress, setAnimationProgress] = useState(0);
  // Add state to track if animation is complete to control text visibility
  const [animationComplete, setAnimationComplete] = useState(false);
  // Famous person comparison
  const [comparison, setComparison] = useState<{ text: string, person: FamousPerson } | null>(null);
  // Add state for tracking the current comparison index and initialize it properly
  const [comparisonIndex, setComparisonIndex] = useState(0);
  // Add state for storing the shuffled famous people array
  const [shuffledFamousPeople, setShuffledFamousPeople] = useState<FamousPerson[]>([]);
  // State for visualization attributes
  const [visualAttributes, setVisualAttributes] = useState<CircleVisualizationAttributes>(
    getCircleAttributes(age, age + remainingYears, averageLifeExpectancyYears)
  );
  // State for age percentile
  const [agePercentile, setAgePercentile] = useState<number>(0);
  // State for toast notification
  const [showToast, setShowToast] = useState(false);
  
  const animationStarted = useRef(false);
  // const intervalRef = useRef<number | null>(null);
  
  // Use the actual age from user input instead of deriving it
  const actualAge = age; // This is the actual age entered by the user
  
  // Handle share button click
  const handleShare = () => {
    // Create URL params object
    const params: {
      age: number;
      gender: string;
      timeView: 'remaining' | 'achieved';
      timeUnit: string;
      person?: string;
    } = {
      age,
      gender,
      timeView,
      timeUnit: currentUnit.name
    };
    
    // Add current person if available
    if (comparison && comparison.person) {
      params.person = comparison.person.name;
    }
    
    // Generate shareable URL
    const shareUrl = generateShareUrl(params);
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        // Show toast notification
        setShowToast(true);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy URL to clipboard:', err);
      });
  };

  // Calculate the percentage based on view mode (remaining or achieved)
  const lifePercentage = timeView === 'remaining' 
    ? Math.min(remainingYears / (actualAge + remainingYears) * 100, 100) 
    : Math.min(actualAge / (actualAge + remainingYears) * 100, 100);  

  // Start circular countdown animation on component mount and when timeView changes
  useEffect(() => {
    animationStarted.current = true;
    const initialDelay = 250;
    const animationDuration = 500;
    
    // Reset animation state when timeView changes
    setAnimationProgress(0);
    setAnimationComplete(false);
    
    let animationFrameId: number;
    let startTime: number;
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      // Progress goes from 0 to 1
      const progress = Math.min(elapsed / animationDuration, 1);
      setAnimationProgress(progress);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Animation is complete, show the text
        setAnimationComplete(true);
      }
    };
    
    // Set a timeout to start the animation after the delay
    timeoutId = setTimeout(() => {
      startTime = Date.now();
      animate();
    }, initialDelay);
    
    // Clean up animation frame and timeout if component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(timeoutId);
    };
  }, [timeView]);

  // Auto-rotate through units every few seconds
  // useEffect(() => {
  //   intervalRef.current = window.setInterval(() => {
  //     setCurrentUnitIndex((prev) => (prev + 1) % units.length);
  //   }, 5000);
    
  //   return () => {
  //     if (intervalRef.current !== null) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [units.length]);
  
  // This effect will populate the shuffled array when the unit or age changes
  useEffect(() => {
    if (animationComplete) {
      // Select appropriate list based on user's age
      const baseList = actualAge >= averageLifeExpectancyYears ? longLivedFamousPeople : famousPeople;
      
      // If initialPersonName is provided, try to find that person in the list
      if (initialPersonName && shuffledFamousPeople.length === 0) {
        const allPeople = [...famousPeople, ...longLivedFamousPeople];
        const personIndex = allPeople.findIndex(
          person => person.name.toLowerCase() === initialPersonName.toLowerCase()
        );
        
        if (personIndex >= 0) {
          // Move that person to the first position in the shuffled array
          const shuffled = shuffleArray([...baseList]);
          const personToMove = allPeople[personIndex];
          
          // Remove the person if they're in the shuffled array
          const personShuffledIndex = shuffled.findIndex(p => p.name === personToMove.name);
          if (personShuffledIndex >= 0) {
            shuffled.splice(personShuffledIndex, 1);
          }
          
          // Add the person at the beginning
          shuffled.unshift(personToMove);
          setShuffledFamousPeople(shuffled);
        } else {
          // If person not found, just shuffle normally
          setShuffledFamousPeople(shuffleArray(baseList));
        }
      } else {
        // No initialPersonName or already initialized, shuffle normally
        setShuffledFamousPeople(shuffleArray(baseList));
      }
      
      // Reset comparison index when shuffling
      setComparisonIndex(0);
    }
  }, [currentUnit, remainingYears, averageLifeExpectancyYears, animationComplete, initialPersonName]);
  
  // Calculate age percentile and update visualization attributes
  useEffect(() => {
    // Calculate and set age percentile
    const percentile = getAgePercentile(actualAge, gender);
    setAgePercentile(percentile);
    
    // Update visualization attributes - use actual age, not the derived one
    setVisualAttributes(getCircleAttributes(actualAge, actualAge + remainingYears, averageLifeExpectancyYears));
  }, [actualAge, averageLifeExpectancyYears, remainingYears, gender]);

  // We've moved this shuffle logic to the effect above and don't need this separate effect now
  
  // Update the comparison whenever the unit changes or comparison index changes
  useEffect(() => {
    if (animationComplete && shuffledFamousPeople.length > 0) {
      // Use the current comparison index to get the specific person
      const person = shuffledFamousPeople[comparisonIndex];
      
      // Convert both ages to the same unit for comparison
      const personLifespanInUnit = currentUnit.convertFromYears(person.lifespanYears, actualAge + remainingYears);
      const userCurrentAgeInUnit = currentUnit.convertFromYears(actualAge, actualAge + remainingYears);

      // Calculate the difference and determine if more or less
      const difference = Math.abs(personLifespanInUnit - userCurrentAgeInUnit);
      const formattedDifference = formatNumber(difference);
      const unitName = difference === 1 ? currentUnit.singular : currentUnit.plural;
      
      let text = "";
      if (formattedDifference === "0") {
        text = `You are exactly the same age that ${person.name} (${person.knownFor}) was when they died.`;
      } else if (userCurrentAgeInUnit > personLifespanInUnit) {
        text = `You've already lived ${formattedDifference} ${unitName} longer than ${person.name}'s entire life (${person.knownFor}).`;
      } else if (userCurrentAgeInUnit < personLifespanInUnit) {
        text = `${person.name} (${person.knownFor}) lived to be ${formattedDifference} ${unitName} older than your current age.`;
      }
      
      setComparison({ text, person });
    }
  }, [actualAge, currentUnit, remainingYears, animationComplete, comparisonIndex, shuffledFamousPeople]);

  // Add handlers for comparison navigation
  const handleNextComparison = () => {
    setComparisonIndex((prev) => (prev + 1) % shuffledFamousPeople.length);
  };

  const handlePrevComparison = () => {
    setComparisonIndex((prev) => 
      prev === 0 ? shuffledFamousPeople.length - 1 : prev - 1
    );
  };

  const handleNextUnit = () => {
    setCurrentUnitIndex((prev) => (prev + 1) % units.length);
    // // Reset the auto rotation timer when manually changing
    // if (intervalRef.current !== null) {
    //   clearInterval(intervalRef.current);
    // }
    // intervalRef.current = window.setInterval(() => {
    //   setCurrentUnitIndex((prev) => (prev + 1) % units.length);
    // }, 5000);
  };

  const handlePrevUnit = () => {
    setCurrentUnitIndex((prev) => (prev - 1 + units.length) % units.length);
    // // Reset the auto rotation timer when manually changing
    // if (intervalRef.current !== null) {
    //   clearInterval(intervalRef.current);
    // }
    // intervalRef.current = window.setInterval(() => {
    //   setCurrentUnitIndex((prev) => (prev + 1) % units.length);
    // }, 5000);
  };

  // Calculate the stroke-dasharray and stroke-dashoffset for the progress circle
  const radius = 180;
  const circumference = 2 * Math.PI * radius;
  
  // The "filled" portion of the circle is lifePercentage/100 * circumference
  // At the start of animation, we want the full circle (like 100%)
  // At the end, we want to show exactly lifePercentage
  // 
  // For SVG circles with stroke-dashoffset, 0 means full circle and higher values mean less filled
  // So we're animating from 0 (full) to (circumference * (1-lifePercentage/100)) (partial)
  // const targetDashOffset = circumference * (1 - lifePercentage/100);
  // const dashOffset = targetDashOffset * animationProgress;

  let dashOffset;
  if (timeView === 'remaining') {
    // Existing behavior for "Remaining" - start full, shrink to target
    const targetDashOffset = circumference * (1 - lifePercentage/100);
    dashOffset = targetDashOffset * animationProgress;
  } else {
    // For "Achieved" - start empty, grow anti-clockwise to target
    // The circumference value controls how "empty" it starts
    // The negative sign reverses the direction (makes it anti-clockwise)
    dashOffset = circumference - (lifePercentage/100 * circumference * animationProgress);
  }

  // Calculate the transform attribute for the circle to control drawing direction
  const circleTransform = timeView === 'achieved' ? 'scale(-1, 1) rotate(180)' : '';

  return (
    <div className="lifespan-result">
      {/* Time view switch control */}
      <div className="time-view-switch">
        <span className={timeView === 'achieved' ? 'active' : ''}>Achieved</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={timeView === 'remaining'}
            onChange={() => setTimeView(timeView === 'remaining' ? 'achieved' : 'remaining')}
          />
          <span className="slider"></span>
        </label>
        <span className={timeView === 'remaining' ? 'active' : ''}>Remaining</span>
      </div>
      
      {/* Message for users who exceeded average lifespan */}
      {actualAge > averageLifeExpectancyYears && (
        <div className="positive-message">
          <h3>Congratulations!</h3>
          <span>You've already exceeded the average lifespan.</span>
          <span>You've reached the <strong>{Math.round(agePercentile)}th</strong> percentile of your demographic!</span>
        </div>
      )}
      
      <div className="circular-countdown">
        <div className="circle-container">
          <svg className="progress-ring" width="400" height="400" viewBox="0 0 400 400">
            {/* Background circle */}
            <circle 
              className="progress-ring__circle-bg"
              stroke="#e6e6e6"
              strokeWidth="10"
              fill="transparent"
              r={radius}
              cx="200"
              cy="200"
            />
            {/* Progress circle */}
            <circle 
              className="progress-ring__circle"
              stroke={visualAttributes.progressColor}
              strokeWidth="10"
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="200"
              cy="200"
              transform={circleTransform}
              style={{
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: dashOffset
              }}
            />
          </svg>
          
          {/* Parent container positioned in the center, with child text elements */}
          {animationComplete && (
            <div className="text-content-container">
              <div className="remaining-years-text">
                {timeView === 'remaining' 
                  ? convertToUnit(remainingYears, actualAge + remainingYears, currentUnit, 'remaining')
                  : convertToUnit(actualAge, actualAge + remainingYears, currentUnit, 'achieved')
                }
              </div>
              <div className="years-label-text">
                {currentUnit.description}
              </div>
            </div>
          )}
          
          {/* Unit navigation positioned at the bottom of the circle */}
          {animationComplete && (
            <div className="circle-unit-navigation">
              <button 
                className="unit-nav-button" 
                onClick={handlePrevUnit}
                aria-label="Previous unit"
              >
                &lt;
              </button>
              <button 
                className="share-button" 
                onClick={handleShare}
                aria-label="Share this result"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
              </button>
              <button 
                className="unit-nav-button" 
                onClick={handleNextUnit}
                aria-label="Next unit"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
        
        {/* Famous person comparison section */}
        <div className="comparison-container">
          {animationComplete && comparison && (
            <div className="comparison-section">
              <button 
                className="comparison-nav-button" 
                onClick={handlePrevComparison}
                aria-label="Previous comparison"
              >
                &lt;
              </button>
              <p>{comparison.text}</p>
              <button 
                className="comparison-nav-button" 
                onClick={handleNextComparison}
                aria-label="Next comparison"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
      
      <button className="reset-button" onClick={onReset}>
        Calculate Again
      </button>
      
      {/* Toast notification */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        Link copied to clipboard!
      </div>
    </div>
  );
};

export default LifespanResult;
