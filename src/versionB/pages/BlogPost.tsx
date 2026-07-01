import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/versionB/components/Navbar";
import Footer from "@/versionB/components/Footer";
import PostCard from "@/versionB/blog/PostCard";
import PortableBody from "@/versionB/blog/PortableBody";
import { getPost, getMorePosts } from "@/lib/queries";
import { urlForImage } from "@/lib/sanityImage";

export default function BlogPost() {
  const { slug = "" } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPost(slug),
    enabled: Boolean(slug),
  });

  const { data: morePosts = [] } = useQuery({
    queryKey: ["more-posts", slug],
    queryFn: () => getMorePosts(slug),
    enabled: Boolean(slug),
  });

  const coverUrl = post?.coverImage
    ? urlForImage(post.coverImage)?.width(1600).height(900).fit("crop").url()
    : null;
  const ogImage = post?.coverImage
    ? urlForImage(post.coverImage)?.width(1200).height(630).fit("crop").url()
    : null;
  const coverAlt = post?.coverImage?.alt || post?.title || "";

  return (
    <div className="version-b-root min-h-screen">
      <Navbar alwaysSolid />

      {isLoading ? (
        <div className="container mx-auto px-6 max-w-3xl pt-32 pb-24">
          <div className="h-10 w-2/3 animate-pulse rounded bg-warm" />
          <div className="mt-6 h-64 animate-pulse rounded-xl bg-warm" />
        </div>
      ) : !post ? (
        <div className="container mx-auto px-6 max-w-3xl pt-32 pb-24 text-center">
          <Helmet>
            <title>Post not found — Efficiency Media</title>
          </Helmet>
          <h1 className="font-display text-4xl font-bold text-navy">
            Post not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            This article may have moved or been unpublished.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 font-medium text-teal hover:underline"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>
        </div>
      ) : (
        <>
          <Helmet>
            <title>{post.title} — Efficiency Media</title>
            {post.excerpt && (
              <meta name="description" content={post.excerpt} />
            )}
            <meta property="og:title" content={post.title} />
            {post.excerpt && (
              <meta property="og:description" content={post.excerpt} />
            )}
            <meta property="og:type" content="article" />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>

          <article>
            {/* Header — offset for fixed navbar */}
            <div className="container mx-auto px-6 max-w-3xl pt-32">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-teal"
              >
                <ArrowLeft size={14} /> Back to blog
              </Link>

              <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold leading-tight text-navy">
                {post.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                {post.author && (
                  <span className="font-medium text-navy">{post.author}</span>
                )}
                {post.author && <span className="text-navy/30">·</span>}
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </time>
              </div>

              {post.excerpt && (
                <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Cover */}
            {coverUrl && (
              <div className="container mx-auto px-6 max-w-5xl mt-10">
                <img
                  src={coverUrl}
                  alt={coverAlt}
                  className="aspect-[16/9] w-full rounded-xl object-cover"
                />
              </div>
            )}

            {/* Body */}
            <div className="container mx-auto px-6 max-w-3xl mt-12 pb-4">
              {post.body && post.body.length > 0 ? (
                <PortableBody value={post.body} />
              ) : (
                <p className="italic text-muted-foreground">
                  This post has no content yet.
                </p>
              )}

              <div className="mt-14 border-t border-border pt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 font-medium text-teal hover:underline"
                >
                  <ArrowLeft size={16} /> Back to all posts
                </Link>
              </div>
            </div>
          </article>

          {/* More posts */}
          {morePosts.length > 0 && (
            <section className="bg-warm py-20 mt-8">
              <div className="container mx-auto px-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">
                  More posts
                </h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {morePosts.map((p) => (
                    <PostCard key={p._id} post={p} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}
