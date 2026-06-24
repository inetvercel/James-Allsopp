"use client"

import { motion } from "framer-motion"
import { client } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { Navigation } from "@/components/Navigation"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 my-12 rounded-2xl overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || "Blog post image"}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 gradient-text">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-bold mb-3 mt-8">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-slate-300 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-cyan-400 pl-6 py-4 my-8 bg-cyan-500/5 rounded-r-xl italic text-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-300">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-cyan-400">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-200">{children}</em>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
      >
        {children}
      </a>
    ),
  },
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    author->{
      name,
      image
    },
    categories[]->{
      title,
      color
    },
    tags
  }`
  
  return await client.fetch(query, { slug })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black relative">
      {/* Scan lines overlay */}
      <div className="fixed inset-0 scan-lines pointer-events-none z-50 opacity-30" />
      
      {/* Holographic gradient overlay */}
      <div className="fixed inset-0 holographic pointer-events-none z-40 opacity-50" />
      
      <Navigation />

      {/* Hero Section */}
      <article className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                href="/writing"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-sm">Back to Writing</span>
              </Link>
            </motion.div>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {post.categories.map((category: any) => (
                  <span
                    key={category.title}
                    className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} bg-opacity-10 border border-cyan-400/30`}
                  >
                    {category.title}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight gradient-text neon-glow"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            {post.excerpt && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed"
              >
                {post.excerpt}
              </motion.p>
            )}

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10"
            >
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/30">
                      <Image
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <User className="w-4 h-4" />
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>{publishedDate}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>

              <div className="ml-auto flex items-center gap-4">
                <button className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors group">
                  <Share2 className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </button>
                <button className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors group">
                  <Bookmark className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="container mx-auto px-4 mb-16"
          >
            <div className="max-w-5xl mx-auto relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="text-sm font-mono text-slate-400 mb-4 uppercase tracking-wider">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-4">Enjoyed this post?</h3>
              <p className="text-slate-400 mb-6">
                Share it with others who might find it useful.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors">
                  Share on Twitter
                </button>
                <button className="px-6 py-3 rounded-xl border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 James Allsopp. Built with Next.js, Sanity, and a lot of curiosity.</p>
        </div>
      </footer>
    </main>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | James Allsopp`,
    description: post.excerpt || `Read ${post.title} by James Allsopp`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'James Allsopp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  }
}
