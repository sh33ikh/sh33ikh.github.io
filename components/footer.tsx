import { Github, Linkedin, Send } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            <Link
              href="https://t.me/sh33ikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground"
            >
              <span className="sr-only">Telegram</span>
              <Send className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/likhonsheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/sh33ikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-center text-base text-foreground/60">
            &copy; {new Date().getFullYear()} লিখন শেখ। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  )
}

