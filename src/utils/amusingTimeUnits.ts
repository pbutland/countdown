import type { TimeUnit } from './lifespan';

/**
 * Collection of amusing, creative, and unique time units to measure human lifespan
 */
export const amusingTimeUnits: TimeUnit[] = [
  {
    name: 'fruit-fly-generations',
    singular: 'fruit fly generation',
    plural: 'fruit fly generations',
    convertFromYears: (years) => years * 365 / 40, // Fruit flies live about 40 days
    description: 'Fruit flies typically live for about 40 days'
  },
  {
    name: 'dog-years',
    singular: 'dog year',
    plural: 'dog years',
    convertFromYears: (years) => years * 7, // Common (if inaccurate) conversion
    description: 'A rough conversion where 1 human year equals 7 dog years'
  },
  {
    name: 'coffees',
    singular: 'cup of coffee',
    plural: 'cups of coffee',
    convertFromYears: (years) => years * 365 * 2, // Assuming 2 coffees per day
    description: 'Assuming an average coffee consumption of 2 cups per day'
  },
  {
    name: 'phone-charges',
    singular: 'phone charge',
    plural: 'phone charges',
    convertFromYears: (years) => years * 365, // Assuming daily charging
    description: 'Based on charging your phone once per day'
  },
  {
    name: 'percentage',
    singular: '%',
    plural: '%',
    convertFromYears: (years, totalYears) => years / totalYears * 100, // Percentage of life
    description: 'Percentage based on estimated lifespan'
  },
  
  // Biological Countdown units
  {
    name: 'heart-beats',
    singular: 'heart beat',
    plural: 'heart beats',
    convertFromYears: (years) => years * 365 * 24 * 60 * 72, // Average 72 beats per minute
    description: 'Based on an average heart rate of 72 beats per minute'
  },
  {
    name: 'breaths',
    singular: 'breath',
    plural: 'breaths',
    convertFromYears: (years) => years * 365 * 24 * 60 * 15, // Average 15 breaths per minute
    description: 'Based on an average breathing rate of 15 breaths per minute'
  },
  {
    name: 'blinks',
    singular: 'eye blink',
    plural: 'eye blinks',
    convertFromYears: (years) => years * 365 * 24 * 60 * 60 * 0.2, // Average 0.2 blinks per second
    description: 'Based on an average blinking rate of 12 blinks per minute'
  },
  {
    name: 'cell-regenerations',
    singular: 'complete cell regeneration cycle',
    plural: 'complete cell regeneration cycles',
    convertFromYears: (years) => years / 7, // Body replaces majority of cells every 7-10 years
    description: 'Your body replaces most of its cells every 7-10 years'
  },
  {
    name: 'global-births',
    singular: 'new life to be born',
    plural: 'new lives to be born',
    pastTense: 'new lives born',
    convertFromYears: (years) => years * 140000000, // Approx. 140 million births per year globally
    description: 'Based on global birth rate of approximately 140 million per year'
  },
  {
    name: 'hours-of-sleep',
    singular: 'hour of sleep',
    plural: 'hours of sleep',
    convertFromYears: (years) => years * 365 * 8, // Average 8 hours of sleep per day
    description: 'Based on the recommended 8 hours of sleep per day'
  },
  {
    name: 'bathroom-breaks',
    singular: 'bathroom visit',
    plural: 'bathroom visits',
    convertFromYears: (years) => years * 365 * 6, // Average 6 bathroom visits per day
    description: 'Based on an average of 6 bathroom visits per day'
  },
  {
    name: 'steps-count',
    singular: 'step',
    plural: 'steps',
    convertFromYears: (years) => years * 365 * 7000, // Average 7,000 steps per day
    description: 'Based on an average of 7,000 steps taken per day'
  },
  {
    name: 'walking-distance',
    singular: 'kilometer to walk',
    plural: 'kilometers to walk',
    pastTense: 'kilometers walked',
    convertFromYears: (years) => years * 365 * 5.5, // Average 5.5 km walked per day (7000 steps × 0.78m)
    description: 'Distance based on average daily steps (about 5.5 km per day)'
  },
  
  // Scientific time units from the Scientific facts Countdown section
  {
    name: 'light-travel',
    singular: 'light-year distance',
    plural: 'light-years distance',
    convertFromYears: (years) => years, // One year of light travel is one light-year
    description: 'Distance light will travel during your remaining lifetime (1 light-year = 9.46 trillion km)'
  },
  {
    name: 'earth-rotations',
    singular: 'Earth rotation',
    plural: 'Earth rotations',
    convertFromYears: (years) => years * 365.25, // Earth rotates once per day (accounting for leap years)
    description: 'Number of times the Earth will complete a full rotation on its axis'
  },
  {
    name: 'dna-replications',
    singular: 'DNA replication cycle',
    plural: 'DNA replication cycles',
    convertFromYears: (years) => years * 365 * 24 * (3e10), // Approximately 30 billion cell divisions per day
    description: 'Number of times your cells will copy their DNA (approximately 30 billion times per day)'
  },
  {
    name: 'brain-synapse-firings',
    singular: 'brain synapse firing',
    plural: 'brain synapse firings',
    convertFromYears: (years) => years * 365 * 24 * 3600 * (1e14), // Approx. 10^14 synapse firings per second
    description: 'Neural synaptic connections firing in your brain (estimated at 100 trillion per second)'
  },
  {
    name: 'planck-time-units',
    singular: 'Planck time unit',
    plural: 'Planck time units',
    convertFromYears: (years) => years * 365 * 24 * 3600 / 5.39e-44, // 5.39×10^-44 seconds per Planck unit
    description: 'Your remaining life measured in the smallest possible time units (5.39×10^−44 seconds each)'
  },
  
  // Cosmic & Earthly Countdown units
  {
    name: 'earth-travel-around-sun',
    singular: 'million kilometers traveled through space',
    plural: 'million kilometers traveled through space',
    convertFromYears: (years) => years * 940, // Earth travels ~940 million km per year around the sun
    description: 'Distance you will travel with Earth around the Sun (Earth travels ~940 million km per year)'
  },
  {
    name: 'solar-eclipses',
    singular: 'solar eclipse',
    plural: 'solar eclipses',
    convertFromYears: (years) => years * 2.4, // Global average of ~2.4 solar eclipses per year
    description: 'Number of solar eclipses that will occur (average of 2-5 solar eclipses per year globally)'
  },
  {
    name: 'lunar-eclipses',
    singular: 'lunar eclipse',
    plural: 'lunar eclipses',
    convertFromYears: (years) => years * 2.3, // Global average of ~2.3 lunar eclipses per year
    description: 'Number of lunar eclipses that will occur (average of 2-3 lunar eclipses per year globally)'
  },
  {
    name: 'full-moons',
    singular: 'full moon',
    plural: 'full moons',
    convertFromYears: (years) => years * 12.37, // There are about 12.37 full moons per year
    description: 'Number of full moons that will occur (approximately 12.37 per year)'
  },
  {
    name: 'blue-moons',
    singular: 'blue moon',
    plural: 'blue moons',
    convertFromYears: (years) => years * (7/19), // A blue moon occurs about 7 times in 19 years
    description: 'Number of blue moons you will see (a second full moon in a calendar month, occurs about 7 times in 19 years)'
  },
  {
    name: 'iss-orbits',
    singular: 'orbit of the ISS',
    plural: 'orbits of the ISS',
    convertFromYears: (years) => years * 365.25 * 16, // ISS orbits Earth about 16 times per day
    description: 'Number of times the International Space Station will orbit Earth (approx. 16 orbits per day)'
  },
  {
    name: 'major-comets',
    singular: 'major comet appearance',
    plural: 'major comet appearances',
    convertFromYears: (years) => years * 0.2, // Major comets visible to naked eye appear roughly once every 5 years
    description: 'Number of major comet appearances visible from Earth (approximately one every 5 years)'
  },
  {
    name: 'jupiter-orbits',
    singular: 'Jupiter orbit',
    plural: 'Jupiter orbits',
    convertFromYears: (years) => years / 11.86, // Jupiter orbits the sun every 11.86 years
    description: 'Jupiter takes 11.86 years to orbit the Sun'
  },
  {
    name: 'moon-orbits',
    singular: 'Moon orbit around Earth',
    plural: 'Moon orbits around Earth',
    convertFromYears: (years) => years * 13, // Moon orbits Earth ~13 times per year
    description: 'Number of times the Moon will orbit Earth (approximately 13 orbits per year)'
  },
  {
    name: 'mercury-orbits',
    singular: 'Mercury orbit around the Sun',
    plural: 'Mercury orbits around the Sun',
    convertFromYears: (years) => years / 0.24, // Mercury orbits Sun every 0.24 Earth years
    description: 'Number of Mercury orbits around the Sun (Mercury\'s year is 0.24 Earth years)'
  },
  {
    name: 'venus-orbits',
    singular: 'Venus orbit around the Sun',
    plural: 'Venus orbits around the Sun',
    convertFromYears: (years) => years / 0.62, // Venus orbits Sun every 0.62 Earth years
    description: 'Number of Venus orbits around the Sun (Venus\'s year is 0.62 Earth years)'
  },
  {
    name: 'mars-orbits',
    singular: 'Mars orbit around the Sun',
    plural: 'Mars orbits around the Sun',
    convertFromYears: (years) => years / 1.88, // Mars orbits Sun every 1.88 Earth years
    description: 'Number of Mars orbits around the Sun (Mars\'s year is 1.88 Earth years)'
  },
  {
    name: 'jupiter-orbits',
    singular: 'Jupiter orbit around the Sun',
    plural: 'Jupiter orbits around the Sun',
    convertFromYears: (years) => years / 11.86, // Jupiter orbits Sun every 11.86 Earth years
    description: 'Number of Jupiter orbits around the Sun (Jupiter\'s year is 11.86 Earth years)'
  },
  {
    name: 'saturn-orbits',
    singular: 'Saturn orbit around the Sun',
    plural: 'Saturn orbits around the Sun',
    convertFromYears: (years) => years / 29.46, // Saturn orbits Sun every 29.46 Earth years
    description: 'Number of Saturn orbits around the Sun (Saturn\'s year is 29.46 Earth years)'
  },
  {
    name: 'uranus-orbits',
    singular: 'Uranus orbit around the Sun',
    plural: 'Uranus orbits around the Sun',
    convertFromYears: (years) => years / 84.01, // Uranus orbits Sun every 84.01 Earth years
    description: 'Number of Uranus orbits around the Sun (Uranus\'s year is 84.01 Earth years)'
  },
  {
    name: 'neptune-orbits',
    singular: 'Neptune orbit around the Sun',
    plural: 'Neptune orbits around the Sun',
    convertFromYears: (years) => years / 164.79, // Neptune orbits Sun every 164.79 Earth years
    description: 'Number of Neptune orbits around the Sun (Neptune\'s year is 164.79 Earth years)'
  },

  // Esoteric & Philosophical Countdown Units
  {
    name: 'micro-centuries',
    singular: 'micro-century',
    plural: 'micro-centuries',
    convertFromYears: (years) => years * 365 * 24 * 60 * 60 / (52.6 * 60), // 52 minutes and 35.7 seconds = 1/1,000,000 of a century
    description: 'A micro-century is 52 minutes and 35.7 seconds (one millionth of a century)'
  },
  {
    name: 'spoken-words',
    singular: 'spoken word',
    plural: 'spoken words',
    convertFromYears: (years) => years * 365 * 16000, // Average person speaks ~16,000 words per day
    description: 'Based on the average person speaking about 16,000 words per day'
  },
  
  // Time based Countdown Units
  {
    name: 'years',
    singular: 'year',
    plural: 'years',
    convertFromYears: (years) => years, // Direct conversion
    description: 'Standard measure of time - 365.25 days'
  },
  {
    name: 'months',
    singular: 'month',
    plural: 'months',
    convertFromYears: (years) => years * 12, // 12 months per year
    description: 'Standard measure of time - 1/12 of a year'
  },
  {
    name: 'weeks',
    singular: 'week',
    plural: 'weeks',
    convertFromYears: (years) => years * 52.143, // 52.143 weeks per year
    description: 'Standard measure of time - 7 days'
  },
  {
    name: 'days',
    singular: 'day',
    plural: 'days',
    convertFromYears: (years) => years * 365.25, // 365.25 days per year (including leap years)
    description: 'Standard measure of time - 24 hours'
  },
  {
    name: 'hours',
    singular: 'hour',
    plural: 'hours',
    convertFromYears: (years) => years * 365.25 * 24, // 24 hours per day
    description: 'Standard measure of time - 60 minutes'
  },
  {
    name: 'minutes',
    singular: 'minute',
    plural: 'minutes',
    convertFromYears: (years) => years * 365.25 * 24 * 60, // 60 minutes per hour
    description: 'Standard measure of time - 60 seconds'
  },
  {
    name: 'seconds',
    singular: 'second',
    plural: 'seconds',
    convertFromYears: (years) => years * 365.25 * 24 * 60 * 60, // 60 seconds per minute
    description: 'Standard measure of time - base SI unit of time'
  },
  {
    name: 'milliseconds',
    singular: 'millisecond',
    plural: 'milliseconds',
    convertFromYears: (years) => years * 365.25 * 24 * 60 * 60 * 1000, // 1000 milliseconds per second
    description: 'One thousandth of a second (0.001 seconds)'
  },
  {
    name: 'jiffies',
    singular: 'jiffy',
    plural: 'jiffies',
    convertFromYears: (years) => years * 365.25 * 24 * 60 * 60 / (3e-24), // Scientific definition: time for light to travel one fermi (10^-15 m)
    description: 'In physics, a jiffy is the time it takes light to travel one fermi (10^-15 meters) - about 3×10^-24 seconds'
  },

  // Computer Science Countdown Units
  {
    name: 'moore-law-doublings',
    singular: 'Moore\'s Law doubling',
    plural: 'Moore\'s Law doublings',
    convertFromYears: (years) => years / 2, // Transistor density doubles every 2 years
    description: 'Times transistor density doubles according to Moore\'s Law (every 2 years)'
  },
  {
    name: 'cosmic-ray-bit-flips',
    singular: 'cosmic‐ray induced bit flip',
    plural: 'cosmic‐ray induced bit flips',
    convertFromYears: (years) => years * 1000, // ~1000 DRAM errors per year
    description: 'Single‐bit memory errors caused by cosmic rays (DRAM)'
  },
  {
    name: 'programming-languages-created',
    singular: 'new programming language',
    plural: 'new programming languages',
    convertFromYears: (years) => years * 8.7, // ~8.7 new notable languages per year
    description: 'Number of new programming languages'
  },

  // Random Countdown Ideas Units
  {
    name: 'leap-years',
    singular: 'leap year',
    plural: 'leap years',
    convertFromYears: (years) => years / 4, // Leap year occurs every 4 years (approximately)
    description: 'Number of February 29ths you will see (leap years occur approximately every 4 years)'
  },
  {
    name: 'summer-olympics',
    singular: 'Summer Olympic Games',
    plural: 'Summer Olympic Games',
    convertFromYears: (years) => years / 4, // Summer Olympics occur every 4 years
    description: 'Number of Summer Olympic Games that will occur (held every 4 years)'
  },
  {
    name: 'winter-olympics',
    singular: 'Winter Olympic Games',
    plural: 'Winter Olympic Games',
    convertFromYears: (years) => years / 4, // Winter Olympics occur every 4 years
    description: 'Number of Winter Olympic Games that will occur (held every 4 years)'
  },
  {
    name: 'world-cups',
    singular: 'FIFA World Cup',
    plural: 'FIFA World Cups',
    convertFromYears: (years) => years / 4, // FIFA World Cup occurs every 4 years
    description: 'Number of FIFA World Cups that will occur (held every 4 years)'
  },
  {
    name: 'rugby-world-cups',
    singular: 'Rugby World Cup',
    plural: 'Rugby World Cups',
    convertFromYears: (years) => years / 4, // Rugby World Cup occurs every 4 years
    description: 'Number of Rugby World Cups that will occur (held every 4 years)'
  },
  {
    name: 'friday-thirteenths',
    singular: 'Friday the 13th',
    plural: 'Friday the 13ths',
    convertFromYears: (years) => years * 1.72, // Average of 1.72 Friday the 13ths per year
    description: 'Number of Friday the 13ths that will occur (average of 1.72 per year)'
  },
  {
    name: 'us-elections',
    singular: 'U.S. presidential election',
    plural: 'U.S. presidential elections',
    convertFromYears: (years) => years / 4, // U.S. presidential elections occur every 4 years
    description: 'Number of U.S. presidential elections that will occur (held every 4 years)'
  },
  {
    name: 'birthday-weekends',
    singular: 'time your birthday falls on a weekend',
    plural: 'times your birthday falls on a weekend',
    pastTense: 'times your birthday fell on a weekend',
    convertFromYears: (years) => years * (2/7), // Probability of birthday falling on weekend is 2/7
    description: 'Number of times your birthday will fall on a Saturday or Sunday (2/7 probability each year)'
  },
  {
    name: 'palindrome-dates',
    singular: 'palindrome date',
    plural: 'palindrome dates',
    convertFromYears: (years) => years * 0.3, // Approximately 0.3 palindrome dates per year in MM/DD/YYYY format
    description: 'Number of times the calendar will be a palindrome (e.g., 02/02/2020, format depends on region)'
  }
];
