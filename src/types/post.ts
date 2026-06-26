import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url'

export type SanityImage = SanityImageSource & {
  alt?: string
  caption?: string
}

export type PostCardData = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  author?: string
  publishedAt: string
  coverImage?: SanityImage
}

export type PostData = PostCardData & {
  body?: PortableTextBlock[]
}
