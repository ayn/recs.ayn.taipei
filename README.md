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

Suggested project settings:

- Project name: `recs-ayn-taipei`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Domain steps still required in Cloudflare:

1. Add `recs.ayn.taipei` as a custom domain on the Cloudflare Pages project.
2. If Cloudflare does not create it automatically, create a `recs` CNAME pointing to the Pages project hostname.
3. Update the `ayn.taipei` zone redirect rule to exclude `recs.ayn.taipei`, matching the existing pattern for other subdomains. Pages custom domains generally need to be attached to the Pages project, not just DNS.

## Editing Places

Edit `src/data/recs.ts`. Each recommendation has:

- `name`
- `area`
- `category`
- `note`
- `tags`
- `mapQuery`

Map links are Google Maps search URLs generated from `mapQuery`.

## TODO

- Swap in personal favorites as this guide gets field-tested.
