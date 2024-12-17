import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Layout, LineChart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              লিখন শেখ
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
              আমি একজন প্রফেশনাল ওয়েব ডেভেলপার এবং ডিজিটাল সমাধান বিশেষজ্ঞ। আমার লক্ষ্য হল ব্যবহারকারীদের জন্য অভিনব ডিজিটাল অভিজ্ঞতা তৈরি করা।
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/services">আমার সেবাসমূহ</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">যোগাযোগ করুন</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">আমার পেশাদার সেবাসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Code2 className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">ওয়েব ডেভেলপমেন্ট</h3>
                  <p className="text-foreground/80">
                    আধুনিক, রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন তৈরি করি React এবং Next.js ব্যবহার করে।
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Layout className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">UI/UX ডিজাইন</h3>
                  <p className="text-foreground/80">
                    ব্যবহারকারী-কেন্দ্রিক ডিজাইন সমাধান যা ব্যবসায়িক প্রয়োজনীয়তা পূরণ করে।
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <LineChart className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">ডিজিটাল স্ট্রাটেজি</h3>
                  <p className="text-foreground/80">
                    ব্যবসায়িক জন্য ডিজিটাল রূপান্তর এবং নবাচার কৌশল প্রদান।
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

