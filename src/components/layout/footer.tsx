import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Laboratory Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logos/logo-xs.png"
                alt="AILab Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold text-foreground">
                AILab Telkom University
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Artificial Intelligence Laboratory focused on advancing AI
              research and education at Telkom University, fostering innovation
              in machine learning, data science, and intelligent systems.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p>TULT 0607</p>
                  <p>Telkom University Landmark Tower</p>
                  <p>Bandung, West Java, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:ailab@telkomuniversity.ac.id"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  ailab@telkomuniversity.ac.id
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/research"
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Research Areas
              </Link>
              <Link
                href="/publications"
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Publications
              </Link>
              <Link
                href="/team"
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                href="/activities"
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Activities
              </Link>
              <a
                href="https://telkomuniversity.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span>Telkom University</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Artificial Intelligence Laboratory, Telkom
              University. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact Us
              </Link>
              <a
                href="https://maps.google.com/?q=TULT+0607+Telkom+University+Landmark+Tower"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span>Location</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
