# recs.ayn.taipei

Static Astro site for `https://recs.ayn.taipei`.

Keep this repo simple:

- No database.
- No analytics unless there is a deliberate shared pattern added later.
- Minimal dependencies.
- Cloudflare Pages build command: `npm run build`.
- Output directory: `dist`.

Most edits should happen in `src/data/recs.ts`. The page is `src/pages/index.astro`.

Cloudflare custom domain setup is dashboard-side:

1. Add `recs.ayn.taipei` to the Pages project custom domains.
2. Add or verify the `recs` CNAME if needed.
3. Exclude `recs.ayn.taipei` from the `ayn.taipei` redirect rule that sends unrecognized hosts to `andrewng.com`.
