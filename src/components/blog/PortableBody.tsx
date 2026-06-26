import { Link } from 'react-router-dom'
import {
  PortableText,
  type PortableTextComponents,
} from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { urlForImage } from '@/lib/sanityImage'
import type { SanityImage } from '@/types/post'

// Portable Text → Lia's type scale: Playfair headings, DM Sans body, teal links.
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 text-lg leading-[1.8] text-navy/85">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-bold text-navy">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-bold text-navy">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 text-xl font-semibold text-navy">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-primary bg-warm py-4 pl-6 pr-4 font-serif text-xl italic text-navy/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-navy/85 marker:text-primary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-navy/85 marker:text-primary marker:font-semibold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-navy">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href: string = value?.href || '#'
      const external = /^https?:\/\//.test(href)
      const className =
        'text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary'
      if (external || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return (
          <a
            href={href}
            className={className}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {children}
          </a>
        )
      }
      return (
        <Link to={href} className={className}>
          {children}
        </Link>
      )
    },
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      const url = urlForImage(value)?.width(1400).url()
      if (!url) return null
      return (
        <figure className="mt-10">
          <img
            src={url}
            alt={value.alt || ''}
            loading="lazy"
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-navy/55">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export default function PortableBody({
  value,
}: {
  value: PortableTextBlock[]
}) {
  return <PortableText value={value} components={components} />
}
