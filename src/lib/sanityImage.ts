import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

import { sanityClient, sanityConfigured } from '@/lib/sanity'

// Only build when configured; sanityClient is null until env vars exist.
const builder = sanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlForImage(source: SanityImageSource) {
  if (!builder) return null
  return builder.image(source).auto('format').fit('max')
}
