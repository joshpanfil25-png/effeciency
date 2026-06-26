import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] max-w-2xl flex-col items-center justify-center py-24 text-center">
      <Helmet>
        <title>Page not found — Efficiency Media</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <span className="font-serif text-6xl font-bold text-gradient">404</span>
      <h1 className="mt-4 text-3xl font-bold text-navy">Page not found</h1>
      <p className="mt-3 text-navy/65">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link to="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/blog">Visit the blog</Link>
        </Button>
      </div>
    </section>
  )
}
