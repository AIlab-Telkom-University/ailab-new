import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Re-export our custom utilities for easy access
export * from './constants'

// Export data transformation utilities
export {
  transformLegacyTeamMember,
  transformLegacyPublication,
  transformLegacyActivity,
  generateId,
  generateFallback,
  transformImagePath,
  parseAuthors,
  determinePublicationCategory,
  determineActivityCategory,
  generateBio,
  generateAbstract,
  generateActivityFeatures,
  sortTeamMembersByPosition,
  sortPublicationsByYear,
} from './data-transform'

// Export validation utilities with prefixed names to avoid conflicts
export {
  validateTeamMember as validateTeamMemberData,
  validatePublication as validatePublicationData,
  validateActivity as validateActivityData,
  validateResearchArea,
  validateDataArray,
  validateAllData,
  sanitizeString,
  sanitizeAndValidate,
} from './validation'
