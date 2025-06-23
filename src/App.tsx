import { useState, useEffect } from 'react';
import LifespanForm from './components/LifespanForm';
import LifespanResult from './components/LifespanResult';
import { amusingTimeUnits, calculateRemainingLife, getAverageLifeExpectancy, formatNumber } from './utils/lifespan';
import { shuffleArray } from './utils/arrayUtils';
import { parseUrlParams, hasRequiredParams } from './utils/urlParamUtils';
import './App.css';

function App() {
  const [calculationData, setCalculationData] = useState<{
    age: number;
    remainingYears: number;
    averageLifeExpectancyYears: number;
    showResult: boolean;
    gender: string;
    timeView?: 'achieved' | 'remaining';
    person?: string;
  }>({
    age: 0,
    remainingYears: 0,
    averageLifeExpectancyYears: 0,
    showResult: false,
    gender: '',
  });

  // State to store the randomized time units
  const [randomizedUnits, setRandomizedUnits] = useState(amusingTimeUnits);
  
  // State to store the initially selected unit (from URL param)
  const [selectedTimeUnit, setSelectedTimeUnit] = useState<string | undefined>(undefined);
  
  // Initialize from URL parameters on component mount
  useEffect(() => {
    const urlParams = parseUrlParams();
    
    if (hasRequiredParams(urlParams)) {
      // We have the required parameters, initialize the app with them
      const age = urlParams.age as number;
      const gender = urlParams.gender as string;
      
      // Calculate life expectancy values
      const averageLifeExpectancy = getAverageLifeExpectancy(gender);
      const remainingYears = calculateRemainingLife(age, gender);
      
      // Prepare the time units
      const shuffledUnits = shuffleArray(amusingTimeUnits);
      const filteredUnits = shuffledUnits.filter(unit => {
        const value = unit.convertFromYears(remainingYears);
        return parseFloat(formatNumber(value)) !== 0;
      });
      
      // Set the time units
      setRandomizedUnits(filteredUnits.length > 0 ? filteredUnits : shuffledUnits);
      
      // Set the selected time unit if provided in URL
      if (urlParams.timeUnit) {
        setSelectedTimeUnit(urlParams.timeUnit);
      }
      
      // Set the calculation data
      setCalculationData({
        age,
        gender,
        remainingYears,
        averageLifeExpectancyYears: averageLifeExpectancy,
        showResult: true,
        timeView: urlParams.timeView,
        person: urlParams.person,
      });
    }
  }, []);

  const handleSubmit = (age: number, gender: string) => {
    const averageLifeExpectancy = getAverageLifeExpectancy(gender);
    const remainingYears = calculateRemainingLife(age, gender);
    
    // Randomize the time units when calculating
    const shuffledUnits = shuffleArray(amusingTimeUnits);
    
    // Filter out units with zero values after formatting
    const filteredUnits = shuffledUnits.filter(unit => {
      const value = unit.convertFromYears(remainingYears);
      return parseFloat(formatNumber(value)) !== 0;
    });
    
    // If filtering removed all units, fallback to original units
    setRandomizedUnits(filteredUnits.length > 0 ? filteredUnits : shuffledUnits);
    
    setCalculationData({
      age, // Store the actual age
      gender,
      remainingYears,
      averageLifeExpectancyYears: averageLifeExpectancy,
      showResult: true,
    });
  };

  const handleReset = () => {
    setCalculationData({
      age: 0,
      gender: '',
      remainingYears: 0,
      averageLifeExpectancyYears: 0,
      showResult: false,
    });
    
    // Reset the selected time unit
    setSelectedTimeUnit(undefined);
    
    // Clear URL parameters by replacing the current state
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Life Countdown</h1>
      </header>
      
      <main className="app-content">
        {calculationData.showResult ? (
          <LifespanResult 
            remainingYears={calculationData.remainingYears}
            averageLifeExpectancyYears={calculationData.averageLifeExpectancyYears}
            units={randomizedUnits}
            onReset={handleReset}
            age={calculationData.age}
            gender={calculationData.gender}
            initialTimeView={calculationData.timeView}
            initialPersonName={calculationData.person}
            initialTimeUnit={selectedTimeUnit}
          />
        ) : (
          <LifespanForm onSubmit={handleSubmit} />
        )}
      </main>
      
      <footer className="app-footer">
        <p>Based on average <a href="https://www.ssa.gov/oact/STATS/table4c6.html">life expectancy data</a>, for entertainment purposes only.</p>
      </footer>
    </div>
  )
}

export default App
