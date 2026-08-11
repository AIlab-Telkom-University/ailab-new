// Export all data modules
export * from './team';
export * from './publications';
export * from './activities';
export * from './research';
export * from './site';
export * from './about';

// Re-export commonly used items
export { 
  allTeamMembers, 
  currentTeam, 
  getCurrentCoordinator, 
  getCurrentAssistantCoordinator,
  getTeamByGeneration 
} from './team';

export { 
  publications, 
  getRecentPublications, 
  searchPublications,
  getPublicationsByYear,
  getPublicationsByCategory 
} from './publications';

export { 
  activities, 
  getActivityByCategory, 
  getActivityById 
} from './activities';

export { 
  researchAreas, 
  getFeaturedResearchAreas, 
  getResearchAreaById 
} from './research';

export { siteConfig as default } from './site';