import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/Farhadali987', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/farhad-gul-a12352300/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/farhad_ali', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:contact@farhad.dev', icon: Mail, label: 'Email' },
]

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/skills', label: 'Skills' },
      { href: '/projects', label: 'Projects' },
    ],
  },
  {
    title: 'Learning',
    links: [
      { href: '/courses', label: 'All Courses' },
      { href: '/courses/python-basics', label: 'Python' },
      { href: '/courses/relational-databases', label: 'SQL' },
      { href: '/courses/agentic-ai', label: 'Agentic AI' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/experience', label: 'Experience' },
      { href: '/certificates', label: 'Certificates' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">
              Farhad Gul
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 max-w-sm">
              Full-stack developer, AI enthusiast, and educator. Building the future with code and sharing knowledge along the way.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-secondary-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            © {currentYear} Farhad Gul. All rights reserved.
          </p>
          <p className="text-secondary-600 dark:text-secondary-400 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
