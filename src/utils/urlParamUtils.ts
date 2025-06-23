import { amusingTimeUnits } from './lifespan';

export interface UrlParams {
  age?: number;
  gender?: string;
  timeView?: 'achieved' | 'remaining';
  person?: string;
  timeUnit?: string;
}

export function parseUrlParams(): UrlParams {
  const params = new URLSearchParams(window.location.search);
  
  const result: UrlParams = {};
  
  // Parse age (required)
  const ageParam = params.get('age');
  if (ageParam) {
    const age = parseInt(ageParam, 10);
    if (!isNaN(age) && age >= 0 && age <= 120) {
      result.age = age;
    }
  }
  
  // Parse gender (required)
  const sexParam = params.get('sex') || params.get('gender');
  if (sexParam) {
    const gender = sexParam.toLowerCase();
    if (gender === 'male' || gender === 'female') {
      result.gender = gender;
    }
  }
  
  // Parse timeView (optional)
  const timeViewParam = params.get('timeView');
  if (timeViewParam) {
    const timeView = timeViewParam.toLowerCase();
    if (timeView === 'achieved' || timeView === 'remaining') {
      result.timeView = timeView as 'achieved' | 'remaining';
    }
  }
  
  // Parse person (optional)
  const personParam = params.get('person');
  if (personParam) {
    result.person = personParam;
  }
  
  // Parse timeUnit (optional)
  const timeUnitParam = params.get('timeUnit');
  if (timeUnitParam) {
    const matchedUnit = amusingTimeUnits.find(
      unit => unit.name.toLowerCase() === timeUnitParam.toLowerCase()
    );
    if (matchedUnit) {
      result.timeUnit = matchedUnit.name;
    }
  }
  
  return result;
}

export function hasRequiredParams(params: UrlParams): boolean {
  return params.age !== undefined && params.gender !== undefined;
}

/**
 * Generates a shareable URL with the current app state
 */
export function generateShareUrl(params: UrlParams): string {
  const url = new URL(window.location.href.split('?')[0]);
  
  // Add age parameter
  if (params.age !== undefined) {
    url.searchParams.append('age', params.age.toString());
  }
  
  // Add gender/sex parameter
  if (params.gender) {
    url.searchParams.append('sex', params.gender);
  }
  
  // Add timeView parameter
  if (params.timeView) {
    url.searchParams.append('timeView', params.timeView);
  }
  
  // Add person parameter
  if (params.person) {
    url.searchParams.append('person', params.person);
  }
  
  // Add timeUnit parameter
  if (params.timeUnit) {
    url.searchParams.append('timeUnit', params.timeUnit);
  }
  
  return url.toString();
}
