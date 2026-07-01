# Studio schema files

These are the schema files for the **standalone Sanity Studio** (the separate
`studio/` folder you scaffold with `npm create sanity@latest`). They are kept
here in the site repo for convenience — copy them into the Studio after scaffolding.

## How to use

After you run `npm create sanity@latest` (see the main README → "Sanity setup"),
the generated Studio has a `schemaTypes/` folder. Copy these three files over it:

```powershell
Copy-Item sanity-studio-schemas\postType.ts        studio\schemaTypes\ -Force
Copy-Item sanity-studio-schemas\blockContentType.ts studio\schemaTypes\ -Force
Copy-Item sanity-studio-schemas\index.ts           studio\schemaTypes\ -Force
```

`index.ts` here exports a named **`schemaTypes` array**, which is exactly what the
clean-template `studio/sanity.config.ts` already imports:

```ts
import { schemaTypes } from './schemaTypes'
// ...
schema: { types: schemaTypes },
```

So **no edits to `sanity.config.ts` are needed** — just copy the files and run
`npx sanity deploy` from the `studio/` folder.

## Optional: make the Posts list default to newest-first

`postType.ts` already defines a `publishedAt`-descending ordering option. To make
it the *default* order of the document list, give `structureTool` a custom
structure in `studio/sanity.config.ts`:

```ts
import { structureTool } from 'sanity/structure'

structureTool({
  structure: (S) =>
    S.list()
      .title('Content')
      .items([
        S.documentTypeListItem('post')
          .title('Posts')
          .child(
            S.documentTypeList('post')
              .title('Posts')
              .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
          ),
      ]),
})
```

Otherwise the schema's ordering is still available from the list's sort menu.
