'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'
import { Icon } from './icon'
import { ResearchArea } from '@/types'
import { cn } from '@/lib/utils'

interface ResearchCardProps {
  researchArea: ResearchArea
  className?: string
}

export function ResearchCard({ researchArea, className }: ResearchCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const iconMap: Record<string, string> = {
    Eye: 'eye',
    MessageSquare: 'lightbulb',
    Brain: 'star',
    BarChart3: 'chart',
    Cpu: 'lightning',
  }

  return (
    <Card
      className={cn(
        'group flex cursor-pointer flex-col border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20',
        isExpanded ? 'h-auto' : 'h-[420px]',
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-yellow-100 p-3 transition-colors duration-300 group-hover:bg-yellow-200">
            <Icon
              type={iconMap[researchArea.icon] || 'lightbulb'}
              className="text-yellow-600 group-hover:text-yellow-700"
              size="lg"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-yellow-600">
              {researchArea.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent
        className={cn(
          'flex flex-1 flex-col space-y-4',
          !isExpanded && 'overflow-hidden'
        )}
      >
        <CardDescription
          className={cn(
            'leading-relaxed text-gray-600',
            !isExpanded && 'line-clamp-3'
          )}
        >
          {researchArea.description}
        </CardDescription>

        {/* Technology Tags */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">
            Key Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {researchArea.technologies
              .slice(0, isExpanded ? undefined : 4)
              .map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-yellow-100 hover:text-yellow-700"
                >
                  {tech}
                </span>
              ))}
            {!isExpanded && researchArea.technologies.length > 4 && (
              <span className="rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-600">
                +{researchArea.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Projects - Show when expanded */}
        {isExpanded &&
          researchArea.projects &&
          researchArea.projects.length > 0 && (
            <div className="space-y-2 border-t border-gray-100 pt-2">
              <h4 className="text-sm font-medium text-gray-900">
                Recent Projects:
              </h4>
              <ul className="space-y-1">
                {researchArea.projects.map((project, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400"></span>
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </CardContent>

      <CardFooter className="justify-center border-t border-gray-100 pt-4">
        <div className="flex items-center gap-1 text-xs text-gray-500 transition-colors duration-300 group-hover:text-yellow-600">
          <span>{isExpanded ? 'Click to collapse' : 'Click to expand'}</span>
          <svg
            className={cn(
              'h-3 w-3 transition-transform duration-300',
              isExpanded ? 'rotate-180' : ''
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </CardFooter>
    </Card>
  )
}
