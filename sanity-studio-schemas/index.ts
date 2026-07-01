import { postType } from './postType'
import { blockContentType } from './blockContentType'

// `npm create sanity` (clean template) generates a sanity.config.ts that imports
// `{ schemaTypes }` and uses `schema: { types: schemaTypes }`. So export a named
// array with that exact name — copying this over the scaffold's index.ts works.
export const schemaTypes = [postType, blockContentType]
