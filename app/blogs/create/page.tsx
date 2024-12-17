'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function CreateBlog() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const title = formData.get('title')
    const description = formData.get('description')
    const content = formData.get('content')
    const image = formData.get('image')

    // Here you would typically send this data to your backend
    // For demo purposes, we'll just log it
    console.log({ title, description, content, image })

    setIsSubmitting(false)
  }

  return (
    <div className="container max-w-2xl py-10">
      <Card>
        <CardHeader>
          <CardTitle>নতুন ব্লগ পোস্ট তৈরি করুন</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">শিরোনাম</Label>
              <Input id="title" name="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">সংক্ষিপ্ত বিবরণ</Label>
              <Textarea id="description" name="description" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">বিস্তারিত লেখা</Label>
              <Textarea id="content" name="content" required className="min-h-[200px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">ছবি URL</Label>
              <Input id="image" name="image" type="url" />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'প্রক্রিয়াধীন...' : 'প্রকাশ করুন'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

