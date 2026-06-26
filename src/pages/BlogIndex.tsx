import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'

import PostCard from '@/components/blog/PostCard'
import { getPosts } from '@/lib/queries'
import { site } from '@/data/site'

export default function BlogIndex() {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    <>
      <Helmet>
        <title>Blog — {site.name}</title>
        <meta
          name="description"
          content="Perspectives on media planning, buying, and measurement from the Efficiency Media team."
        />
        <meta property="og:title" content={`Blog — ${site.name}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="container max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Field Notes
          </span>
          <h1 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
            The <span className="text-gradient">Blog</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Perspectives on media planning, buying, and measurement — written by
            the practitioners doing the work.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20">
        <div className="container">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-80 animate-pulse rounded-lg border border-border bg-warm"
                />
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-lg border border-border bg-warm px-8 py-20 text-center">
              <div className="font-serif text-3xl italic text-navy/30">
                {isError ? 'Posts are taking a break' : 'Nothing published yet'}
              </div>
              <p className="mt-4 text-navy/60">
                {isError
                  ? 'We couldn’t load posts right now. Please check back shortly.'
                  : 'New articles will appear here as soon as they’re published. Check back soon.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
