'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ImageIcon, Calendar, Download, ZoomIn, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'CryptoFleet Trading Platform - Dashboard',
    category: 'Projects',
    date: 'July 2025',
    description: 'Main dashboard interface of the CryptoFleet crypto trading platform',
    image: '/gallery/cryptofleet-dashboard.png',
  },
  {
    id: 2,
    title: 'CryptoFleet Trading Platform - Features',
    category: 'Projects',
    date: 'July 2025',
    description: 'Feature overview page showcasing trading capabilities',
    image: '/gallery/cryptofleet-features.png',
  },
  {
    id: 3,
    title: 'CryptoFleet Trading Platform - Security',
    category: 'Projects',
    date: 'July 2025',
    description: 'Security features and encryption showcase',
    image: '/gallery/cryptofleet-security.png',
  },
  {
    id: 4,
    title: 'AI Generated Art - Abstract Design',
    category: 'AI Art',
    date: 'September 2025',
    description: 'AI-generated artistic creation using Gemini',
    image: '/gallery/ai-art-1.png',
  },
  {
    id: 5,
    title: 'AI Generated Art - Creative Vision',
    category: 'AI Art',
    date: 'September 2025',
    description: 'AI-generated creative artwork',
    image: '/gallery/ai-art-2.png',
  },
  {
    id: 6,
    title: 'Portfolio Project Design',
    category: 'Designs',
    date: 'May 2025',
    description: 'Portfolio website mockup and design concept',
    image: '/gallery/portfolio-design.png',
  },
  {
    id: 7,
    title: 'System Architecture Design',
    category: 'Designs',
    date: 'July 2025',
    description: 'Technical architecture diagram for a full-stack project',
    image: '/gallery/architecture-design.png',
  },
  {
    id: 8,
    title: 'Personal Photo',
    category: 'Personal',
    date: 'November 2022',
    description: 'Professional profile photo',
    image: '/gallery/personal-1.jpg',
  },
  {
    id: 9,
    title: 'Achievement Photo',
    category: 'Personal',
    date: 'November 2022',
    description: 'Achievement and milestone photo',
    image: '/gallery/personal-2.jpg',
  },
]

const categories = ['All', 'Projects', 'AI Art', 'Designs', 'Personal']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const selectedItem = galleryItems.find(i => i.id === selectedImage)

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          Gallery
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
          Projects, designs, AI art, and visual showcases of my work
        </p>
      </motion.section>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-1 text-xs"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <ZoomIn className="h-3 w-3" />
                    View
                  </Button>
                  <a href={item.image} download className="inline-flex">
                    <Button size="sm" variant="secondary" className="gap-1 text-xs">
                      <Download className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-secondary-900 dark:text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-secondary-600 dark:text-secondary-400">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <ImageIcon className="h-16 w-16 mx-auto text-secondary-400 mb-4" />
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
            No images found
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400">
            Try selecting a different category
          </p>
        </motion.div>
      )}

      {/* Image Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
              <p className="text-secondary-400 mt-1">{selectedItem.description}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Total Items', value: galleryItems.length.toString() },
          { label: 'Projects', value: galleryItems.filter(i => i.category === 'Projects').length.toString() },
          { label: 'AI Art', value: galleryItems.filter(i => i.category === 'AI Art').length.toString() },
          { label: 'Designs', value: galleryItems.filter(i => i.category === 'Designs').length.toString() },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-center text-white"
          >
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}
