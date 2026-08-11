import { TeamMember, Publication, Activity } from '@/types';

/**
 * Transform legacy team member data to new format
 */
export const transformLegacyTeamMember = (legacyMember: any, generation: number): TeamMember => {
  return {
    id: generateId(legacyMember.name),
    name: legacyMember.name,
    position: legacyMember.position,
    generation,
    image: transformImagePath(legacyMember.image),
    fallback: legacyMember.fallback || generateFallback(legacyMember.name),
    bio: generateBio(legacyMember.position),
    social: {
      linkedin: legacyMember.social?.linkedin,
      github: legacyMember.social?.github,
      instagram: legacyMember.social?.instagram,
      email: legacyMember.social?.email?.replace('mailto:', ''),
    },
  };
};

/**
 * Transform legacy publication data to new format
 */
export const transformLegacyPublication = (legacyPub: any): Publication => {
  return {
    id: generateId(legacyPub.title),
    title: legacyPub.title,
    authors: parseAuthors(legacyPub.author),
    year: legacyPub.year,
    publisher: legacyPub.publisher || 'Unknown',
    category: determinePublicationCategory(legacyPub.publisher, legacyPub.title),
    url: legacyPub.url,
    abstract: generateAbstract(legacyPub.title),
  };
};

/**
 * Transform legacy activity data to new format
 */
export const transformLegacyActivity = (legacyActivity: any): Activity => {
  return {
    id: generateId(legacyActivity.name),
    name: legacyActivity.name,
    description: legacyActivity.desc || legacyActivity.description,
    image: transformImagePath(legacyActivity.image),
    category: determineActivityCategory(legacyActivity.name),
    features: generateActivityFeatures(legacyActivity.name),
  };
};

/**
 * Generate a URL-friendly ID from a string
 */
export const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

/**
 * Generate fallback initials from a name
 */
export const generateFallback = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 3); // Limit to 3 characters
};

/**
 * Transform image paths from legacy format to new format
 */
export const transformImagePath = (legacyPath: string): string => {
  if (!legacyPath) return '/images/placeholder.jpg';
  
  // Handle external URLs (dummy images, etc.)
  if (legacyPath.startsWith('http')) {
    return '/images/placeholder.jpg';
  }
  
  // Transform legacy paths to new structure
  if (legacyPath.startsWith('/assets/images/')) {
    return legacyPath.replace('/assets/images/', '/images/team/');
  }
  
  if (legacyPath.startsWith('/img/')) {
    return legacyPath.replace('/img/', '/images/');
  }
  
  return legacyPath;
};

/**
 * Parse author string into array of authors
 */
export const parseAuthors = (authorString: string): string[] => {
  if (!authorString) return [];
  
  // Split by common separators
  const separators = [';', ',', ' and ', ' & '];
  let authors = [authorString];
  
  separators.forEach(separator => {
    authors = authors.flatMap(author => 
      author.split(separator).map(a => a.trim())
    );
  });
  
  return authors.filter(author => author.length > 0);
};

/**
 * Determine publication category based on publisher and title
 */
export const determinePublicationCategory = (publisher: string, title: string): Publication['category'] => {
  const publisherLower = publisher.toLowerCase();
  const titleLower = title.toLowerCase();
  
  if (publisherLower.includes('ieee') || publisherLower.includes('conference') || publisherLower.includes('isriti')) {
    return 'conference';
  }
  
  if (titleLower.includes('thesis') || publisherLower.includes('repository') || publisherLower.includes('telkom university')) {
    return 'thesis';
  }
  
  return 'journal';
};

/**
 * Determine activity category from name
 */
export const determineActivityCategory = (name: string): Activity['category'] => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('study group')) return 'study-group';
  if (nameLower.includes('focus group')) return 'focus-group';
  if (nameLower.includes('training') || nameLower.includes('workshop')) return 'workshop';
  
  return 'workshop'; // Default
};

/**
 * Generate bio based on position
 */
export const generateBio = (position: string): string => {
  const positionLower = position.toLowerCase();
  
  if (positionLower.includes('coordinator')) {
    return `${position} with expertise in AI research and laboratory management.`;
  }
  
  if (positionLower.includes('secretary')) {
    return `${position} responsible for administrative tasks and laboratory coordination.`;
  }
  
  if (positionLower.includes('treasurer')) {
    return `${position} managing laboratory finances and budget allocation.`;
  }
  
  if (positionLower.includes('focus group')) {
    return `${position} coordinator leading advanced AI research initiatives.`;
  }
  
  if (positionLower.includes('study group')) {
    return `${position} coordinator organizing educational activities and workshops.`;
  }
  
  if (positionLower.includes('media')) {
    return `${position} coordinator managing laboratory communications and outreach.`;
  }
  
  if (positionLower.includes('inventory')) {
    return `${position} manager responsible for laboratory equipment and resources.`;
  }
  
  return `${position} contributing to laboratory operations and AI research activities.`;
};

/**
 * Generate abstract for publication based on title
 */
export const generateAbstract = (title: string): string => {
  // This is a simplified version - in a real scenario, you'd want to manually write abstracts
  return `This research focuses on ${title.toLowerCase()}, exploring innovative approaches and methodologies in the field of artificial intelligence and machine learning.`;
};

/**
 * Generate activity features based on activity name
 */
export const generateActivityFeatures = (name: string): string[] => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('study group')) {
    return [
      'Introduction to Artificial Intelligence fundamentals',
      'Exploring current AI trends in industry applications',
      'Learning various AI methods and algorithms',
      'Building foundational knowledge for AI development',
      'Hands-on workshops and practical sessions',
      'Regular study sessions and knowledge sharing'
    ];
  }
  
  if (nameLower.includes('focus group')) {
    return [
      'Advanced AI research in Computer Vision',
      'Natural Language Processing research projects',
      'Academic publication preparation and submission',
      'Conference presentation opportunities',
      'Collaborative research with industry partners',
      'Mentorship from experienced researchers'
    ];
  }
  
  if (nameLower.includes('training') || nameLower.includes('workshop')) {
    return [
      'Public AI training sessions for students',
      'Community outreach programs',
      'Industry collaboration workshops',
      'Skill development in AI technologies',
      'Certification programs for participants',
      'Knowledge transfer to broader community'
    ];
  }
  
  return [];
};

/**
 * Validate and clean data
 */
export const validateTeamMember = (member: TeamMember): boolean => {
  return !!(member.name && member.position && member.generation);
};

export const validatePublication = (publication: Publication): boolean => {
  return !!(publication.title && publication.authors.length > 0 && publication.year);
};

export const validateActivity = (activity: Activity): boolean => {
  return !!(activity.name && activity.description && activity.category);
};

/**
 * Sort functions
 */
export const sortTeamMembersByPosition = (members: TeamMember[]): TeamMember[] => {
  const positionOrder = [
    'Laboratory Coordinator',
    'Lab.Assistant Coordinator',
    'Secretary',
    'Treasurer',
    'Secretary & Treasurer',
    'Internal',
    'External',
    'Internal & Inventory',
    'External & Media',
    'Inventory',
    'Media',
    'Focus Group',
    'Study Group',
    'Research And Development',
    'Human Resource'
  ];
  
  return members.sort((a, b) => {
    const aIndex = positionOrder.indexOf(a.position);
    const bIndex = positionOrder.indexOf(b.position);
    
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    
    return aIndex - bIndex;
  });
};

export const sortPublicationsByYear = (publications: Publication[]): Publication[] => {
  return publications.sort((a, b) => b.year - a.year);
};