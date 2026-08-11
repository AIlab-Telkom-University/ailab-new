'use client'

import { researchAreas } from '@/data/research'
import { ResearchCard } from '@/components/ui/research-card'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Research <span className="text-yellow-500">Areas</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Explore our cutting-edge research in artificial intelligence,
              machine learning, and data science. Our laboratory focuses on
              developing innovative solutions for real-world challenges through
              advanced AI technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <ResearchCard key={area.id} researchArea={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Interested in Collaborating?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            We welcome collaboration opportunities with researchers, industry
            partners, and students who share our passion for advancing AI
            technology.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
            >
              Contact Us
            </a>
            <a
              href="/publications"
              className="rounded-lg border border-yellow-500 px-8 py-3 font-semibold text-yellow-500 transition-colors duration-300 hover:bg-yellow-500 hover:text-black"
            >
              View Publications
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
