# Studio schema files

These are the schema files for the **standalone Sanity Studio** (the separate
`studio/` folder you scaffold with `npm create sanity@latest`). They are kept
here in the site repo for convenience — copy them into the Studio after scaffolding.

## How to use

After you run `npm create sanity@latest` (see the main README → "Sanity setup"),
the generated Studio has a `schemaTypes/` folder. Replace its contents with these:

1. Copy `postType.ts` and `blockContentType.ts` into `studio/schemaTypes/`.
2. Replace `studio/schemaTypes/index.ts` with the one here (exports `schema`).
3. In `studio/sanity.config.ts`, make sure it imports and uses this schema and
   sorts the Posts list newest-first. The relevant bits:

```ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Efficiency Media — Blog',
  projectId: 'YOUR_PROJECT_ID',   // npm create sanity fills this in
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Posts')
              .child(
                S.documentTypeList('post')
                  .title('Posts')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema,
})
```

That's it — `npx sanity deploy` from the `studio/` folder publishes it to a free
`your-name.sanity.studio` URL the client logs into.
