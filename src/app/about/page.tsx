import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageGallery } from '@/components/ui/image-gallery'
import { Timeline } from '@/components/ui/timeline'
import { StatsCard } from '@/components/ui/stats-card'
import { LocationMap } from '@/components/ui/location-map'
import { Icon } from '@/components/ui/icon'
import { siteConfig, aboutData } from '@/data'

export const metadata: Metadata = {
  title: 'About AILab - Artificial Intelligence Laboratory',
  description: 'Learn about AILab Telkom University, our mission, vision, research focus areas, and the journey of advancing AI research and education since 2018.',
  keywords: [
    'about ailab',
    'artificial intelligence laboratory',
    'telkom university',
    'ai research',
    'mission vision',
    'laboratory history',
    'bandung indonesia'
  ],
  openGraph: {
    title: 'About AILab - Artificial Intelligence Laboratory',
    description: 'Learn about AILab Telkom University, our mission, vision, research focus areas, and the journey of advancing AI research and education since 2018.',
    type: 'website',
  },
}

export default function AboutPage() {
  const { laboratory, contact } = siteConfig
  const { galleryImages, timeline, values } = aboutData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-primary">AILab</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Established {laboratory.established}</span>
              <span>•</span>
              <span>{siteConfig.university}</span>
              <span>•</span>
              <span>Bandung, Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatsCard
              title="Years Active"
              value={laboratory.stats.yearsActive}
              description="Since 2018"
              icon={<Icon type="clock" size="lg" />}
              className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 border-yellow-200 dark:border-gray-600"
            />
            <StatsCard
              title="Publications"
              value={laboratory.stats.publications}
              description="Research papers"
              icon={<Icon type="book" size="lg" />}
              className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 border-amber-200 dark:border-gray-600"
            />
            <StatsCard
              title="Team Members"
              value={laboratory.stats.teamMembers}
              description="Active researchers"
              icon={<Icon type="users" size="lg" />}
              className="bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600"
            />
            <StatsCard
              title="Research Projects"
              value={laboratory.stats.researchProjects}
              description="Active projects"
              icon={<Icon type="chart" size="lg" />}
              className="bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-gray-800 dark:to-gray-700 border-yellow-300 dark:border-gray-600"
            />
            <StatsCard
              title="Collaborations"
              value={laboratory.stats.collaborations}
              description="Industry partners"
              icon={<Icon type="briefcase" size="lg" />}
              className="bg-gradient-to-br from-amber-100 to-orange-200 dark:from-gray-800 dark:to-gray-700 border-amber-300 dark:border-gray-600"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-full bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 border-yellow-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon type="lightning" className="text-yellow-600 dark:text-yellow-400" />
                  <span className="text-gray-900 dark:text-white">Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {laboratory.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="h-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 border-amber-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon type="eye" className="text-amber-600 dark:text-amber-400" />
                  <span className="text-gray-900 dark:text-white">Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {laboratory.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our research, education, and innovation efforts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const colors = [
                'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 border-yellow-200 dark:border-gray-600',
                'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 border-amber-200 dark:border-gray-600',
                'bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600',
                'bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-gray-800 dark:to-gray-700 border-yellow-300 dark:border-gray-600',
                'bg-gradient-to-br from-amber-100 to-orange-200 dark:from-gray-800 dark:to-gray-700 border-amber-300 dark:border-gray-600'
              ]
              const iconColors = [
                'text-yellow-600 dark:text-yellow-400',
                'text-amber-600 dark:text-amber-400',
                'text-orange-600 dark:text-orange-400',
                'text-yellow-700 dark:text-yellow-300',
                'text-amber-700 dark:text-amber-300'
              ]
              return (
                <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colors[index % colors.length]}`}>
                  <CardContent className="p-6">
                    <div className={`mb-4 flex justify-center ${iconColors[index % iconColors.length]}`}>
                      <Icon type={value.iconType} size="lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our key areas of expertise and research concentration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laboratory.focusAreas.map((area, index) => {
              const colors = [
                'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 border-yellow-200 dark:border-gray-600',
                'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 border-amber-200 dark:border-gray-600',
                'bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600',
                'bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-gray-800 dark:to-gray-700 border-yellow-300 dark:border-gray-600',
                'bg-gradient-to-br from-amber-100 to-orange-200 dark:from-gray-800 dark:to-gray-700 border-amber-300 dark:border-gray-600'
              ]
              const dotColors = [
                'bg-yellow-500',
                'bg-amber-500',
                'bg-orange-500',
                'bg-yellow-600',
                'bg-amber-600'
              ]
              return (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colors[index % colors.length]}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-2 h-2 ${dotColors[index % dotColors.length]} rounded-full`}></div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{area}</h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Advanced research and development in {area.toLowerCase()}, contributing to cutting-edge AI solutions.
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Major milestones and achievements in our laboratory&apos;s development
            </p>
          </div>
          
          <Timeline items={timeline} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Laboratory Life</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our daily activities, research work, and collaborative environment
            </p>
          </div>
          
          <ImageGallery 
            images={galleryImages} 
            columns={3}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find us at Telkom University Landmark Tower in the heart of Bandung
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <LocationMap 
              address={contact.address}
              fullAddress={contact.fullAddress}
            />
          </div>
        </div>
      </section>
    </div>
  )
}