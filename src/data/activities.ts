import { Activity } from '@/types';

export const activities: Activity[] = [
  {
    id: 'study-group',
    name: 'Study Group',
    description: 'Activities in this group includes studying the introduction of AI, exploring AI trends in industry and its research applications. In this study group, the members are taught a number of methods used in AI, so that later on, it can be used as their basic knowledge that can be developed in a lot of work that are related to AI.',
    image: '/images/activities/study-group.svg',
    category: 'study-group',
    features: [
      'Introduction to Artificial Intelligence fundamentals',
      'Exploring current AI trends in industry applications',
      'Learning various AI methods and algorithms',
      'Building foundational knowledge for AI development',
      'Hands-on workshops and practical sessions',
      'Regular study sessions and knowledge sharing'
    ]
  },
  {
    id: 'focus-group',
    name: 'Focus Group',
    description: 'This group aims to conduct advanced AI research and publish its findings to academic journals or present it to academic conferences. In this round of year, the themes would be Computer Vision (CV) and Natural Language Processing (NLP).',
    image: '/images/activities/focus-group.svg',
    category: 'focus-group',
    features: [
      'Advanced AI research in Computer Vision',
      'Natural Language Processing research projects',
      'Academic publication preparation and submission',
      'Conference presentation opportunities',
      'Collaborative research with industry partners',
      'Mentorship from experienced researchers'
    ]
  },
  {
    id: 'training-workshop',
    name: 'Training/Workshop',
    description: 'Other than study and research activities, as our contribution to the society, we held some training and workshop in fields of Artificial Intelligence to reach people or students beyond the member of this lab.',
    image: '/images/activities/training-workshop.svg',
    category: 'workshop',
    features: [
      'Public AI training sessions for students',
      'Community outreach programs',
      'Industry collaboration workshops',
      'Skill development in AI technologies',
      'Certification programs for participants',
      'Knowledge transfer to broader community'
    ]
  }
];

// Helper functions for activities
export const getActivityByCategory = (category: Activity['category']): Activity | undefined => {
  return activities.find(activity => activity.category === category);
};

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const getAllActivityCategories = (): Activity['category'][] => {
  return activities.map(activity => activity.category);
};