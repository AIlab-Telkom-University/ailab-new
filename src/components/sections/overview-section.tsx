'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Users, BookOpen, Activity, Target, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/data/site'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function OverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const navigationCards = [
    {
      title: "Research Areas",
      description: "Explore our cutting-edge research in AI, ML, and data science",
      icon: Target,
      href: "/research",
      color: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-yellow-200 dark:border-gray-600"
    },
    {
      title: "Our Team",
      description: "Meet the brilliant minds driving AI innovation forward",
      icon: Users,
      href: "/team",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-amber-200 dark:border-gray-600"
    },
    {
      title: "Activities",
      description: "Join our study groups, workshops, and collaborative programs",
      icon: Activity,
      href: "/activities",
      color: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-orange-200 dark:border-gray-600"
    }
  ]

  const achievementStats = [
    {
      icon: BookOpen,
      value: siteConfig.laboratory.stats.publications,
      label: "Research Publications",
      description: "Peer-reviewed papers and conference proceedings",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-yellow-200 dark:border-gray-600",
      iconColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: Users,
      value: siteConfig.laboratory.stats.teamMembers,
      label: "Team Members",
      description: "Researchers, students, and collaborators",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-amber-200 dark:border-gray-600",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Target,
      value: siteConfig.laboratory.stats.researchProjects,
      label: "Active Projects",
      description: "Ongoing research and development initiatives",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-orange-200 dark:border-gray-600",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: Globe,
      value: siteConfig.laboratory.stats.collaborations,
      label: "Collaborations",
      description: "Industry and academic partnerships",
      bgColor: "bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-yellow-300 dark:border-gray-600",
      iconColor: "text-yellow-700 dark:text-yellow-300"
    },
    {
      icon: Award,
      value: siteConfig.laboratory.stats.yearsActive,
      label: "Years of Excellence",
      description: "Advancing AI research and education",
      bgColor: "bg-gradient-to-br from-amber-100 to-orange-200 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-amber-300 dark:border-gray-600",
      iconColor: "text-amber-700 dark:text-amber-300"
    }
  ]

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-amber-50/30 via-yellow-50/50 to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Leading AI Research & Innovation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AILab Telkom University, we&apos;re pushing the boundaries of artificial intelligence 
              through groundbreaking research, innovative education, and meaningful industry collaboration.
            </p>
          </motion.div>

          {/* Achievement Statistics */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {achievementStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className={`h-full border-2 ${stat.borderColor} hover:border-primary/20 transition-all duration-300 ${stat.bgColor} backdrop-blur-sm`}>
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 rounded-full bg-white/50 dark:bg-black/20 group-hover:bg-primary/20 transition-colors">
                          <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}+
                      </div>
                      <div className="font-semibold text-foreground mb-2">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation Cards */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Explore Our Work
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our research areas, meet our talented team, and learn about our engaging activities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {navigationCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className={`h-full border-2 ${card.borderColor} hover:border-primary/30 transition-all duration-300 ${card.bgColor} backdrop-blur-sm overflow-hidden relative`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <card.icon className={`w-8 h-8 ${card.iconColor} group-hover:text-primary transition-colors`} />
                        </div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {card.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all"
                        onClick={() => window.location.href = card.href}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 border-yellow-200 dark:border-gray-600">
              <CardContent className="p-8 sm:p-12 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                  {siteConfig.laboratory.vision}
                </p>
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-semibold"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}