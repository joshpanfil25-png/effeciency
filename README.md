# Efficiency Media — site + self-publish blog

Vite + React + TypeScript + React Router + Tailwind + shadcn/ui marketing site
with a **client-editable blog** powered by **Sanity**.

The Studio runs as a **separate, hosted Studio** on Sanity's free
`*.sanity.studio` domain (via `sanity deploy`) — it is **not** embedded in this
Vite app. The client logs into that hosted URL to write and publish; this site
just reads published content over Sanity's public API. That keeps the main site
untouched and is the clean pattern for a Vite SPA.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build
```

`/blog` works immediately and shows an **empty state** until Sanity is wired up
and the first post is published.

> **The blog is styled to match Version B (Lia's design).** It renders inside
> `.version-b-root`, reuses her Navbar + Footer + Card/Button, and uses her
> Playfair/DM Sans + teal/navy tokens. Version A and the version toggle are
> untouched. (This is "Version B only, for now" — a Version-A-styled blog can be
> added later.)

---

## Architecture

```
src/
  main.tsx                 BrowserRouter + QueryClientProvider + HelmetProvider
  App.tsx                  routes — blog routes (Version B) sit ABOVE catch-all "*"
  index.css                A tokens in :root + Lia's tokens scoped .version-b-root
  components/
    Layout.tsx             site chrome; renders bare <Outlet/> for /blog + B home
    Navbar.tsx / Footer.tsx   Version A chrome (UNTOUCHED this task)
    ui/                    shadcn/ui (button, card) — Version A
    sections/              Version A: Hero/About/Services/Team/Testimonials/Contact
  pages/
    Home.tsx               Version A marketing page
    NotFound.tsx           catch-all 404
  versionB/                ← Lia's design (Version B)
    VersionBHome.tsx       her homepage; hash-scroll for cross-route section links
    components/            her Navbar (+alwaysSolid, +Blog link) / Footer / sections
    components/ui/         her Card + Button (token-driven → inherit her tokens)
    blog/
      PostCard.tsx         Version B card (her <Card>, teal accents, Playfair title)
      PortableBody.tsx     Portable Text → Playfair headings, DM Sans, teal links
    pages/
      BlogIndex.tsx        /blog       — .version-b-root, her Navbar/Footer, grid
      BlogPost.tsx         /blog/:slug — full post + SEO + "more posts"
  lib/
    sanity.ts              @sanity/client (reads VITE_SANITY_* env)  ← shared
    sanityImage.ts         @sanity/image-url urlForImage()           ← shared
    queries.ts             GROQ fetchers (getPosts / getPost / getMorePosts)
  types/post.ts            Post / PostCard TS types                  ← shared
sanity-studio-schemas/     post + blockContent schema to drop into the Studio
.env.example               VITE_SANITY_* template
vercel.json                SPA rewrite so /blog/:slug deep-links work
```

The Sanity **data layer** (`lib/sanity`, `lib/queries`, `lib/sanityImage`,
`types/post`) is version-agnostic and shared. Only the blog **UI** lives under
`src/versionB/`. The blog is **additive**: the only edits to existing chrome are
in Version B's `Navbar.tsx` (Blog link + `alwaysSolid` prop for the blog) and
`Footer.tsx` (cross-route section links), plus `Layout.tsx`/`App.tsx` wiring.

---

## Sanity setup (one-time) — Windows PowerShell

You have **not** created the Sanity project yet. These commands create it, build
the standalone Studio, and deploy it.

### 1. Install the read deps (already in package.json; run if reinstalling)

```powershell
npm install @sanity/client @sanity/image-url @portabletext/react
```

### 2. Scaffold the standalone Studio + create the project + log in

From the **repo root**, scaffold a Studio into a `studio/` subfolder:

```powershell
npm create sanity@latest -- --template clean --create-project "Efficiency Media" --dataset production --output-path studio
```

This opens a browser to **log you in**, **creates the project**, and scaffolds
the Studio in `studio/`. If it prompts, choose: TypeScript **Yes**, package
manager **npm**, project template **Clean**.

> Prefer fully interactive? Just run `npm create sanity@latest` and answer the
> prompts (Create new project → "Efficiency Media" → dataset `production` →
> Clean template → output path `studio`).

When it finishes it prints your **Project ID**. You can also find it any time at
**https://www.sanity.io/manage** (or run `npx sanity projects list` inside `studio/`).

### 3. Add the schema to the Studio

Copy the ready-made schema from `sanity-studio-schemas/` into the Studio:

```powershell
Copy-Item sanity-studio-schemas\postType.ts        studio\schemaTypes\
Copy-Item sanity-studio-schemas\blockContentType.ts studio\schemaTypes\
Copy-Item sanity-studio-schemas\index.ts           studio\schemaTypes\ -Force
```

Then open `studio/sanity.config.ts` and set the document-list ordering
(newest first). See `sanity-studio-schemas/README.md` for the exact config snippet.

### 4. Point the Vite app at the project (env vars)

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local`:

```dotenv
VITE_SANITY_PROJECT_ID="your_project_id"   # from step 2
VITE_SANITY_DATASET="production"
VITE_SANITY_API_VERSION="2024-06-01"
```

`src/lib/sanity.ts` reads these. Restart `npm run dev` after editing env.

### 5. Add CORS origins (so the browser can read the API)

From inside the `studio/` folder:

```powershell
cd studio
npx sanity cors add http://localhost:5173 --credentials
npx sanity cors add http://localhost:4173 --credentials   # vite preview
npx sanity cors add https://efficiencymedia.com --credentials
npx sanity cors add https://www.efficiencymedia.com --credentials
```

(Add your `*.vercel.app` preview URL too. You can also manage these at
manage.sanity.io → API → CORS origins.)

### 6. Deploy the Studio to a free hosted URL

```powershell
# still inside studio/
npx sanity deploy
```

Pick a hostname when prompted, e.g. `efficiency-media` → your client logs in at
**https://efficiency-media.sanity.studio**. Re-run `sanity deploy` only when the
schema changes; day-to-day publishing needs no deploy.

---

## Create & publish your first post

1. Go to your hosted Studio (e.g. **https://efficiency-media.sanity.studio**) and log in.
2. **Posts → Create new Post.**
3. Add **Title** (click *Generate* for the slug), **Excerpt**, a **Cover image**
   + its **Alt text**, **Author**, leave **Published at** as now, write the **Body**.
4. Click **Publish** (bottom-right).
5. With `npm run dev` running and `.env.local` set, open
   **http://localhost:5173/blog** → your post is in the grid → click through to
   `/blog/<slug>`. (Sanity's CDN updates within a few seconds; hard-refresh if needed.)

---

## Deploy to Vercel (the Vite site)

1. Push the repo to GitHub and **import at https://vercel.com/new**. Vercel
   auto-detects Vite (build `npm run build`, output `dist`).
2. **Add environment variables** (Settings → Environment Variables, Production +
   Preview):

   | Name | Value |
   | --- | --- |
   | `VITE_SANITY_PROJECT_ID` | your project ID |
   | `VITE_SANITY_DATASET` | `production` |
   | `VITE_SANITY_API_VERSION` | `2024-06-01` |

   > `VITE_`-prefixed vars are baked in at **build time** — after changing them,
   > trigger a redeploy.
3. **`vercel.json`** is included so client-side routes (`/blog/:slug`) resolve to
   `index.html` instead of 404ing.
4. **Add the production domain to Sanity CORS** (easy to forget):
   ```powershell
   cd studio
   npx sanity cors add https://efficiencymedia.com --credentials
   npx sanity cors add https://www.efficiencymedia.com --credentials
   ```
   Without this, the live site can't read posts (browser CORS error).

---

## ⚠️ Access control — do this before sharing the Studio

In **https://www.sanity.io/manage** → your project → **Members → Invite**:

- Invite **Leah as an _Editor_** (she can write and publish posts) — **not**
  Administrator.
- Keep the **Owner / Administrator** role to **yourself**. Editors can't change
  billing, delete the dataset, manage members, or alter API tokens — which is
  exactly what you want for a non-technical client.

---

## How to post — forward this to Leah

See `HOW-TO-POST.md` (4 lines, written for a non-technical user).
