'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity } from '@/types'
import { cn, getAssetPath } from '@/lib/utils'
import { ChevronDown, ChevronUp, Users, BookOpen, Presentation } from 'lucide-react'

interface ActivityCardProps {
  activity: Activity
  className?: string
  delay?: number
}

const categoryIcons = {
  'study-group': BookOpen,
  'focus-group': Users,
  'workshop': Presentation
}

const categoryColors = {
  'study-group': 'from-blue-500/20 to-blue-600/20 border-blue-200',
  'focus-group': 'from-yellow-500/20 to-yellow-600/20 border-yellow-200',
  'workshop': 'from-green-500/20 to-green-600/20 border-green-200'
}

export function ActivityCard({ activity, className, delay = 0 }: ActivityCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)

  const IconComponent = categoryIcons[activity.category]
  const colorClass = categoryColors[activity.category]

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleJoinClick = () => {
    // This could be enhanced to open a modal or navigate to a contact form
    window.open('mailto:ailab@telkomuniversity.ac.id?subject=Interest in ' + activity.name, '_blank')
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        'transform transition-all duration-700 ease-out',
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0',
        className
      )}
    >
      <Card className={cn(
        'group hover:shadow-lg transition-all duration-300 bg-gradient-to-br',
        colorClass,
        'hover:scale-[1.02] hover:-translate-y-1'
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/50 flex items-center justify-center">
              <Image
                src={getAssetPath(activity.image)}
                alt={activity.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <IconComponent className="w-5 h-5" />
                {activity.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                {activity.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-foreground/80">
              {isExpanded ? activity.description : `${activity.description.slice(0, 150)}...`}
            </p>

            {activity.features && activity.features.length > 0 && (
              <div className={cn(
                'transition-all duration-300 overflow-hidden',
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}>
                <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                <ul className="space-y-1">
                  {activity.features.map((feature, index) => (
                    <li key={index} className="text-xs text-foreground/70 flex items-start gap-2">
                      <span className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleExpanded}
                className="text-xs hover:bg-white/20"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-3 h-3 mr-1" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3 mr-1" />
                    Read More
                  </>
                )}
              </Button>

              <Button
                size="sm"
                onClick={handleJoinClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-xs px-4"
              >
                Join Program
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}