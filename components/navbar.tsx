'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">লিখন শেখ</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              হোম
            </Link>
            <Link href="/blogs" className="text-foreground/80 hover:text-foreground">
              ব্লগ
            </Link>
            <Link href="/services" className="text-foreground/80 hover:text-foreground">
              সেবাসমূহ
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground">
              যোগাযোগ
            </Link>
          </div>
          <div className="flex sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
            >
              হোম
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
            >
              ব্লগ
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
            >
              সেবাসমূহ
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
            >
              যোগাযোগ
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

