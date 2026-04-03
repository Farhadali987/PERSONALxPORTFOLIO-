'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Download, ExternalLink, Search } from 'lucide-react'
import { useState } from 'react'

const certificates = [
  {
    id: 1,
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan - Coursera',
    date: '2024',
    credentialId: '2E083CE6082Q',
    icon: '🐍',
    color: 'from-blue-500 to-cyan-500',
    pdfPath: 'coursera-2E083CE6082Q.pdf',
  },
  {
    id: 2,
    title: 'Relational Database Course',
    issuer: 'Coursera',
    date: '2024',
    credentialId: '8AHX3ZWTCDJY',
    icon: '🗄️',
    color: 'from-blue-600 to-indigo-600',
    pdfPath: 'coursera-8AHX3ZWTCDJY.pdf',
  },
  {
    id: 3,
    title: 'Advanced Web Development',
    issuer: 'Coursera',
    date: '2024',
    credentialId: 'E652RXL4WCLY',
    icon: '🌐',
    color: 'from-teal-500 to-cyan-500',
    pdfPath: 'coursera-E652RXL4WCLY.pdf',
  },
  {
    id: 4,
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM - Coursera',
    date: '2024',
    credentialId: 'KF4JPMCCRXU9',
    icon: '📊',
    color: 'from-purple-500 to-pink-500',
    pdfPath: 'coursera-KF4JPMCCRXU9.pdf',
  },
  {
    id: 5,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google - Coursera',
    date: '2024',
    credentialId: 'U6YYEICMA2AA',
    icon: '📈',
    color: 'from-green-500 to-teal-500',
    pdfPath: 'coursera-U6YYEICMA2AA.pdf',
  },
  {
    id: 6,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University - Coursera',
    date: '2023',
    credentialId: 'W6SD3QR36TGB',
    icon: '🤖',
    color: 'from-orange-500 to-yellow-500',
    pdfPath: 'coursera-W6SD3QR36TGB.pdf',
  },
  {
    id: 7,
    title: 'OpenAI Agents SDK Assessment',
    issuer: 'OpenAI',
    date: '2025',
    credentialId: 'AGENTS-2025',
    icon: '🧠',
    color: 'from-emerald-500 to-green-500',
    pdfPath: 'openai-agents-sdk.pdf',
  },
  {
    id: 8,
    title: 'Basic Computer Certificate',
    issuer: 'Computer Education Institute',
    date: '2024',
    credentialId: 'BCC-2024',
    icon: '💻',
    color: 'from-gray-500 to-slate-500',
    pdfPath: 'basic-computer-certificate.pdf',
  },
]

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCertificates = certificates.filter(cert =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          Certificates
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
          Professional certifications and achievements demonstrating expertise in various technologies
        </p>
      </motion.section>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-md mx-auto"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCertificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl">{cert.icon}</div>

                <div>
                  <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline">{cert.date}</Badge>
                  <span className="text-xs text-secondary-500 dark:text-secondary-400 font-mono">
                    {cert.credentialId}
                  </span>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={`/certificates/${cert.pdfPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <FileText className="h-4 w-4" />
                      View PDF
                    </Button>
                  </a>
                  <a href={`/certificates/${cert.pdfPath}`} download>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredCertificates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FileText className="h-16 w-16 mx-auto text-secondary-400 mb-4" />
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
            No certificates found
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400">
            Try searching with different keywords
          </p>
        </motion.div>
      )}

      {/* Verification Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-secondary-50 dark:bg-secondary-900 p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
          Verify Certificates
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-6 max-w-2xl mx-auto">
          All certificates can be verified through the respective issuing platforms.
          Use the credential ID to verify authenticity on Coursera, IBM, or other platforms.
        </p>
        <a href="https://www.coursera.org/account/accomplishments" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Verify on Coursera
          </Button>
        </a>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Total Certificates', value: certificates.length.toString() },
          { label: 'Coursera', value: certificates.filter(c => c.issuer.includes('Coursera')).length.toString() },
          { label: '2024', value: certificates.filter(c => c.date === '2024').length.toString() },
          { label: '2025', value: certificates.filter(c => c.date === '2025').length.toString() },
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
