'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn, getAssetPath } from '@/lib/utils'
import { Card } from './card'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
  columns?: 2 | 3 | 4
}

export function ImageGallery({ 
  images, 
  className, 
  columns = 3 
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <>
      <div className={cn(
        'grid gap-4',
        gridCols[columns],
        className
      )}>
        {images.map((image, index) => (
          <Card 
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-video">
              <Image
                src={getAssetPath(image.src)}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {image.caption && (
              <div className="p-3">
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={getAssetPath(images[selectedImage].src)}
              alt={images[selectedImage].alt}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {images[selectedImage].caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded">
                <p className="text-sm">{images[selectedImage].caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}