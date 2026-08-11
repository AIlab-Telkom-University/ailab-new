'use client'

import * as React from 'react'
import { activities } from '@/data/activities'
import { ActivityCard } from '@/components/ui/activity-card'
import { Sparkles, Users, BookOpen, Presentation } from 'lucide-react'

export default function ActivitiesPage() {
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(false)
  const headerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="relative container mx-auto px-4 py-20">
          <div
            ref={headerRef}
            className={`text-center transform transition-all duration-1000 ease-out ${
              isHeaderVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Laboratory Activities
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive programs designed to advance artificial intelligence research, 
              education, and community engagement through structured learning and collaborative innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:gap-12">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              delay={index * 200}
              className="max-w-4xl mx-auto"
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 rounded-2xl p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you&apos;re interested in learning AI fundamentals, conducting advanced research, 
              or sharing knowledge with the community, we have a program that fits your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:ailab@telkomuniversity.ac.id?subject=Interest in AILab Activities"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <Users className="w-4 h-4" />
                Contact Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-200/20">
            <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-600">Study Group</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Foundational AI learning and skill development
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-200/20">
            <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-600">Focus Group</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Advanced research in CV and NLP domains
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-200/20">
            <Presentation className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-600">Workshops</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Community outreach and knowledge sharing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}