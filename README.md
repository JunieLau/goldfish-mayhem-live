# Goldfish Mayhem / 金魚街大亂鬥

A standalone, static page for Junie Lau: an introduction, the story and making of *Goldfish Mayhem*, and conversation with an audience.

The official homepage remains [junielau.com](https://junielau.com), in the `JunieLau/JunieLau.github.io` repository. Do not publish this site into that repository.

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
- `assets/` — official stills, YouTube posters, Instagram cover images (`assets/ig/`), and photographs extracted for typographic plates (`assets/plates/`). The typography itself is live HTML/CSS in British English, not a screenshot of the original slides.
- `GAPS.md` — remaining gaps and source differences

## Language

The default mode is **English + 中文**. Use the top bar to switch to English only or 中文 only. The current chapter and reading position are kept when you switch.

## GitHub Pages

This folder is ready to deploy as the root of a **separate** GitHub repository’s GitHub Pages site (`index.html` at the root, relative asset paths, no localhost dependencies).

Do not push the `_internal/` directory to a public repo. It is listed in `.gitignore` and holds unpublished source material that is not part of this site.

## Credit

Goldfish Mayhem — by Junie Lau.
