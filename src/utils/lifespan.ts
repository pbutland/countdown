// Interface for data structures that map gender to age-based values
interface ConditionalLifeExpectancy {
  [key: string]: {
    [key: string]: number;
  };
}

// Interface for age-specific life expectancy data
interface AgeSpecificLifeExpectancyData {
  [key: string]: {
    [age: number]: number;
  };
}

// Age-specific life expectancy data from SSA 2022 Period Life Table
// https://www.ssa.gov/oact/STATS/table4c6.html
export const ageSpecificLifeExpectancy: AgeSpecificLifeExpectancyData = {
  'male': {
    0: 74.74,
    1: 74.20,
    2: 73.23,
    3: 72.25,
    4: 71.27,
    5: 70.29,
    6: 69.30,
    7: 68.31,
    8: 67.32,
    9: 66.32,
    10: 65.33,
    11: 64.34,
    12: 63.35,
    13: 62.36,
    14: 61.37,
    15: 60.39,
    16: 59.42,
    17: 58.46,
    18: 57.50,
    19: 56.56,
    20: 55.63,
    21: 54.70,
    22: 53.78,
    23: 52.86,
    24: 51.94,
    25: 51.03,
    26: 50.12,
    27: 49.21,
    28: 48.31,
    29: 47.41,
    30: 46.51,
    31: 45.62,
    32: 44.73,
    33: 43.84,
    34: 42.96,
    35: 42.08,
    36: 41.19,
    37: 40.31,
    38: 39.43,
    39: 38.55,
    40: 37.67,
    41: 36.80,
    42: 35.93,
    43: 35.05,
    44: 34.19,
    45: 33.32,
    46: 32.46,
    47: 31.60,
    48: 30.75,
    49: 29.90,
    50: 29.05,
    51: 28.22,
    52: 27.39,
    53: 26.56,
    54: 25.75,
    55: 24.94,
    56: 24.15,
    57: 23.37,
    58: 22.59,
    59: 21.83,
    60: 21.08,
    61: 20.34,
    62: 19.61,
    63: 18.89,
    64: 18.18,
    65: 17.48,
    66: 16.79,
    67: 16.11,
    68: 15.43,
    69: 14.76,
    70: 14.09,
    71: 13.44,
    72: 12.80,
    73: 12.16,
    74: 11.53,
    75: 10.92,
    76: 10.32,
    77: 9.74,
    78: 9.18,
    79: 8.64,
    80: 8.11,
    81: 7.60,
    82: 7.11,
    83: 6.64,
    84: 6.18,
    85: 5.75,
    86: 5.34,
    87: 4.94,
    88: 4.58,
    89: 4.23,
    90: 3.91,
    91: 3.60,
    92: 3.32,
    93: 3.06,
    94: 2.83,
    95: 2.63,
    96: 2.44,
    97: 2.28,
    98: 2.13,
    99: 2.00,
    100: 1.88,
    101: 1.76,
    102: 1.66,
    103: 1.56,
    104: 1.47,
    105: 1.39,
    106: 1.31,
    107: 1.23,
    108: 1.15,
    109: 1.08,
    110: 1.01,
    111: 0.94,
    112: 0.87,
    113: 0.81,
    114: 0.75,
    115: 0.70,
    116: 0.64,
    117: 0.59,
    118: 0.54,
    119: 0.50
  },
  'female': {
    0: 80.18,
    1: 79.60,
    2: 78.63,
    3: 77.65,
    4: 76.66,
    5: 75.67,
    6: 74.68,
    7: 73.69,
    8: 72.70,
    9: 71.71,
    10: 70.72,
    11: 69.72,
    12: 68.73,
    13: 67.74,
    14: 66.75,
    15: 65.76,
    16: 64.78,
    17: 63.80,
    18: 62.82,
    19: 61.84,
    20: 60.87,
    21: 59.90,
    22: 58.93,
    23: 57.97,
    24: 57.00,
    25: 56.04,
    26: 55.08,
    27: 54.12,
    28: 53.16,
    29: 52.20,
    30: 51.25,
    31: 50.30,
    32: 49.35,
    33: 48.41,
    34: 47.47,
    35: 46.53,
    36: 45.59,
    37: 44.65,
    38: 43.72,
    39: 42.79,
    40: 41.86,
    41: 40.93,
    42: 40.01,
    43: 39.09,
    44: 38.17,
    45: 37.25,
    46: 36.34,
    47: 35.43,
    48: 34.53,
    49: 33.63,
    50: 32.73,
    51: 31.84,
    52: 30.96,
    53: 30.08,
    54: 29.20,
    55: 28.34,
    56: 27.48,
    57: 26.63,
    58: 25.78,
    59: 24.95,
    60: 24.12,
    61: 23.31,
    62: 22.50,
    63: 21.70,
    64: 20.90,
    65: 20.12,
    66: 19.34,
    67: 18.56,
    68: 17.79,
    69: 17.03,
    70: 16.27,
    71: 15.53,
    72: 14.80,
    73: 14.08,
    74: 13.37,
    75: 12.68,
    76: 12.00,
    77: 11.35,
    78: 10.71,
    79: 10.09,
    80: 9.49,
    81: 8.90,
    82: 8.34,
    83: 7.79,
    84: 7.26,
    85: 6.76,
    86: 6.28,
    87: 5.83,
    88: 5.40,
    89: 5.00,
    90: 4.62,
    91: 4.27,
    92: 3.94,
    93: 3.64,
    94: 3.36,
    95: 3.10,
    96: 2.87,
    97: 2.66,
    98: 2.47,
    99: 2.30,
    100: 2.14,
    101: 2.00,
    102: 1.87,
    103: 1.75,
    104: 1.63,
    105: 1.52,
    106: 1.42,
    107: 1.32,
    108: 1.23,
    109: 1.14,
    110: 1.05,
    111: 0.97,
    112: 0.89,
    113: 0.82,
    114: 0.75,
    115: 0.70,
    116: 0.64,
    117: 0.59,
    118: 0.54,
    119: 0.50
  }
};

// Data for age percentiles - what percentage of population reaches this age
export const agePercentiles: ConditionalLifeExpectancy = {
  'male': {
    '80': 85,
    '85': 92,
    '90': 96,
    '95': 98,
    '100': 99.5
  },
  'female': {
    '80': 90,
    '85': 94,
    '90': 97,
    '95': 98.5,
    '100': 99.7
  }
};

export const getAverageLifeExpectancy = (gender: string): number => {
  // Average life expectancy data (in years)
  switch (gender.toLowerCase()) {
    case 'male':
    case 'm':
      return 76.1;
    case 'female':
    case 'f':
      return 81.1;
    default:
      return 78.8;
  }
};

export interface TimeUnit {
  name: string;
  singular: string;
  plural: string;
  pastTense?: string;
  convertFromYears: (years: number, totalYears: number) => number;
  description: string;
}

// Import and re-export from amusingTimeUnits.ts
export { amusingTimeUnits } from './amusingTimeUnits';

// Re-export from famousPeople.ts
export { famousPeople, longLivedFamousPeople } from './famousPeople';
export type { FamousPerson } from './famousPeople';

export const calculateRemainingLife = (age: number, gender: string): number => {
  const normalizedGender = gender.toLowerCase().startsWith('m') ? 'male' : 'female';
  
  // Round age to the nearest integer for the map lookup
  const intAge = Math.round(age);
  
  // Get age-specific life expectancy from the table
  // If age is out of bounds, use the closest available age
  let remainingYears = 0;
  
  if (intAge <= 0) {
    remainingYears = ageSpecificLifeExpectancy[normalizedGender][0] || 0;
  } else if (intAge >= 119) {
    remainingYears = ageSpecificLifeExpectancy[normalizedGender][119] || 0;
  } else {
    remainingYears = ageSpecificLifeExpectancy[normalizedGender][intAge] || 0;
  }
  
  return remainingYears;
};

/**
 * Get the percentile of population that reaches this age
 */
export const getAgePercentile = (age: number, gender: string): number => {
  if (age <= 0) return 0; // Handle edge case
  const normalizedGender = gender.toLowerCase().startsWith('m') ? 'male' : 'female';
  
  // Find closest age bracket
  const brackets = Object.keys(agePercentiles[normalizedGender])
    .map(bracket => parseInt(bracket, 10))
    .sort((a, b) => a - b);
  
  let nearestBracket = brackets.filter(bracket => bracket <= age).pop() || 80;
  
  if (nearestBracket >= 100) {
    return 99.9;
  }
  
  // Get percentile for this age
  return agePercentiles[normalizedGender][nearestBracket.toString()] || 99;
};

export const formatNumber = (num: number): string => {
  // Check if number is in scientific notation range (very large or small)
  const numStr = num.toString();
  if (numStr.includes('e')) {
    // Extract base and exponent
    const [base, exponent] = numStr.split('e');
    // Round base to 2 decimal places
    const roundedBase = parseFloat(base).toFixed(2);
    // Remove trailing zeros and decimal point if needed
    const cleanBase = roundedBase.replace(/\.?0+$/, '');
    // Return formatted scientific notation
    return `${cleanBase}e${exponent}`;
  }
  
  // For regular numbers, continue with the existing logic
  // Round to nearest 0.25
  num = Math.round(num * 4) / 4;
  
  if (num >= 1_000_000_000_000_000_000) {
    return `${Math.round(num / 1_000_000_000_000_000_000 * 4) / 4} quintillion`;
  } else if (num >= 1_000_000_000_000_000) {
    return `${Math.round(num / 1_000_000_000_000_000 * 4) / 4} quadrillion`;
  } else if (num >= 1_000_000_000_000) {
    return `${Math.round(num / 1_000_000_000_000 * 4) / 4} trillion`;
  } else if (num >= 1_000_000_000) {
    return `${Math.round(num / 1_000_000_000 * 4) / 4} billion`;
  } else if (num >= 1_000_000) {
    return `${Math.round(num / 1_000_000 * 4) / 4} million`;
  } else if (num >= 1_000) {
    return `${Math.round(num / 1_000 * 4) / 4} thousand`;
  } else {
    return num.toString();
  }
};

export const convertToUnit = (years: number, totalYears: number, unit: TimeUnit, timeView?: 'remaining' | 'achieved'): string => {
  const value = unit.convertFromYears(years, totalYears);
  const formattedValue = formatNumber(value);
  
  // Use pastTense if available and timeView is "achieved"
  let unitName;
  if (timeView === 'achieved' && unit.pastTense) {
    unitName = unit.pastTense;
  } else {
    unitName = value === 1 ? unit.singular : unit.plural;
  }
  
  return `${formattedValue} ${unitName}`;
};

/**
 * Interface for circle visualization attributes
 */
export interface CircleVisualizationAttributes {
  circleColor: string;
  progressColor: string;
  progressPercentage: number;
  extraYearsIndicator: boolean;
}

/**
 * Get circle visualization attributes based on age and life expectancy
 */
export const getCircleAttributes = (age: number, calculatedLifeExpectancy: number, averageLifeExpectancy: number): CircleVisualizationAttributes => {
  return {
    circleColor: age > averageLifeExpectancy ? "#4CAF50" : "#3498db",
    progressColor: age > averageLifeExpectancy ? "#8BC34A" : "#3498db",
    progressPercentage: (age / calculatedLifeExpectancy) * 100,
    extraYearsIndicator: false
  };
};
