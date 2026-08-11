'use client'

import * as React from 'react'
import { publications, getPublicationYears } from '@/data/publications'
import { PublicationCard } from '@/components/ui/publication-card'
import { SearchInput } from '@/components/ui/search-input'
import { FilterDropdown } from '@/components/ui/filter-dropdown'
import { Pagination } from '@/components/ui/pagination'

const ITEMS_PER_PAGE = 6

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedYear, setSelectedYear] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [sortBy, setSortBy] = React.useState('year-desc')
  const [currentPage, setCurrentPage] = React.useState(1)

  // Filter and search publications
  const filteredPublications = React.useMemo(() => {
    let filtered = publications

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.authors.some((author) => author.toLowerCase().includes(query)) ||
          pub.publisher.toLowerCase().includes(query)
      )
    }

    // Year filter
    if (selectedYear) {
      filtered = filtered.filter((pub) => pub.year.toString() === selectedYear)
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((pub) => pub.category === selectedCategory)
    }

    // Sort publications
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year-desc':
          return b.year - a.year
        case 'year-asc':
          return a.year - b.year
        case 'title-asc':
          return a.title.localeCompare(b.title)
        case 'title-desc':
          return b.title.localeCompare(a.title)
        default:
          return b.year - a.year
      }
    })

    return filtered
  }, [searchQuery, selectedYear, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE)
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedYear, selectedCategory, sortBy])

  // Filter options
  const yearOptions = getPublicationYears().map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }))

  const categoryOptions = [
    { value: 'journal', label: 'Journal' },
    { value: 'conference', label: 'Conference' },
    { value: 'thesis', label: 'Thesis' },
  ]

  const sortOptions = [
    { value: 'year-desc', label: 'Year (Newest)' },
    { value: 'year-asc', label: 'Year (Oldest)' },
    { value: 'title-asc', label: 'Title (A-Z)' },
    { value: 'title-desc', label: 'Title (Z-A)' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Our <span className="text-yellow-500">Publications</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Discover our research contributions in artificial intelligence,
              machine learning, and data science. Our publications showcase
              innovative solutions and cutting-edge research findings.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                Journal Articles
              </span>
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                Conference Papers
              </span>
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                Thesis Works
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-gray-200 bg-white px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Search
              </label>
              <SearchInput
                placeholder="Search publications, authors, or publishers..."
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            <FilterDropdown
              label="Year"
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
            />
            <FilterDropdown
              label="Category"
              options={categoryOptions}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
            <FilterDropdown
              label="Sort by"
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
            />
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {paginatedPublications.length} of{' '}
            {filteredPublications.length} publications
            {searchQuery && <span> for &quot;{searchQuery}&quot;</span>}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {filteredPublications.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mb-4 text-gray-400">
                <svg
                  className="mx-auto h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                No publications found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPublications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    publication={publication}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-900 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-yellow-500">
                {publications.length}
              </div>
              <div className="text-gray-300">Total Publications</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-yellow-500">
                {getPublicationYears().length}
              </div>
              <div className="text-gray-300">Years of Research</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-yellow-500">
                {[...new Set(publications.flatMap((p) => p.authors))].length}
              </div>
              <div className="text-gray-300">Contributing Authors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
