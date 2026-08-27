# Buckshot Wiki

City wiki for Buckshot RP, built with [Nextra](https://nextra.site) from the MrNewb docs template.

Repo: [Buckshot-Rp/wiki](https://github.com/Buckshot-Rp/wiki)

Live (after Pages is on): [https://buckshot-rp.github.io/wiki](https://buckshot-rp.github.io/wiki)

## Development

```bash
bun install
bun dev
```

Open [http://localhost:3000/wiki](http://localhost:3000/wiki) after `bun dev`. The app is served under `/wiki`. Opening `http://localhost:3000` alone will not load the site.

If you see a blank white page:

1. Stop the dev server
2. Delete `.next`
3. Run `bun dev` again and open **http://localhost:3000/wiki**
4. Hard refresh (`Ctrl+Shift+R`)

Do not run `bun run build` while `bun dev` is running.

## Pages

Edit markdown in `pages/`. The first city page is [Rules](pages/rules.mdx) — paste the list there when you have it.

```
pages/
  index.mdx     # Introduction
  rules.mdx     # Rules
  _meta.jsx     # Sidebar order
```

## Build

```bash
bun run build
```

Static output is written to `out/` for GitHub Pages.

## Deploy

Push to `main` on [Buckshot-Rp/wiki](https://github.com/Buckshot-Rp/wiki). GitHub Actions builds the static export and publishes Pages.

On the repo → **Settings → Pages**, set Source to **GitHub Actions** (not a branch). After the first successful run the site is at [https://buckshot-rp.github.io/wiki](https://buckshot-rp.github.io/wiki).
