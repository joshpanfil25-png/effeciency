import { Link } from "react-router-dom";
import { format } from "date-fns";

import { Card } from "@/versionB/components/ui/card";
import { urlForImage } from "@/lib/sanityImage";
import type { PostCardData } from "@/types/post";

// Blog card in Lia's Version B style: her Card, teal accents, Playfair title.
// Rendered inside .version-b-root so tokens/fonts resolve to her design.
export default function PostCard({ post }: { post: PostCardData }) {
  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(800).height(500).url()
    : null;
  const coverAlt = post.coverImage?.alt || post.title;

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="aspect-[16/10] overflow-hidden bg-warm">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={coverAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-2xl italic text-navy/20">
                Efficiency Media
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-teal">
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), "MMM d, yyyy")}
            </time>
            {post.author && (
              <>
                <span className="text-navy/30">·</span>
                <span className="normal-case tracking-normal text-muted-foreground">
                  {post.author}
                </span>
              </>
            )}
          </div>

          <h3 className="font-display text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-teal">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <span className="mt-5 text-sm font-medium text-teal">
            Read article →
          </span>
        </div>
      </Link>
    </Card>
  );
}
