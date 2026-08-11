'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card'
import { Icon } from './icon'
import { Publication } from '@/types'
import { cn } from '@/lib/utils'

interface PublicationCardProps {
  publication: Publication
  className?: string
}

export function PublicationCard({
  publication,
  className,
}: PublicationCardProps) {
  const getCategoryIcon = (category: Publication['category']) => {
    switch (category) {
      case 'journal':
        return 'book'
      case 'conference':
        return 'users'
      case 'thesis':
        return 'briefcase'
      default:
        return 'book'
    }
  }

  const getCategoryColor = (category: Publication['category']) => {
    switch (category) {
      case 'journal':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'conference':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'thesis':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const formatAuthors = (authors: string[]) => {
    if (authors.length <= 3) {
      return authors.join(', ')
    }
    return `${authors.slice(0, 3).join(', ')} et al.`
  }

  return (
    <Card
      className={cn(
        'group flex h-full flex-col border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-500/10',
        className
      )}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium',
                  getCategoryColor(publication.category)
                )}
              >
                <Icon type={getCategoryIcon(publication.category)} size="sm" />
                {publication.category.charAt(0).toUpperCase() +
                  publication.category.slice(1)}
              </span>
              <span className="rounded-full bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-600">
                {publication.year}
              </span>
            </div>
            <CardTitle className="text-lg font-semibold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-yellow-600">
              {publication.title}
            </CardTitle>
          </div>
          {publication.url && (
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 text-gray-400 transition-colors duration-300 hover:text-yellow-600"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon type="external" size="sm" />
            </a>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Authors:</p>
          <p className="text-sm text-gray-600">
            {formatAuthors(publication.authors)}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Publisher:</p>
          <p className="text-sm text-gray-600">{publication.publisher}</p>
        </div>

        {publication.abstract && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Abstract:</p>
            <CardDescription className="line-clamp-3 text-sm leading-relaxed text-gray-600">
              {publication.abstract}
            </CardDescription>
          </div>
        )}

        {publication.url && (
          <div className="mt-auto border-t border-gray-100 pt-2">
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-yellow-600 transition-colors duration-300 hover:text-yellow-700"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Publication</span>
              <Icon type="external" size="sm" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
