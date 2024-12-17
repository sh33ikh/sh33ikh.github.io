import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Metadata } from 'next'
import Image from 'next/image'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  // In a real app, fetch blog data here
  return {
    title: 'ওয়েব ডেভেলপমেন্টে নতুন প্রযুক্তি',
    description: 'আধুনিক ওয়েব ডেভেলপমেন্টে ব্যবহৃত নতুন প্রযুক্তি সম্পর্কে বিস্তারিত আলোচনা।',
    openGraph: {
      title: 'ওয়েব ডেভেলপমেন্টে নতুন প্রযুক্তি',
      description: 'আধুনিক ওয়েব ডেভেলপমেন্টে ব্যবহৃত নতুন প্রযুক্তি সম্পর্কে বিস্তারিত আলোচনা।',
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['লিখন শেখ'],
    },
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <div className="container max-w-4xl py-10">
      <Card>
        <CardHeader>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg"
              alt="Blog post cover"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">ওয়েব ডেভেলপমেন্টে নতুন প্রযুক্তি</h1>
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <span>লিখন শেখ</span>
            <span>১ জানুয়ারি, ২০২৪</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none">
            <p>
              আধুনিক ওয়েব ডেভেলপমেন্টে প্রতিনিয়ত নতুন নতুন প্রযুক্তি যোগ হচ্ছে। এই ব্লগে আমরা
              জানব সর্বশেষ প্রযুক্তিগুলো সম্পর্কে।
            </p>
            {/* Add more content here */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

