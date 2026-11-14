# Goldfish Mayhem / 金魚街大亂鬥 — livestream companion

A standalone, static page for Junie Lau to screen-share while introducing herself, walking through *Goldfish Mayhem*, and talking with an audience.

This is **not** a replacement for [junielau.com](https://junielau.com), and it should **not** be published into the `JunieLau/JunieLau.github.io` official-site repository.

## Open locally

From this folder:

```bash
python3 -m http.server 8765 --bind 0.0.0.0
```

Then open `http://127.0.0.1:8765/` (or the machine’s address and port).

You can also open `index.html` directly in a browser. Video playback uses a click-to-load YouTube embed, which works more reliably from a local server than from a `file://` URL.

There is no build step. All paths in the page are relative.

## Files

- `index.html` — single entry page
- `css/style.css` — paper field (`#F4F3F1` / `#F5F4F2`), red `#C8102E`, Abril Fatface / Noto Serif SC / Libre Baskerville
- `js/content.js` — all bilingual copy, captions, links and media paths (edit this to update wording or assets)
- `js/app.js` — language switch, chapter nav, lightbox, expanders, click-to-play video
- `assets/` — official stills, YouTube posters, and complete uncropped presentation slides (10000×2200, shown full-width with `object-fit: contain`)
- `GAPS.md` — remaining gaps and source differences

## Language

The default mode is **English + 中文**. Use the top bar to switch to English only or 中文 only. The current chapter and reading position are kept when you switch.

## GitHub Pages

This folder is ready to deploy as the root of a **separate** GitHub repository’s GitHub Pages site (`index.html` at the root, relative asset paths, no localhost dependencies).

Do not push the `_internal/` directory to a public repo. It is listed in `.gitignore` and holds unpublished source material that is not part of the livestream page.

## Credit

Goldfish Mayhem — by Junie Lau.
