import { Link } from "react-router-dom";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlForImage } from "@/lib/sanityImage";
import type { SanityImage } from "@/types/post";

// Portable Text → Version B type scale: Playfair (font-display) headings,
// DM Sans body, teal links. Rendered inside .version-b-root.
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 text-lg leading-[1.8] text-foreground/85">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-3xl font-bold text-navy">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-2xl font-bold text-navy">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 font-display text-xl font-semibold text-navy">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-teal bg-warm py-4 pl-6 pr-4 font-display text-xl italic text-navy/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-foreground/85 marker:text-teal">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-foreground/85 marker:font-semibold marker:text-teal">
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
      const href: string = value?.href || "#";
      const external = /^https?:\/\//.test(href);
      const className =
        "text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal";
      if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return (
          <a
            href={href}
            className={className}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {children}
          </a>
        );
      }
      return (
        <Link to={href} className={className}>
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      const url = urlForImage(value)?.width(1400).url();
      if (!url) return null;
      return (
        <figure className="mt-10">
          <img
            src={url}
            alt={value.alt || ""}
            loading="lazy"
            className="w-full rounded-xl"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableBody({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
