import { Link } from 'react-router-dom'
import { format } from 'date-fns'

import { Card } from '@/components/ui/card'
import { urlForImage } from '@/lib/sanityImage'
import type { PostCardData } from '@/types/post'

export default function PostCard({ post }: { post: PostCardData }) {
  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(800).height(500).url()
    : null
  const coverAlt = post.coverImage?.alt || post.title

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md">
      <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-warm">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={coverAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-serif text-2xl italic text-navy/20">
                Efficiency Media
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'MMM d, yyyy')}
            </time>
            {post.author && (
              <>
                <span className="text-navy/30">·</span>
                <span className="normal-case tracking-normal text-navy/50">
                  {post.author}
                </span>
              </>
            )}
          </div>

          <h3 className="mt-3 font-serif text-xl leading-snug text-navy transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
              {post.excerpt}
            </p>
          )}

          <span className="mt-5 text-sm font-medium text-primary">
            Read article →
          </span>
        </div>
      </Link>
    </Card>
  )
}
