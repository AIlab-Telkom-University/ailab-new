import { TeamMember, Publication, Activity, ResearchArea } from '@/types';

// Data validation schemas and utilities for type safety

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Base validation function type
 */
type ValidationFunction<T> = (data: any) => ValidationResult; // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Validate TeamMember data structure
 */
export const validateTeamMember: ValidationFunction<TeamMember> = (data) => {
  const errors: string[] = [];
  
  // Required fields validation
  if (!data.id || typeof data.id !== 'string') {
    errors.push('TeamMember.id is required and must be a string');
  }
  
  if (!data.name || typeof data.name !== 'string') {
    errors.push('TeamMember.name is required and must be a string');
  }
  
  if (!data.position || typeof data.position !== 'string') {
    errors.push('TeamMember.position is required and must be a string');
  }
  
  if (typeof data.generation !== 'number' || data.generation < 1) {
    errors.push('TeamMember.generation must be a positive number');
  }
  
  if (!data.image || typeof data.image !== 'string') {
    errors.push('TeamMember.image is required and must be a string');
  }
  
  if (!data.fallback || typeof data.fallback !== 'string') {
    errors.push('TeamMember.fallback is required and must be a string');
  }
  
  // Optional fields validation
  if (data.bio && typeof data.bio !== 'string') {
    errors.push('TeamMember.bio must be a string if provided');
  }
  
  // Social links validation
  if (!data.social || typeof data.social !== 'object') {
    errors.push('TeamMember.social is required and must be an object');
  } else {
    const validSocialKeys = ['linkedin', 'github', 'instagram', 'email'];
    Object.keys(data.social).forEach(key => {
      if (!validSocialKeys.includes(key)) {
        errors.push(`TeamMember.social.${key} is not a valid social platform`);
      }
      if (data.social[key] && typeof data.social[key] !== 'string') {
        errors.push(`TeamMember.social.${key} must be a string if provided`);
      }
    });
    
    // Email format validation
    if (data.social.email && !isValidEmail(data.social.email)) {
      errors.push('TeamMember.social.email must be a valid email address');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate Publication data structure
 */
export const validatePublication: ValidationFunction<Publication> = (data) => {
  const errors: string[] = [];
  
  // Required fields validation
  if (!data.id || typeof data.id !== 'string') {
    errors.push('Publication.id is required and must be a string');
  }
  
  if (!data.title || typeof data.title !== 'string') {
    errors.push('Publication.title is required and must be a string');
  }
  
  if (!Array.isArray(data.authors) || data.authors.length === 0) {
    errors.push('Publication.authors is required and must be a non-empty array');
  } else {
    data.authors.forEach((author: any, index: number) => {
      if (typeof author !== 'string') {
        errors.push(`Publication.authors[${index}] must be a string`);
      }
    });
  }
  
  if (typeof data.year !== 'number' || data.year < 1900 || data.year > new Date().getFullYear() + 5) {
    errors.push('Publication.year must be a valid year between 1900 and 5 years in the future');
  }
  
  if (!data.publisher || typeof data.publisher !== 'string') {
    errors.push('Publication.publisher is required and must be a string');
  }
  
  // Category validation
  const validCategories = ['journal', 'conference', 'thesis'];
  if (!validCategories.includes(data.category)) {
    errors.push(`Publication.category must be one of: ${validCategories.join(', ')}`);
  }
  
  // Optional fields validation
  if (data.url && (typeof data.url !== 'string' || !isValidUrl(data.url))) {
    errors.push('Publication.url must be a valid URL if provided');
  }
  
  if (data.abstract && typeof data.abstract !== 'string') {
    errors.push('Publication.abstract must be a string if provided');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate Activity data structure
 */
export const validateActivity: ValidationFunction<Activity> = (data) => {
  const errors: string[] = [];
  
  // Required fields validation
  if (!data.id || typeof data.id !== 'string') {
    errors.push('Activity.id is required and must be a string');
  }
  
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Activity.name is required and must be a string');
  }
  
  if (!data.description || typeof data.description !== 'string') {
    errors.push('Activity.description is required and must be a string');
  }
  
  if (!data.image || typeof data.image !== 'string') {
    errors.push('Activity.image is required and must be a string');
  }
  
  // Category validation
  const validCategories = ['study-group', 'focus-group', 'workshop'];
  if (!validCategories.includes(data.category)) {
    errors.push(`Activity.category must be one of: ${validCategories.join(', ')}`);
  }
  
  // Features validation
  if (!Array.isArray(data.features)) {
    errors.push('Activity.features is required and must be an array');
  } else {
    data.features.forEach((feature: any, index: number) => {
      if (typeof feature !== 'string') {
        errors.push(`Activity.features[${index}] must be a string`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate ResearchArea data structure
 */
export const validateResearchArea: ValidationFunction<ResearchArea> = (data) => {
  const errors: string[] = [];
  
  // Required fields validation
  if (!data.id || typeof data.id !== 'string') {
    errors.push('ResearchArea.id is required and must be a string');
  }
  
  if (!data.title || typeof data.title !== 'string') {
    errors.push('ResearchArea.title is required and must be a string');
  }
  
  if (!data.description || typeof data.description !== 'string') {
    errors.push('ResearchArea.description is required and must be a string');
  }
  
  if (!data.icon || typeof data.icon !== 'string') {
    errors.push('ResearchArea.icon is required and must be a string');
  }
  
  // Technologies validation
  if (!Array.isArray(data.technologies)) {
    errors.push('ResearchArea.technologies is required and must be an array');
  } else {
    data.technologies.forEach((tech: any, index: number) => {
      if (typeof tech !== 'string') {
        errors.push(`ResearchArea.technologies[${index}] must be a string`);
      }
    });
  }
  
  // Optional projects validation
  if (data.projects && !Array.isArray(data.projects)) {
    errors.push('ResearchArea.projects must be an array if provided');
  } else if (data.projects) {
    data.projects.forEach((project: any, index: number) => {
      if (typeof project !== 'string') {
        errors.push(`ResearchArea.projects[${index}] must be a string`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Batch validation for arrays of data
 */
export function validateDataArray<T>(
  dataArray: any[],
  validator: ValidationFunction<T>,
  itemName: string
): ValidationResult {
  const errors: string[] = [];
  
  if (!Array.isArray(dataArray)) {
    errors.push(`${itemName} data must be an array`);
    return { isValid: false, errors };
  }
  
  dataArray.forEach((item, index) => {
    const result = validator(item);
    if (!result.isValid) {
      result.errors.forEach(error => {
        errors.push(`${itemName}[${index}]: ${error}`);
      });
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Comprehensive data validation for all types
 */
export function validateAllData(data: {
  teamMembers?: any[];
  publications?: any[];
  activities?: any[];
  researchAreas?: any[];
}): ValidationResult {
  const errors: string[] = [];
  
  if (data.teamMembers) {
    const result = validateDataArray(data.teamMembers, validateTeamMember, 'TeamMember');
    errors.push(...result.errors);
  }
  
  if (data.publications) {
    const result = validateDataArray(data.publications, validatePublication, 'Publication');
    errors.push(...result.errors);
  }
  
  if (data.activities) {
    const result = validateDataArray(data.activities, validateActivity, 'Activity');
    errors.push(...result.errors);
  }
  
  if (data.researchAreas) {
    const result = validateDataArray(data.researchAreas, validateResearchArea, 'ResearchArea');
    errors.push(...result.errors);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Helper validation functions

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate URL format
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/\s+/g, ' '); // Normalize whitespace
}

/**
 * Validate and sanitize data before processing
 */
export function sanitizeAndValidate<T>(
  data: any,
  validator: ValidationFunction<T>
): { data: T | null; result: ValidationResult } {
  // Basic sanitization for string fields
  if (typeof data === 'object' && data !== null) {
    const sanitized = { ...data };
    
    Object.keys(sanitized).forEach(key => {
      if (typeof sanitized[key] === 'string') {
        sanitized[key] = sanitizeString(sanitized[key]);
      }
    });
    
    const result = validator(sanitized);
    return {
      data: result.isValid ? sanitized as T : null,
      result,
    };
  }
  
  const result = validator(data);
  return {
    data: result.isValid ? data as T : null,
    result,
  };
}