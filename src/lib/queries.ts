import { sanityClient } from '@/lib/sanity'
import type { PostCardData, PostData } from '@/types/post'

const cardFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedAt,
  coverImage
`

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  ${cardFields}
}`

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  ${cardFields},
  body
}`

const MORE_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && slug.current != $slug]
  | order(publishedAt desc)[0...3] {
  ${cardFields}
}`

// All fetchers no-op safely to empty/null when Sanity isn't configured yet.
export async function getPosts(): Promise<PostCardData[]> {
  if (!sanityClient) return []
  return sanityClient.fetch(POSTS_QUERY)
}

export async function getPost(slug: string): Promise<PostData | null> {
  if (!sanityClient) return null
  return sanityClient.fetch(POST_QUERY, { slug })
}

export async function getMorePosts(slug: string): Promise<PostCardData[]> {
  if (!sanityClient) return []
  return sanityClient.fetch(MORE_POSTS_QUERY, { slug })
}
