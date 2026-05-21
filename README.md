# recs.ayn.taipei

Tiny Astro site for Andrew's Taipei starter guide.

## Local

```sh
npm install
npm run dev
```

Open `http://localhost:8080`.

## Build

```sh
npm run build
```

Cloudflare Pages output directory: `dist`.

## Cloudflare Pages

Deployments are handled by the Cloudflare Pages GitHub integration. Pushes to `main` should trigger Cloudflare to run the build.

Pages project settings:

- Project name: `recs-ayn-taipei`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

One-time Cloudflare setup:

1. Connect this GitHub repo to a Cloudflare Pages project.
2. Add `recs.ayn.taipei` as a custom domain on the Cloudflare Pages project.
3. If Cloudflare does not create it automatically, create a `recs` CNAME pointing to the Pages project hostname.
4. Update the `ayn.taipei` zone redirect rule to exclude `recs.ayn.taipei`, matching the existing pattern for other subdomains. Pages custom domains generally need to be attached to the Pages project, not just DNS.

## Editing Places

Edit `src/data/recs.ts`. Each recommendation has:

- `name`
- `area`
- `category`
- `note`
- optional `tip`
- optional `gettingThere: { label, tone, detail }`
- `tags`
- `mapQuery`
- optional `image: { src, alt }`

Map links use `mapUrl` when present, otherwise Google Maps place URLs generated from `mapQuery`.
Put future photos in `public/photos/` and reference them as `/photos/name.jpg`.

## TODO

- Swap in personal favorites as this guide gets field-tested.
- Add personal photos for key cards.
