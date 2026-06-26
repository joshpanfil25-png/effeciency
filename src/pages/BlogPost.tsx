import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ArrowLeft } from 'lucide-react'

import PostCard from '@/components/blog/PostCard'
import PortableBody from '@/components/blog/PortableBody'
import { getPost, getMorePosts } from '@/lib/queries'
import { urlForImage } from '@/lib/sanityImage'
import { site } from '@/data/site'

export default function BlogPost() {
  const { slug = '' } = useParams()

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPost(slug),
    enabled: Boolean(slug),
  })

  const { data: morePosts = [] } = useQuery({
    queryKey: ['more-posts', slug],
    queryFn: () => getMorePosts(slug),
    enabled: Boolean(slug),
  })

  if (isLoading) {
    return (
      <div className="container max-w-3xl py-32">
        <div className="h-10 w-2/3 animate-pulse rounded bg-warm" />
        <div className="mt-6 h-64 animate-pulse rounded-lg bg-warm" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container max-w-3xl py-32 text-center">
        <h1 className="font-serif text-4xl text-navy">Post not found</h1>
        <p className="mt-4 text-navy/65">
          This article may have moved or been unpublished.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </div>
    )
  }

  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(1600).height(900).fit('crop').url()
    : null
  const ogImage = post.coverImage
    ? urlForImage(post.coverImage)?.width(1200).height(630).fit('crop').url()
    : null
  const coverAlt = post.coverImage?.alt || post.title

  return (
    <>
      <Helmet>
        <title>
          {post.title} — {site.name}
        </title>
        {post.excerpt && <meta name="description" content={post.excerpt} />}
        <meta property="og:title" content={post.title} />
        {post.excerpt && (
          <meta property="og:description" content={post.excerpt} />
        )}
        <meta property="og:type" content="article" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <article className="py-16 sm:py-20">
        {/* Header */}
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/55 transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy/60">
            {post.author && (
              <span className="font-medium text-navy/80">{post.author}</span>
            )}
            {post.author && <span className="text-navy/30">·</span>}
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          </div>

          {post.excerpt && (
            <p className="mt-6 text-xl leading-relaxed text-navy/70">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Cover */}
        {coverUrl && (
          <div className="container mt-10 max-w-5xl">
            <img
              src={coverUrl}
              alt={coverAlt}
              className="aspect-[16/9] w-full rounded-lg object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div className="container mt-12 max-w-3xl">
          {post.body && post.body.length > 0 ? (
            <PortableBody value={post.body} />
          ) : (
            <p className="italic text-navy/50">This post has no content yet.</p>
          )}

          <div className="mt-14 border-t border-border pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              <ArrowLeft size={16} /> Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* More posts */}
      {morePosts.length > 0 && (
        <section className="bg-warm py-20">
          <div className="container">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              More posts
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {morePosts.map((p) => (
                <PostCard key={p._id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
