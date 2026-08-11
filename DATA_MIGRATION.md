# Data Migration Documentation

This document describes the data migration process from the legacy AILab website to the new modern website structure.

## Overview

The migration process involves transforming data from the legacy JavaScript format to a new TypeScript-based structure with improved type safety, validation, and organization.

## Data Structure

### Team Members (`src/data/team.ts`)

**Legacy Format:**
```javascript
{
  name: "John Doe",
  position: "Lab.Assistant Coordinator",
  image: "/assets/images/aslab20/john.jpg",
  fallback: "JD",
  social: {
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  }
}
```

**New Format:**
```typescript
{
  id: "john-doe",
  name: "John Doe",
  position: "Lab.Assistant Coordinator",
  generation: 2020,
  image: "/images/team/2020/john.jpg",
  fallback: "JD",
  bio: "Lab Assistant Coordinator with expertise in AI research.",
  social: {
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    instagram: undefined,
    email: undefined
  }
}
```

### Publications (`src/data/publications.ts`)

**Legacy Format:**
```javascript
{
  year: 2022,
  title: "Research Title",
  author: "Author 1; Author 2; Author 3",
  publisher: "IEEE",
  url: "https://example.com"
}
```

**New Format:**
```typescript
{
  id: "research-title-2022",
  title: "Research Title",
  authors: ["Author 1", "Author 2", "Author 3"],
  year: 2022,
  publisher: "IEEE",
  category: "conference",
  url: "https://example.com",
  abstract: "Generated abstract based on title and content."
}
```

### Activities (`src/data/activities.ts`)

**Legacy Format:**
```javascript
{
  name: "Study Group",
  desc: "Description of the activity...",
  image: "/img/undraw_pair_programming_njlp.svg"
}
```

**New Format:**
```typescript
{
  id: "study-group",
  name: "Study Group",
  description: "Description of the activity...",
  image: "/images/activities/study-group.svg",
  category: "study-group",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

## Migration Process

### 1. Data Extraction

Data was extracted from the following legacy files:
- `data/aslab20.js` - 2020 team members
- `data/aslab21.js` - 2021 team members  
- `data/aslab22.js` - 2022 team members
- `data/aslab23.js` - 2023 team members
- `data/research.js` - Publications data
- `data/activities.js` - Activities data

### 2. Data Transformation

The `src/lib/data-transform.ts` file contains utilities for:
- Converting legacy formats to new TypeScript interfaces
- Generating missing data (IDs, bios, abstracts)
- Validating data integrity
- Transforming image paths
- Parsing author strings into arrays

### 3. Image Migration

Images were migrated from the legacy structure to a new organized structure:

```
Legacy: /assets/images/aslab20/member.jpg
New:    /images/team/2020/member.jpg

Legacy: /img/undraw_activity.svg  
New:    /images/activities/activity-name.svg
```

### 4. Data Validation

The migration includes comprehensive validation:
- Required field validation
- Data type checking
- Image path validation
- Social media link validation
- Publication category assignment

## File Structure

```
src/data/
├── index.ts          # Main data exports
├── team.ts           # Team member data by generation
├── publications.ts   # Research publications
├── activities.ts     # Laboratory activities
├── research.ts       # Research areas and focus
└── site.ts          # Site configuration and metadata

public/images/
├── team/
│   ├── 2020/        # 2020 generation photos
│   ├── 2021/        # 2021 generation photos
│   ├── 2022/        # 2022 generation photos
│   └── 2023/        # 2023 generation photos
├── activities/      # Activity illustrations
├── gallery/         # Laboratory gallery images
├── logos/          # Laboratory logos
└── placeholder.svg  # Fallback placeholder image
```

## Data Quality

### Team Members
- **Total**: 35 members across 4 generations (2020-2023)
- **Social Media Coverage**: 
  - LinkedIn: ~80%
  - GitHub: ~60%
  - Instagram: ~70%
  - Email: ~40%

### Publications
- **Total**: 20 publications (2018-2022)
- **Categories**: 
  - Conference: 12 papers
  - Journal: 3 papers
  - Thesis: 5 papers
- **Publishers**: IEEE, RESTI, Telkom University, ISRITI

### Activities
- **Total**: 3 main activity types
- **Categories**: Study Group, Focus Group, Training/Workshop
- **Features**: Each activity has 6 detailed features

### Research Areas
- **Total**: 5 research focus areas
- **Coverage**: Computer Vision, NLP, Machine Learning, Data Science, AI Applications
- **Technologies**: 40+ technologies and tools listed

## Usage

### Importing Data

```typescript
import { 
  allTeamMembers, 
  currentTeam, 
  publications, 
  activities, 
  researchAreas 
} from '@/data';
```

### Helper Functions

```typescript
import { 
  getTeamByGeneration,
  getCurrentCoordinator,
  searchPublications,
  getActivityByCategory 
} from '@/data';

// Get 2023 team
const team2023 = getTeamByGeneration(2023);

// Search publications
const aiPapers = searchPublications('artificial intelligence');

// Get specific activity
const studyGroup = getActivityByCategory('study-group');
```

### Data Validation

```typescript
import { validateTeamMember, validatePublication } from '@/lib/data-transform';

const isValid = validateTeamMember(teamMember);
```

## Migration Script

Run the migration validation script:

```bash
npx tsx src/scripts/migrate-data.ts
```

This will:
- Validate all data structures
- Generate statistics reports
- Check for missing images
- Provide data quality metrics

## Next Steps

1. **Image Optimization**: Optimize all images for web delivery
2. **Content Review**: Review generated abstracts and bios for accuracy
3. **Data Updates**: Add any missing recent publications or team changes
4. **Testing**: Test all data integration in the application
5. **Performance**: Monitor data loading performance and optimize if needed

## Maintenance

- **Team Updates**: Add new team members to the appropriate generation file
- **Publications**: Add new publications with proper categorization
- **Images**: Ensure all new images follow the naming convention
- **Validation**: Run the migration script after any data changes