'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from './card'

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  className?: string
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon, 
  className 
}: StatsCardProps) {
  return (
    <Card className={cn(
      'hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <p className="text-3xl font-bold text-primary mb-1">
              {value}
            </p>
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          {icon && (
            <div className="ml-4 text-primary opacity-80">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}