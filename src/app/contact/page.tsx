'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { siteConfig } from '@/data/site'

export default function ContactPage() {
  const { contact, social } = siteConfig

  const contactItems = [
    {
      icon: 'mapPin',
      title: 'Address',
      content: contact.address,
      subtitle: contact.fullAddress,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(contact.fullAddress)}`, '_blank')
    },
    {
      icon: 'mail',
      title: 'Email',
      content: contact.email,
      subtitle: 'Send us an email',
      action: () => window.open(`mailto:${contact.email}`, '_self')
    },
    {
      icon: 'phone',
      title: 'Phone',
      content: contact.phone,
      subtitle: 'Call us during office hours',
      action: () => window.open(`tel:${contact.phone}`, '_self')
    },
    {
      icon: 'web',
      title: 'Website',
      content: contact.website,
      subtitle: 'Visit our official website',
      action: () => window.open(contact.website, '_blank')
    }
  ]

  const socialLinks = [
    { name: 'Instagram', url: social.instagram, icon: '📷' },
    { name: 'LinkedIn', url: social.linkedin, icon: '💼' },
    { name: 'GitHub', url: social.github, icon: '🐙' },
    { name: 'YouTube', url: social.youtube, icon: '📺' },
    { name: 'Twitter', url: social.twitter, icon: '🐦' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with the Artificial Intelligence Laboratory at Telkom University. 
            We&apos;re here to collaborate, answer questions, and explore opportunities together.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-yellow-400"
              onClick={item.action}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full group-hover:bg-yellow-200 transition-colors">
                  <Icon type={item.icon} className="text-yellow-600" size="lg" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="font-medium text-gray-800 mb-2">
                  {item.content}
                </p>
                <CardDescription className="text-sm">
                  {item.subtitle}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Laboratory Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Our Location */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon type="building" className="text-yellow-600" size="lg" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Laboratory Address</h4>
                <p className="text-gray-700">{contact.address}</p>
                <p className="text-gray-600 text-sm mt-1">{contact.fullAddress}</p>
              </div>
              
              <div className="pt-4 border-t">
                <button
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(contact.fullAddress)}`, '_blank')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  <Icon type="mapPin" size="sm" />
                  View on Google Maps
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours & Additional Info */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon type="clock" className="text-yellow-600" size="lg" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                <div className="space-y-1 text-gray-700">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
                <p className="text-gray-600 text-sm">
                  Located in the Telkom University Landmark Tower (TULT), 
                  our laboratory is easily accessible by public transportation 
                  and private vehicle. Parking is available on campus.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Section */}
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Follow Us</CardTitle>
            <CardDescription>
              Stay connected with our latest research, activities, and announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-yellow-100 rounded-lg transition-all duration-300 hover:scale-105 border hover:border-yellow-400"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="font-medium text-gray-800">{social.name}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Section (Optional Enhancement) */}
        <div className="mt-16">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Send us a Message</CardTitle>
              <CardDescription>
                Have a question or want to collaborate? We&apos;d love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="What is this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    onClick={(e) => {
                      e.preventDefault()
                      const form = e.currentTarget.closest('form') as HTMLFormElement
                      const formData = new FormData(form)
                      const subject = formData.get('subject')
                      const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`
                      window.open(`mailto:${contact.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`, '_self')
                    }}
                  >
                    <Icon type="mail" size="sm" />
                    Send Message
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}