// Main library exports for easy importing
export * from './utils'
export * from './constants'

// Export specific functions to avoid conflicts
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

export {
  validateTeamMember as validateTeamMemberSchema,
  validatePublication as validatePublicationSchema,
  validateActivity as validateActivitySchema,
  validateResearchArea,
  validateDataArray,
  validateAllData,
  sanitizeString,
  sanitizeAndValidate,
  type ValidationResult,
} from './validation'