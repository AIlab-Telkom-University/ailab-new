'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from './card'
import { Icon } from './icon'

interface TimelineItem {
  year: number
  title: string
  description: string
  iconType?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline line */}
      <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-8 md:space-y-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-8"
          >
            <div className="relative z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm md:col-start-2 md:justify-self-center">
              {item.iconType ? (
                <Icon type={item.iconType} size="sm" />
              ) : (
                <div className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
              )}
            </div>

            {/* Content */}
            <div
              className={cn(
                'col-start-2 row-start-1 md:row-start-1',
                index % 2 === 0
                  ? 'md:col-start-1 md:pr-4'
                  : 'md:col-start-3 md:pl-4'
              )}
            >
              <Card className="transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
