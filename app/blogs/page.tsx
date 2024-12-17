import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
  // In a real app, fetch blog posts from your backend
  const blogs = [
    {
      slug: 'web-development-2024',
      title: 'ওয়েব ডেভেলপমেন্টে নতুন প্রযুক্তি',
      description: 'আধুনিক ওয়েব ডেভেলপমেন্টে ব্যবহৃত নতুন প্রযুক্তি সম্পর্কে বিস্তারিত আলোচনা।',
      date: '১ জানুয়ারি, ২০২৪',
      author: 'লিখন শেখ',
    },
    // Add more blog posts
  ]

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ব্লগ পোস্টসমূহ</h1>
        <Button asChild>
          <Link href="/blogs/create">
            <Plus className="w-4 h-4 mr-2" />
            নতুন পোস্ট
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.slug} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg"
                  alt={blog.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blogs/${blog.slug}`} className="hover:underline">
                  {blog.title}
                </Link>
              </h2>
              <p className="text-foreground/60 text-sm mb-4">{blog.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 text-sm text-foreground/60">
              <div className="flex items-center gap-4">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

