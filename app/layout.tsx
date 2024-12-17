import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'bengali'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sh33ikh.github.io'),
  title: {
    default: 'লিখন শেখ | প্রফেশনাল ওয়েব ডেভেলপার',
    template: '%s | লিখন শেখ'
  },
  description: 'ডিজিটাল ট্রান্সফর্মেশন এবং ইনোভেটিভ ওয়েব সমাধানে বিশেষজ্ঞ। UI/UX ডিজাইন, ফ্রন্টেন্ড ডেভেলপমেন্ট, এবং ডিজিটাল স্ট্রাটেজি।',
  openGraph: {
    title: 'লিখন শেখ - ডিজিটাল ইনোভেশন',
    description: 'ডিজিটাল সমাধানের অগ্রণী বিশেষজ্ঞ। ইনোভেটিভ ওয়েব টেকনোলোজি এবং ব্যবহারিক ডিজাইনে দক্ষ।',
    url: 'https://www.sh33ikh.github.io',
    siteName: 'লিখন শেখ',
    locale: 'bn_BD',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

