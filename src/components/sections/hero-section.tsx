'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site'
import { getAssetPath } from '@/lib/utils'

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('overview')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute left-10 top-20 h-20 w-20 rotate-45 border-2 border-primary/30"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-20 top-40 h-16 w-16 rounded-full bg-primary/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 h-12 w-12 border border-primary/40"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-24 w-24 rounded-full border-2 border-primary/20"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-primary/5 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="relative mx-auto mb-6 h-32 w-32">
              <div className="absolute inset-0 animate-glow rounded-full bg-primary/20 blur-xl" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">
                <Image
                  src={getAssetPath('/images/logos/logo-lg.png')}
                  alt="AILab Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Typography Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Main Title */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            <span className="block">Artificial Intelligence</span>
            <span className="block text-primary">Laboratory</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-3xl text-xl font-light text-gray-300 sm:text-2xl lg:text-3xl">
            {siteConfig.university}
          </p>

          {/* Mission Statement */}
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            {siteConfig.laboratory.mission}
          </p>
        </motion.div>

        {/* Call-to-Action Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-primary px-8 py-3 text-lg font-semibold text-black hover:bg-primary/90"
            onClick={() =>
              document
                .getElementById('overview')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explore Our Research
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary px-8 py-3 text-lg font-semibold text-primary hover:bg-primary hover:text-black"
            onClick={() => (window.location.href = '/team')}
          >
            <Zap className="mr-2 h-5 w-5" />
            Meet Our Team
          </Button>
        </motion.div>

        {/* Key Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary sm:text-3xl">
              {siteConfig.laboratory.stats.yearsActive}+
            </div>
            <div className="mt-1 text-sm text-gray-400">Years Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary sm:text-3xl">
              {siteConfig.laboratory.stats.publications}+
            </div>
            <div className="mt-1 text-sm text-gray-400">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary sm:text-3xl">
              {siteConfig.laboratory.stats.teamMembers}+
            </div>
            <div className="mt-1 text-sm text-gray-400">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary sm:text-3xl">
              {siteConfig.laboratory.stats.researchProjects}+
            </div>
            <div className="mt-1 text-sm text-gray-400">Projects</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center text-primary transition-colors hover:text-primary/80"
          aria-label="Scroll to next section"
        >
          <span className="mb-2 text-sm opacity-80">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-6 w-6 transition-transform group-hover:scale-110" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
