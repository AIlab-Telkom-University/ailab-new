'use client'

import * as React from 'react'
import Image from 'next/image'
import { TeamMember, SocialPlatform } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  ExternalLink 
} from 'lucide-react'

interface TeamMemberCardProps {
  member: TeamMember
  className?: string
  showBio?: boolean
}

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  email: Mail,
} as const

const getSocialUrl = (platform: SocialPlatform, value: string): string => {
  if (platform === 'email') {
    return `mailto:${value}`
  }
  return value
}

export function TeamMemberCard({ 
  member, 
  className, 
  showBio = true 
}: TeamMemberCardProps) {
  const [imageError, setImageError] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  const handleSocialClick = (platform: SocialPlatform, url: string) => {
    const finalUrl = getSocialUrl(platform, url)
    if (platform === 'email') {
      window.location.href = finalUrl
    } else {
      window.open(finalUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const socialLinks = Object.entries(member.social).filter(([, url]) => url)

  return (
    <Card 
      className={cn(
        'group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        {/* Profile Image */}
        <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 128px, 128px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-2xl font-bold text-primary">
              {member.fallback}
            </div>
          )}
          
          {/* Social Media Overlay */}
          {socialLinks.length > 0 && (
            <div 
              className={cn(
                'absolute inset-0 flex items-center justify-center bg-black/70 transition-opacity duration-300',
                isHovered ? 'opacity-100' : 'opacity-0'
              )}
            >
              <div className="flex gap-2">
                {socialLinks.slice(0, 3).map(([platform, url]) => {
                  const IconComponent = socialIcons[platform as SocialPlatform]
                  if (!IconComponent) return null
                  
                  return (
                    <Button
                      key={platform}
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-primary hover:text-black"
                      onClick={() => handleSocialClick(platform as SocialPlatform, url)}
                    >
                      <IconComponent className="h-4 w-4" />
                    </Button>
                  )
                })}
                {socialLinks.length > 3 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-primary hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Member Info */}
        <div className="text-center">
          <h3 className="mb-1 text-lg font-semibold text-foreground">
            {member.name}
          </h3>
          <p className="mb-2 text-sm font-medium text-primary">
            {member.position}
          </p>
          <p className="mb-3 text-xs text-muted-foreground">
            Generation {member.generation}
          </p>
          
          {showBio && member.bio && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {member.bio}
            </p>
          )}
        </div>

        {/* Social Links (Mobile/Always Visible) */}
        {socialLinks.length > 0 && (
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            {socialLinks.map(([platform, url]) => {
              const IconComponent = socialIcons[platform as SocialPlatform]
              if (!IconComponent) return null
              
              return (
                <Button
                  key={platform}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 hover:bg-primary hover:text-black hover:border-primary"
                  onClick={() => handleSocialClick(platform as SocialPlatform, url)}
                >
                  <IconComponent className="h-4 w-4" />
                </Button>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}