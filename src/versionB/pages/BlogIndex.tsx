import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

import Navbar from "@/versionB/components/Navbar";
import Footer from "@/versionB/components/Footer";
import PostCard from "@/versionB/blog/PostCard";
import { getPosts } from "@/lib/queries";

// Version B blog index. The whole page lives inside .version-b-root so it
// inherits Lia's teal/navy tokens and Playfair/DM Sans fonts.
export default function BlogIndex() {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  return (
    <div className="version-b-root min-h-screen">
      <Helmet>
        <title>Blog — Efficiency Media</title>
        <meta
          name="description"
          content="Perspectives on media planning, buying, and measurement from the Efficiency Media team."
        />
        <meta property="og:title" content="Blog — Efficiency Media" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar alwaysSolid />

      {/* Header — offset for the fixed navbar */}
      <section className="bg-warm pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            Field Notes
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy">
            The Blog
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Perspectives on media planning, buying, and measurement — written by
            the practitioners doing the work.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-80 animate-pulse rounded-xl border border-border bg-warm"
                />
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-xl border border-border bg-card px-8 py-20 text-center shadow-sm">
              <div className="font-display text-3xl italic text-navy/30">
                {isError ? "Posts are taking a break" : "Nothing published yet"}
              </div>
              <p className="mt-4 text-muted-foreground">
                {isError
                  ? "We couldn’t load posts right now. Please check back shortly."
                  : "New articles will appear here as soon as they’re published. Check back soon."}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
