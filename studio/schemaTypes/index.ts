import { postType } from './postType'
import { blockContentType } from './blockContentType'

// The clean-template sanity.config.ts imports `{ schemaTypes }` and does
// `schema: { types: schemaTypes }`, so this must be a named array.
export const schemaTypes = [postType, blockContentType]
