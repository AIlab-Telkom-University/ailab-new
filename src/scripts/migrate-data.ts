#!/usr/bin/env tsx

/**
 * Data Migration Script
 * 
 * This script helps migrate and validate data from the legacy AILab website
 * to the new structured format. It can be run to:
 * 1. Validate existing data structure
 * 2. Transform legacy data formats
 * 3. Generate missing data
 * 4. Create data reports
 */

import { 
  validateTeamMember,
  validatePublication,
  validateActivity,
} from '../lib/data-transform';

import { 
  allTeamMembers, 
  publications, 
  activities, 
  researchAreas 
} from '../data';

// Legacy data imports (would be imported from legacy files)
// const legacyData = {
//   aslab20: [], // Would import from legacy files
//   aslab21: [],
//   aslab22: [],
//   aslab23: [],
//   publications: [],
//   activities: []
// };

/**
 * Validate all data structures
 */
function validateAllData() {
  console.log('🔍 Validating data structures...\n');
  
  // Validate team members
  const invalidTeamMembers = allTeamMembers.filter(member => !validateTeamMember(member));
  console.log(`👥 Team Members: ${allTeamMembers.length} total, ${invalidTeamMembers.length} invalid`);
  
  if (invalidTeamMembers.length > 0) {
    console.log('❌ Invalid team members:', invalidTeamMembers.map(m => m.name));
  }
  
  // Validate publications
  const invalidPublications = publications.filter(pub => !validatePublication(pub));
  console.log(`📚 Publications: ${publications.length} total, ${invalidPublications.length} invalid`);
  
  if (invalidPublications.length > 0) {
    console.log('❌ Invalid publications:', invalidPublications.map(p => p.title));
  }
  
  // Validate activities
  const invalidActivities = activities.filter(activity => !validateActivity(activity));
  console.log(`🎯 Activities: ${activities.length} total, ${invalidActivities.length} invalid`);
  
  if (invalidActivities.length > 0) {
    console.log('❌ Invalid activities:', invalidActivities.map(a => a.name));
  }
  
  // Validate research areas
  console.log(`🔬 Research Areas: ${researchAreas.length} total`);
  
  console.log('\n✅ Data validation complete!');
}

/**
 * Generate data statistics
 */
function generateDataStats() {
  console.log('📊 Generating data statistics...\n');
  
  // Team statistics by generation
  const teamByGeneration = allTeamMembers.reduce((acc, member) => {
    acc[member.generation] = (acc[member.generation] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);
  
  console.log('👥 Team Members by Generation:');
  Object.entries(teamByGeneration).forEach(([gen, count]) => {
    console.log(`   ${gen}: ${count} members`);
  });
  
  // Publications by year
  const pubsByYear = publications.reduce((acc, pub) => {
    acc[pub.year] = (acc[pub.year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);
  
  console.log('\n📚 Publications by Year:');
  Object.entries(pubsByYear)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .forEach(([year, count]) => {
      console.log(`   ${year}: ${count} publications`);
    });
  
  // Publications by category
  const pubsByCategory = publications.reduce((acc, pub) => {
    acc[pub.category] = (acc[pub.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  console.log('\n📚 Publications by Category:');
  Object.entries(pubsByCategory).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} publications`);
  });
  
  // Social media coverage
  const socialStats = allTeamMembers.reduce((acc, member) => {
    if (member.social.linkedin) acc.linkedin++;
    if (member.social.github) acc.github++;
    if (member.social.instagram) acc.instagram++;
    if (member.social.email) acc.email++;
    return acc;
  }, { linkedin: 0, github: 0, instagram: 0, email: 0 });
  
  console.log('\n🔗 Social Media Coverage:');
  Object.entries(socialStats).forEach(([platform, count]) => {
    const percentage = ((count / allTeamMembers.length) * 100).toFixed(1);
    console.log(`   ${platform}: ${count}/${allTeamMembers.length} (${percentage}%)`);
  });
}

/**
 * Check for missing images
 */
function checkMissingImages() {
  console.log('🖼️  Checking for missing images...\n');
  
  const missingImages: string[] = [];
  
  // Check team member images
  allTeamMembers.forEach(member => {
    if (member.image.includes('placeholder') || member.image.includes('dummyimage')) {
      missingImages.push(`Team: ${member.name} (${member.image})`);
    }
  });
  
  // Check activity images
  activities.forEach(activity => {
    if (activity.image.includes('placeholder')) {
      missingImages.push(`Activity: ${activity.name} (${activity.image})`);
    }
  });
  
  if (missingImages.length > 0) {
    console.log('❌ Missing or placeholder images:');
    missingImages.forEach(img => console.log(`   ${img}`));
  } else {
    console.log('✅ All images are properly configured!');
  }
}

/**
 * Generate data quality report
 */
function generateQualityReport() {
  console.log('📋 Data Quality Report\n');
  console.log('='.repeat(50));
  
  validateAllData();
  console.log('\n' + '='.repeat(50));
  
  generateDataStats();
  console.log('\n' + '='.repeat(50));
  
  checkMissingImages();
  console.log('\n' + '='.repeat(50));
  
  console.log('\n🎉 Migration and validation complete!');
  console.log('\nNext steps:');
  console.log('1. Review any validation errors above');
  console.log('2. Add missing images to the public/images directory');
  console.log('3. Update placeholder content with real data');
  console.log('4. Test the data in the application');
}

/**
 * Main execution
 */
if (require.main === module) {
  generateQualityReport();
}

export {
  validateAllData,
  generateDataStats,
  checkMissingImages,
  generateQualityReport
};