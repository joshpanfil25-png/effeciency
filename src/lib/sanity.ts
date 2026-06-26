import { createClient } from '@sanity/client'

// Vite exposes env vars prefixed with VITE_ on import.meta.env.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined
const dataset =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) || 'production'
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) ||
  '2024-06-01'

// True once VITE_SANITY_PROJECT_ID is set. When false, the blog renders its
// empty state instead of crashing — so `npm run dev` works before setup.
export const sanityConfigured = Boolean(projectId)

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: projectId as string,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached, published content
      perspective: 'published',
    })
  : null

export const sanityProjectId = projectId
export const sanityDataset = dataset
