/* Goldfish Mayhem site */
(function () {
  const DEFAULT_LANG = "both";
  const LANGS = ["en", "zh", "both"];
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function t(obj) {
    if (!obj || typeof obj === "string") return obj || "";
    const lang = document.body.dataset.lang || DEFAULT_LANG;
    if (lang === "en") return obj.en || "";
    if (lang === "zh") return obj.zh || "";
    return obj;
  }

  function sourceMark(code, lang) {
    if (!code) return "";
    const src = (window.GM.sourcesMap || {})[code] || { en: code, zh: code };
    if (lang === "en") return `<span class="src">${esc(src.en)}</span>`;
    if (lang === "zh") return `<span class="src">${esc(src.zh)}</span>`;
    return `<span class="src"><span class="en">${esc(src.en)}</span><span class="zh">${esc(src.zh)}</span></span>`;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function textPair(obj, className) {
    if (!obj) return "";
    const en = obj.en || "";
    const zh = obj.zh || "";
    if (en === zh) {
      const cls = ["pair", "same", className].filter(Boolean).join(" ");
      return `<div class="${cls}"><div class="en">${en}</div></div>`;
    }
    const cls = ["pair", className].filter(Boolean).join(" ");
    return `<div class="${cls}"><div class="en">${en}</div><div class="zh">${zh}</div></div>`;
  }

  function italicize(s) {
    return esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function rich(obj, extraClass) {
    if (!obj) return "";
    return textPair(
      {
        en: italicize(obj.en || "") + (obj.source ? " " + sourceMark(obj.source, "en") : ""),
        zh: italicize(obj.zh || "") + (obj.source ? " " + sourceMark(obj.source, "zh") : "")
      },
      extraClass
    );
  }

  function isNaturalImage(img) {
    if (!img) return false;
    if (img.natural || img.modest || img.sheet || img.poster || img.expression || img.heightSheet) return true;
    const src = img.src || "";
    return (
      src.indexOf("assets/characters/") === 0 ||
      /goldfish-key-art\.jpg/.test(src)
    );
  }

  function renderFig(img, i) {
    const cls = ["fig"];
    if (img.slide) cls.push("slide-plate");
    if (img.portrait) cls.push("portrait");
    if (img.contain) cls.push("contain");
    const natural = isNaturalImage(img);
    if (natural) cls.push("natural");
    if (img.modest) cls.push("modest");
    if (img.sheet) cls.push("sheet");
    if (img.poster) cls.push("poster");
    if (img.heightSheet) cls.push("height-sheet");
    const alt = esc(img.altEn || img.altZh || "");
    const cap = textPair(
      {
        en: (img.capEn || "") + (img.source ? " " + sourceMark(img.source, "en") : ""),
        zh: (img.capZh || "") + (img.source ? " " + sourceMark(img.source, "zh") : "")
      }
    );
    const hint = img.slide
      ? `<span class="enlarge-hint"><span class="en">Click to enlarge</span><span class="zh">点击放大完整画面</span></span>`
      : "";
    const w = img.w || (img.slide ? 10000 : natural ? "" : 1600);
    const h = img.h || (img.slide ? 2200 : natural ? "" : 900);
    const wh = (w ? ` width="${w}"` : "") + (h ? ` height="${h}"` : "");
    return `<figure class="${cls.join(" ")}" data-lb="${esc(img.src)}" data-slide="${img.slide ? "1" : ""}" data-idx="${i}" tabindex="0" role="button" aria-label="${alt}">
      <img src="${esc(img.src)}" alt="${alt}"${wh} loading="lazy">
      ${hint}
      <figcaption>${cap}</figcaption>
    </figure>`;
  }

  function renderVideo(v) {
    const titleEn = esc(v.titleEn);
    const titleZh = esc(v.titleZh);
    const playEn = (window.GM.ui.play && window.GM.ui.play.en) || "Play";
    const playZh = (window.GM.ui.play && window.GM.ui.play.zh) || "播放";
    const pw = v.posterW || 1280;
    const ph = v.posterH || 720;
    const aria = titleEn || playEn;
    const meta = v.hideMeta
      ? ""
      : `<div class="player-meta">
        <div>${textPair({ en: v.titleEn + (v.source ? " " + sourceMark(v.source, "en") : ""), zh: v.titleZh + (v.source ? " " + sourceMark(v.source, "zh") : "") })}</div>
        <a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
      </div>`;
    return `<div class="video-item">
      <div class="player" data-yt="${esc(v.id)}">
        <img src="${esc(v.poster)}" alt="${titleEn}" width="${pw}" height="${ph}">
        <button type="button" class="playbtn" aria-label="${aria}">
          <span class="tri" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          <span class="plab">${textPair({ en: playEn, zh: playZh })}</span>
        </button>
      </div>
      ${meta}
    </div>`;
  }

  function renderLinkCard(l) {
    return `<a class="link-card" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">
        <div class="k">${textPair({ en: l.kindEn || "Link", zh: l.kindZh || "链接" })}</div>
        <div class="t">${textPair({ en: l.labelEn, zh: l.labelZh })}</div>
        ${l.noteEn || l.noteZh ? `<div class="d">${textPair({ en: l.noteEn || "", zh: l.noteZh || "" })}</div>` : ""}
        <div class="go">${textPair({ en: "Open ↗", zh: "打开 ↗" })}</div>
      </a>`;
  }

  function renderPosterCard(l) {
    const alt = esc(l.altEn || l.labelEn || "");
    return `<a class="poster-card" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">
        <img src="${esc(l.poster)}" alt="${alt}" width="${l.posterW || 360}" height="${l.posterH || 640}">
        <div class="meta">
          <div class="k">${textPair({ en: l.kindEn || "Instagram", zh: l.kindZh || "Instagram" })}</div>
          <div class="t">${textPair({ en: l.labelEn, zh: l.labelZh })}</div>
          ${l.noteEn || l.noteZh ? `<div class="d">${textPair({ en: l.noteEn || "", zh: l.noteZh || "" })}</div>` : ""}
          <div class="go">${textPair({ en: "Open ↗", zh: "打开 ↗" })}</div>
        </div>
      </a>`;
  }

  function renderLinks(links) {
    const posters = (links || []).filter((l) => l.poster);
    const texts = (links || []).filter((l) => !l.poster);
    return `${posters.length ? `<div class="poster-grid">${posters.map(renderPosterCard).join("")}</div>` : ""}${
      texts.length ? `<div class="link-grid">${texts.map(renderLinkCard).join("")}</div>` : ""
    }`;
  }

  const PLATE_NAV = [
    { key: "director", label: "Film Director" },
    { key: "artist", label: "Artist" },
    { key: "worlds", label: "Creating Worlds" },
    { key: "future", label: "Imagining the Future" },
    { key: "dreams", label: "Dreams × Reality" }
  ];

  const PLATE_W = 5500;
  const PLATE_H = 1210;

  function cropStyle(crop) {
    if (!crop) return "";
    const l = Number(crop.l || 0);
    const t = Number(crop.t || 0);
    const r = Number(crop.r || 0);
    const b = Number(crop.b || 0);
    if (!l && !t && !r && !b) return "";
    return ` style="--crop-l:${l};--crop-t:${t};--crop-r:${r};--crop-b:${b}"`;
  }

  function hasCrop(crop) {
    if (!crop) return false;
    return Number(crop.l || 0) || Number(crop.t || 0) || Number(crop.r || 0) || Number(crop.b || 0);
  }

  function plateChrome(p) {
    const nav = PLATE_NAV.map(
      (n) => `<span class="${n.key === p.highlight ? "is-current" : ""}">${esc(n.label)}</span>`
    ).join("");
    const ghost = p.ghost
      ? `<span class="plate-ghost" aria-hidden="true">${esc(p.ghost)}</span>`
      : "";
    return `<header class="plate-bar">
        <div class="plate-kicker">JUNIE LAU</div>
        <nav class="plate-nav" aria-label="Section">${nav}</nav>
      </header>${ghost}`;
  }

  function plateCap(p) {
    if (!p.capEn && !p.capZh) return "";
    return `<div class="plate-cap">${textPair({ en: p.capEn || "", zh: p.capZh || "" })}</div>`;
  }

  function plateFig(img, i) {
    const alt = esc(img.altEn || img.altZh || "");
    const src = esc(img.src);
    const cropped = hasCrop(img.crop);
    return `<figure class="fig natural${cropped ? " is-cropped" : ""}"${cropStyle(img.crop)} data-lb="${src}" data-idx="${i}" tabindex="0" role="button" aria-label="${alt}">
      <img src="${src}" alt="${alt}" loading="lazy">
    </figure>`;
  }

  function figs(photos, prefix) {
    return (photos || []).map((ph, i) => plateFig(ph, `${prefix}-${i}`)).join("");
  }

  function hl(html) {
    return String(html || "").replace(/\*([^*]+)\*/g, '<span class="accent">$1</span>');
  }

  function typo(text) {
    return hl(esc(text || "")).replace(/\n/g, "<br>");
  }

  function quoteLogo(logo) {
    if (!logo) return "";
    const cropped = hasCrop(logo.crop);
    const img = `<img class="quote-logo" src="${esc(logo.src)}" alt="${esc(logo.altEn || "")}">`;
    if (!cropped) return img;
    return `<span class="quote-logo-wrap is-cropped"${cropStyle(logo.crop)}>${img}</span>`;
  }

  function renderPlate(p, idx) {
    const kind = p.kind || "statement-ghost";
    let body = "";
    let plateExtras = "";
    if (kind === "intro-awards") {
      const awards = p.awards || [];
      const mid = Math.ceil(awards.length / 2);
      const item = (a) => `<li><span class="n">${esc(a.n)}</span><span>${esc(a.text)}</span></li>`;
      body = `<div class="plate-intro">
        <div class="intro-copy">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        <div class="plate-awards">
          <ul>${awards.slice(0, mid).map(item).join("")}</ul>
          <ul>${awards.slice(mid).map(item).join("")}<li class="more" aria-hidden="true">······</li></ul>
        </div>
        ${p.wordmark ? `<div class="plate-wordmark">${esc(p.wordmark)}</div>` : ""}
        <div class="plate-photos">${figs(p.photos, idx)}</div>
      </div>`;
    } else if (kind === "milestones") {
      const items = (p.milestones || [])
        .map(
          (m) => `<li><span class="n">${esc(m.n)}</span><span><strong>${esc(m.title)}</strong>${esc(m.text)}</span></li>`
        )
        .join("");
      body = `<div class="plate-miles">
        <div class="plate-miles-photos">${figs(p.photos, idx)}</div>
        <div class="plate-miles-copy">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        <ul class="plate-mile-list">${items}</ul>
        ${p.wordmark ? `<div class="plate-wordmark">${esc(p.wordmark)}</div>` : ""}
      </div>`;
    } else if (kind === "artist") {
      const items = (p.credits || []).map((t) => `<li>${esc(t)}</li>`).join("");
      body = `<div class="plate-artist">
        <div class="plate-photos">${figs(p.photos, idx)}</div>
        <div class="artist-copy">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        <ul class="plate-credits">${items}</ul>
        ${p.wordmark ? `<div class="plate-wordmark">${esc(p.wordmark)}</div>` : ""}
      </div>`;
    } else if (kind === "numerals") {
      const items = (p.numerals || [])
        .map(
          (n) => `<div class="numeral-item${n.circled ? " is-circled" : ""}"><div class="num">${esc(n.num)}</div><p>${esc(n.text)}</p></div>`
        )
        .join("");
      body = `<div class="plate-numerals">
        <div class="numeral-grid">${items}</div>
        <div class="plate-photos single">${figs(p.photos, idx)}</div>
      </div>`;
    } else if (kind === "timeline") {
      const floats = [];
      const cells = (p.moments || [])
        .map((m, i) => {
          const n = (m.photos || []).length;
          const cls = m.layout || (n === 1 ? "solo" : n > 2 ? "sets" : "pair");
          const photos = (m.photos || [])
            .map((ph, pi) => {
              if (ph.youtube) {
                floats.push(ph);
                return `<div class="fig timeline-yt-hole" data-yt-slot="${esc(ph.youtube)}" aria-hidden="true"></div>`;
              }
              return plateFig(ph, `${idx}-m${i}-${pi}`);
            })
            .join("");
          return `<article class="timeline-cell cell-${i} ${esc(cls)}">
            <div class="t-photos ${esc(cls)}">${photos}</div>
            <div class="t-copy">
              <h3>${esc(m.title)}</h3>
              ${m.date ? `<p class="t-date">${esc(m.date)}</p>` : ""}
              <p class="t-cap">${esc(m.caption)}</p>
            </div>
          </article>`;
        })
        .join("");
      body = `<div class="plate-timeline">
        <h3 class="plate-headline">${typo(p.headline)}</h3>
        <div class="timeline-grid">${cells}</div>
      </div>`;
      plateExtras = floats
        .map(
          (ph) =>
            `<div class="plate-yt-float" data-yt="${esc(ph.youtube)}">${renderVideo({
              id: ph.youtube,
              poster: ph.poster || ph.src,
              posterW: ph.posterW,
              posterH: ph.posterH,
              titleEn: ph.titleEn,
              titleZh: ph.titleZh,
              source: ph.source || "yt",
              hideMeta: true
            })}</div>`
        )
        .join("");
    } else if (kind === "chapter-quote") {
      body = `<div class="plate-quote-row">
        <div class="plate-side-word left">${esc(p.leftWord || "")}</div>
        <div class="quote-main">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        ${p.chapter ? `<div class="plate-chapter">${esc(p.chapter)}</div>` : ""}
        <div class="plate-side-word right">${esc(p.rightWord || "")}</div>
      </div>`;
    } else if (kind === "chapter-art") {
      body = `<div class="plate-chapter-art">
        <div class="art-wrap">${figs(p.photos, idx)}</div>
        ${p.chapter ? `<div class="plate-chapter">${esc(p.chapter)}</div>` : ""}
        <h3 class="plate-headline">${typo(p.headline)}</h3>
      </div>`;
    } else if (kind === "invitations") {
      const items = (p.invites || [])
        .map(
          (it, i) => `<article class="invite-item">${plateFig(it, idx + "-i" + i)}<div class="label">${esc(it.left).replace(/Я/g, "<span class=\"cyr\">Я</span>")} <em>×</em> ${esc(it.right)}</div></article>`
        )
        .join("");
      body = `<div class="plate-invites">
        <div class="plate-kicker-line">${esc(p.kickerLine || "Invitations from film companies")}</div>
        <div class="invite-grid">${items}</div>
      </div>`;
    } else if (kind === "collaborations") {
      const items = (p.partners || [])
        .map(
          (it, i) => `<article class="collab-item">${plateFig(it, idx + "-c" + i)}<div class="label">JUNIE LAU <em>X</em> ${esc(it.partner)}</div></article>`
        )
        .join("");
      body = `<div class="plate-collab">
        <div class="collab-ghost" aria-hidden="true">JUNIE LAU</div>
        <div class="collab-name">JUNIE LAU</div>
        <img class="collab-x" src="assets/deco/collab-x.png" alt="">
        <img class="collab-scribble" src="assets/deco/collab-scribble.png" alt="">
        <img class="collab-spider" src="assets/deco/spider-collab.svg" alt="">
        <div class="collab-grid">${items}</div>
      </div>`;
    } else if (kind === "title") {

      const trailer = p.trailer || {};
      const keyArt = p.keyArt || (p.photos && p.photos[1]) || null;
      const trailerHtml = trailer.id
        ? renderVideo({
            id: trailer.id,
            poster: trailer.poster,
            posterW: trailer.posterW || 3200,
            posterH: trailer.posterH || 1800,
            titleEn: trailer.titleEn,
            titleZh: trailer.titleZh,
            source: trailer.source || "yt"
          })
        : (p.photos && p.photos[0] ? renderFig(Object.assign({ natural: true }, p.photos[0]), idx + "-a") : "");
      const keyHtml = keyArt
        ? renderFig(Object.assign({ natural: true }, keyArt), idx + "-key")
        : "";
      return `<article class="plate hero-title-plate" data-kind="title" data-highlight="${esc(p.highlight || "")}">
        <div class="hero-title-row">
          <div class="hero-trailer">${trailerHtml}</div>
          <div class="hero-key-wrap">${keyHtml}</div>
          <div class="hero-film-title">
            ${p.officialZh ? `<div class="plate-official-zh">${esc(p.officialZh)}</div>` : ""}
            ${p.wordmark ? `<div class="plate-wordmark red">${esc(p.wordmark)}</div>` : ""}
          </div>
        </div>
        ${plateCap(p)}
      </article>`;
    } else if (kind === "quotes") {
      const cells = (p.quotes || [])
        .map((q, i) => {
          return `<article class="quote-cell">${q.photo ? plateFig(q.photo, idx + "-q" + i) : ""}
            <div class="quote-copy">${quoteLogo(q.logo)}<blockquote>“${esc(q.text)}”<cite>── ${esc(q.cite)}</cite></blockquote></div>
          </article>`;
        })
        .join("");
      body = `<div class="quote-pair">${cells}</div>`;
    } else if (kind === "who") {
      const tags = (p.tags || [])
        .map(
          (t) =>
            `<span class="who-tag" style="left:${Number(t.x)}%;top:${Number(t.y)}%">${esc(t.label)}</span>`
        )
        .join("");
      const tp = p.titlePos || { x: 35.6, y: 42, w: 28.8 };
      body = `<div class="plate-who">
        <div class="who-stage">
          ${p.photo ? plateFig(p.photo, idx) : ""}
        </div>
        <div class="who-overlay">
          ${tags}
          <h3 class="plate-headline who-title" style="left:${Number(tp.x)}%;top:${Number(tp.y)}%;width:${Number(tp.w)}%">${typo(p.headline)}</h3>
        </div>
      </div>`;
    } else if (kind === "statement") {
      const side = p.photosLeft ? "photos-left" : "photos-right";
      const n = (p.photos || []).length;
      const photoCls = n === 1 ? " solo" : n >= 3 ? " trio" : "";
      body = `<div class="plate-statement ${side}">
        <div class="statement-copy">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        <div class="statement-photos${photoCls}">${figs(p.photos, idx)}</div>
      </div>`;
    } else if (kind === "media-table") {
      const eras = (p.eras || [])
        .map((e) => `<article class="era-card"><h3>${esc(e.name)}</h3><p>${esc(e.dates)}</p></article>`)
        .join("");
      body = `<div class="media-evo">
        <div class="media-evo-copy">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        ${p.wordmark ? `<div class="plate-wordmark red">${esc(p.wordmark)}</div>` : ""}
        <div class="media-evo-chart">
          ${figs(p.photos, idx)}
          <div class="era-row">${eras}</div>
        </div>
      </div>`;
    } else if (kind === "world-architect") {
      const cols = (p.columns || []).map((t) => `<p>${esc(t)}</p>`).join("");
      body = `<div class="plate-architect">
        <div class="plate-photos single">${figs(p.photos, idx)}</div>
        <div class="architect-copy">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        <div class="architect-cols">${cols}</div>
      </div>`;
    } else if (kind === "statement-ghost" && p.narrow) {
      return `<article class="plate plate-narrow-statement" data-kind="statement-ghost" data-highlight="${esc(p.highlight || "")}">
        ${plateChrome(p)}
        <div class="narrow-statement-body">
          <h3 class="plate-headline">${typo(p.headline)}</h3>
        </div>
        ${plateCap(p)}
      </article>`;
    } else {
      body = `<div class="plate-statement-ghost">
        <h3 class="plate-headline">${typo(p.headline)}</h3>
        ${p.sub ? `<p class="plate-sub">${esc(p.sub)}</p>` : ""}
        ${p.wordmark ? `<div class="plate-wordmark red">${esc(p.wordmark)}</div>` : ""}
        ${p.photos ? `<div class="plate-photos" style="margin-top:1rem">${figs(p.photos, idx)}</div>` : ""}
      </div>`;
    }
    return `<article class="plate" data-kind="${esc(kind)}" data-highlight="${esc(p.highlight || "")}">
      <div class="plate-lock">
        <div class="plate-design">
          ${plateChrome(p)}
          <div class="plate-body">${body}</div>
        </div>
      </div>
      ${plateExtras ? `<div class="plate-yt-floats">${plateExtras}</div>` : ""}
      ${plateCap(p)}
    </article>`;
  }

  function positionPlatePlayers() {
    $$(".plate-yt-float").forEach((floatEl) => {
      const id = floatEl.getAttribute("data-yt");
      const plate = floatEl.closest(".plate");
      if (!plate || !id) return;
      const hole = plate.querySelector('.timeline-yt-hole[data-yt-slot="' + id + '"]');
      if (!hole) return;
      const pr = plate.getBoundingClientRect();
      const hr = hole.getBoundingClientRect();
      floatEl.style.left = hr.left - pr.left + "px";
      floatEl.style.top = hr.top - pr.top + "px";
      floatEl.style.width = hr.width + "px";
      floatEl.style.height = hr.height + "px";
      if (plate.getAttribute("data-kind") === "timeline") {
        const btn = floatEl.querySelector(".playbtn");
        const lock = plate.querySelector(".plate-lock");
        if (btn && lock) {
          const lr = lock.getBoundingClientRect();
          btn.style.top = (lr.bottom - hr.top + 8) + "px";
          btn.style.left = "0px";
          btn.style.right = "auto";
          btn.style.bottom = "auto";
        }
      }
    });
  }

  function scalePlates() {
    $$(".plate-lock").forEach((lock) => {
      const design = lock.querySelector(".plate-design");
      if (!design) return;
      const w = lock.clientWidth;
      if (!w) return;
      const s = w / PLATE_W;
      design.style.transform = "scale(" + s + ")";
      lock.style.height = PLATE_H * s + "px";
    });
    positionPlatePlayers();
  }

  function renderCharacter(b, idxPrefix) {
    const fields = (b.fields || [])
      .map(
        (f) => `<div class="character-field">
        <div class="k">${textPair({ en: f.labelEn, zh: f.labelZh })}</div>
        ${rich({ en: f.en, zh: f.zh }, "v")}
      </div>`
      )
      .join("");
    const sheets = (b.sheets || [])
      .map((img, i) =>
        renderFig(Object.assign({ natural: true, sheet: true }, img), `${idxPrefix}-sheet-${i}`)
      )
      .join("");
    const expressions = (b.expressions || [])
      .map((img, i) =>
        renderFig(Object.assign({ natural: true, expression: true }, img), `${idxPrefix}-expr-${i}`)
      )
      .join("");
    const posters = (b.posters || [])
      .map((img, i) =>
        renderFig(Object.assign({ natural: true, poster: true }, img), `${idxPrefix}-poster-${i}`)
      )
      .join("");
    return `<section class="character">
      <h3 class="character-name">${textPair({ en: b.nameEn, zh: b.nameZh })}</h3>
      <div class="character-fields">${fields}</div>
      ${sheets ? `<div class="char-sheets">${sheets}</div>` : ""}
      ${expressions ? `<div class="char-expressions">${expressions}</div>` : ""}
      ${posters ? `<div class="char-posters">${posters}</div>` : ""}
    </section>`;
  }

  function renderCallout(b) {
    const kindLabel = (window.GM.ui.callouts && window.GM.ui.callouts[b.kind]) || {
      en: b.kind,
      zh: b.kind
    };
    return `<aside class="callout ${esc(b.kind)}" role="note">
      <div class="k">${textPair(kindLabel)}</div>
      ${rich(b, "para")}
    </aside>`;
  }

  function renderBlock(b, idxPrefix) {
    switch (b.type) {
      case "lede":
        return `<div class="mod">${rich(b, "lede")}</div>`;
      case "para":
        return `<div class="mod">${rich(b, "para")}</div>`;
      case "paras":
        return `<div class="mod">${(b.items || [])
          .map((p) => rich(p, "para"))
          .join("")}</div>`;
      case "images": {
        const cols = b.cols ? `cols-${b.cols}` : b.hero ? "hero-pair" : "cols-2";
        return `<div class="mod media-grid ${cols}">${(b.items || [])
          .map((img, i) => renderFig(img, `${idxPrefix}-img-${i}`))
          .join("")}</div>`;
      }
      case "slides":
        return `<div class="mod slide-stack">${(b.items || [])
          .map((img, i) => renderFig(Object.assign({ slide: true }, img), `${idxPrefix}-slide-${i}`))
          .join("")}</div>`;
      case "videos":
        return `<div class="mod video-grid">${(b.items || []).map(renderVideo).join("")}</div>`;
      case "links":
        return `<div class="mod">${renderLinks(b.items || [])}</div>`;
      case "plates":
        return `<div class="mod plate-stack">${(b.items || [])
          .map((pl, i) => renderPlate(pl, `${idxPrefix}-plate-${i}`))
          .join("")}</div>`;
      case "character":
        return renderCharacter(b, idxPrefix);
      case "callout":
        return renderCallout(b);
      case "compare":
        return `<div class="mod compare">${(b.items || [])
          .map(
            (it) => `<article>
            <div class="k">${textPair({ en: it.labelEn + (it.source ? " " + sourceMark(it.source, "en") : ""), zh: it.labelZh + (it.source ? " " + sourceMark(it.source, "zh") : "") })}</div>
            ${textPair({ en: it.en, zh: it.zh }, "para")}
          </article>`
          )
          .join("")}</div>`;
      case "names":
        return `<div class="mod name-grid">${(b.items || [])
          .map(
            (n) => `<article class="name-card">
            <h3>${textPair({en: n.titleEn, zh: n.titleZh})}</h3>
            ${n.variantsEn || n.variantsZh ? `<div class="variants">${textPair({ en: n.variantsEn || "", zh: n.variantsZh || "" })}</div>` : ""}
            ${rich(n, "para")}
          </article>`
          )
          .join("")}</div>`;
      case "steps":
        return `<div class="mod process">${(b.items || [])
          .map(
            (s, i) => `<section class="step" id="${esc(s.id || "step-" + i)}">
            <div class="chapter-kicker">${String(i + 1).padStart(2, "0")}</div>
            <h3>${textPair({en: s.titleEn, zh: s.titleZh})}</h3>
            ${(s.blocks || []).map((bb) => renderBlock(bb, s.id || "s" + i)).join("")}
          </section>`
          )
          .join("")}</div>`;
      case "tips":
        return `<div class="mod tip-grid">${(b.items || [])
          .map(
            (tip, i) => `<article class="tip">
            <div class="chapter-kicker">${String(i + 1).padStart(2, "0")} ${tip.draft ? textPair({en: sourceMark("draft","en"), zh: sourceMark("draft","zh")}) : tip.source ? textPair({en: sourceMark(tip.source,"en"), zh: sourceMark(tip.source,"zh")}) : ""}</div>
            <h3>${textPair({ en: tip.titleEn, zh: tip.titleZh })}</h3>
            ${rich({ en: tip.whyEn, zh: tip.whyZh }, "why")}
            ${rich({ en: tip.nextEn, zh: tip.nextZh }, "next")}
          </article>`
          )
          .join("")}</div>`;
      case "live-slot":
        return `<div class="mod live-slot">
          <div class="tag" style="font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:8px;">${textPair(window.GM.ui.liveTag)}</div>
          <div class="subh">${textPair(b.title)}</div>
          ${rich(b, "para")}
        </div>`;
      case "section":
        return `<section class="mod section-block">
          <div class="subh">${textPair(b.summary || b.title)}</div>
          <div class="section-body">${(b.blocks || []).map((bb, i) => renderBlock(bb, idxPrefix + "-s" + i)).join("")}</div>
        </section>`;
      case "details":
        return `<details class="fold">
          <summary>${textPair(b.summary)}</summary>
          <div class="fold-body">${(b.blocks || []).map((bb, i) => renderBlock(bb, idxPrefix + "-d" + i)).join("")}</div>
        </details>`;
      case "quote":
        return `<blockquote class="mod callout">${rich(b, "para")}${
          b.citeEn || b.citeZh
            ? `<div class="k" style="margin-top:8px">${textPair({ en: b.citeEn || "", zh: b.citeZh || "" })}</div>`
            : ""
        }</blockquote>`;
      case "html":
        return `<div class="mod">${b.html || ""}</div>`;
      default:
        return "";
    }
  }

  function renderChapter(ch, i, all) {
    const prev = all[i - 1];
    const next = all[i + 1];
    const ghost = ch.ghost || "";
    return `<section class="chapter" id="${esc(ch.id)}" data-idx="${i}">
      <div class="chapter-kicker"><img class="spider" src="assets/deco/spider.svg" alt="">${esc(ch.num)}
        <span class="en">${esc((window.GM.ui.chapterOf && window.GM.ui.chapterOf.en) || "Chapter")}</span>
        <span class="zh">${esc((window.GM.ui.chapterOf && window.GM.ui.chapterOf.zh) || "章节")}</span>
      </div>
      <h2 class="chapter-title">
        <span class="ghost" aria-hidden="true">${esc(ghost)}</span>
        <span class="t en">${esc(ch.titleEn)}</span>
        <span class="t zh">${esc(ch.titleZh)}</span>
      </h2>
      ${(ch.blocks || []).map((b, bi) => renderBlock(b, ch.id + "-" + bi)).join("")}
      <nav class="chap-nav">
        ${
          prev
            ? `<a href="#${esc(prev.id)}"><span class="dir">${textPair({en:"Previous", zh:"上一章"})}</span>${textPair({en: prev.titleEn, zh: prev.titleZh})}</a>`
            : "<span></span>"
        }
        ${
          next
            ? `<a class="next" href="#${esc(next.id)}"><span class="dir">${textPair({en:"Next", zh:"下一章"})}</span>${textPair({en: next.titleEn, zh: next.titleZh})}</a>`
            : "<span></span>"
        }
      </nav>
    </section>`;
  }

  function renderHero() {
    const h = window.GM.hero;
    return `<section class="hero" id="top">
      <div class="hero-title">
        <span class="ghost" aria-hidden="true">${esc(h.ghost || "金魚街")}</span>
        <h1>Goldfish Mayhem</h1>
        <div class="zh-film zh">${esc(h.titleZh)}</div>
      </div>
      ${h.lead ? rich(h.lead, "hero-lead") : ""}
      ${h.images ? renderBlock(h.images, "hero") : ""}
      ${h.videos ? renderBlock(h.videos, "hero-v") : ""}
      ${h.note ? `<div class="hero-note">${rich(h.note)}</div>` : ""}
    </section>`;
  }

  function renderSources() {
    const s = window.GM.sourceSection;
    const items = (window.GM.sourceList || [])
      .map((it) => `<li>${textPair({ en: it.en, zh: it.zh })}</li>`)
      .join("");
    return `<section class="sources-wrap" id="sources">
      <details class="fold">
        <summary>${textPair(s.summary)}</summary>
        <div class="fold-body">
          ${rich(s.intro, "para")}
          <ol class="source-list">${items}</ol>
        </div>
      </details>
    </section>
    <section class="end-band">
      <h2>${esc(s.endZh)}<em>JOIN US</em></h2>
      ${rich(s.endLead, "para")}
    </section>`;
  }

  function buildHeader() {
    const ui = window.GM.ui;
    const chapters = window.GM.chapters;
    const toc = chapters
      .map(
        (ch) => `<a href="#${esc(ch.id)}" data-id="${esc(ch.id)}">
        <span class="num">${esc(ch.num)}</span>
        <span class="lab en">${esc(ch.navEn || ch.titleEn)}</span>
        <span class="lab zh">${esc(ch.navZh || ch.titleZh)}</span>
      </a>`
      )
      .join("");
    $(".lang-switch").innerHTML = LANGS.map((k) => {
      const label = ui.langs[k];
      return `<button type="button" data-lang="${k}" aria-pressed="false">${esc(label.en)}</button>`;
    }).join("");
    $(".masthead .brand .zh-title").textContent = window.GM.hero.titleZh;
    $(".masthead .motto-mini .en").textContent = ui.motto.en;
    $(".masthead .motto-mini .zh").textContent = ui.motto.zh;
    $(".toc").innerHTML = toc;
  }

  function renderAll() {
    const main = $("#main");
    main.innerHTML =
      renderHero() +
      window.GM.chapters.map((ch, i) => renderChapter(ch, i, window.GM.chapters)).join("") +
      renderSources();
    $("#foot-credit").innerHTML = textPair(window.GM.ui.footer);
    bindMedia();
    scalePlates();
  }

  /* language */
  function currentMarker() {
    const header = $(".top").offsetHeight || 160;
    const y = window.scrollY + header + 20;
    const chapters = $$(".chapter, .hero, .sources-wrap");
    let found = chapters[0];
    for (const ch of chapters) {
      if (ch.offsetTop <= y) found = ch;
    }
    if (!found) return null;
    const rel = Math.max(0, Math.min(1, (y - found.offsetTop) / Math.max(1, found.offsetHeight)));
    return { id: found.id, rel };
  }

  function restoreMarker(m) {
    if (!m) return;
    const el = document.getElementById(m.id);
    if (!el) return;
    const header = $(".top").offsetHeight || 160;
    const y = el.offsetTop + m.rel * el.offsetHeight - header - 20;
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  }

  function setLang(lang, opts) {
    if (!LANGS.includes(lang)) lang = DEFAULT_LANG;
    const keep = opts && opts.keep !== false;
    const marker = keep ? currentMarker() : null;
    document.body.dataset.lang = lang;
    const htmlLang = lang === "zh" ? "zh-Hans" : "en";
    document.documentElement.lang = htmlLang;
    $$(".lang-switch button").forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try { sessionStorage.setItem("gm-lang", lang); } catch (e) {}
    if (keep) {
      requestAnimationFrame(() => restoreMarker(marker));
    }
    updateTitle();
  }

  function updateTitle() {
    const lang = document.body.dataset.lang;
    const zh = "金魚街大亂鬥";
    if (lang === "zh") document.title = zh + " — Junie Lau";
    else if (lang === "en") document.title = "Goldfish Mayhem — Junie Lau";
    else document.title = "Goldfish Mayhem / " + zh + " — Junie Lau";
  }

  /* scroll spy */
  function updateSpy() {
    const header = $(".top").offsetHeight || 160;
    const line = header + 120;
    let current = window.GM.chapters[0] && window.GM.chapters[0].id;
    let best = -Infinity;
    $$(".chapter").forEach((ch) => {
      const top = ch.getBoundingClientRect().top;
      if (top <= line && top >= best) {
        best = top;
        current = ch.id;
      }
    });
    $$(".toc a").forEach((a) => {
      a.classList.toggle("is-current", a.dataset.id === current);
    });
  }

  /* lightbox */
  let lbItems = [];
  let lbIndex = 0;

  function collectLightbox() {
    lbItems = $$("figure.fig[data-lb]").map((fig) => {
      const img = fig.querySelector("img");
      const capEn = fig.querySelector("figcaption .en");
      const capZh = fig.querySelector("figcaption .zh");
      return {
        src: fig.dataset.lb,
        alt: img ? img.alt : "",
        capEn: capEn ? capEn.textContent : "",
        capZh: capZh ? capZh.textContent : "",
        slide: fig.dataset.slide === "1"
      };
    });
  }

  function openLb(i) {
    collectLightbox();
    if (!lbItems.length) return;
    lbIndex = (i + lbItems.length) % lbItems.length;
    const item = lbItems[lbIndex];
    const box = $(".lb");
    box.classList.add("open");
    box.classList.toggle("slide-view", !!item.slide);
    box.setAttribute("aria-hidden", "false");
    $(".lb img").src = item.src;
    $(".lb img").alt = item.alt;
    $(".lb .cap").innerHTML = textPair({ en: item.capEn, zh: item.capZh });
    $(".lb .x").focus();
    document.body.style.overflow = "hidden";
  }

  function closeLb() {
    const box = $(".lb");
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    $(".lb img").src = "";
    document.body.style.overflow = "";
  }

  function bindMedia() {
    $$("figure.fig[data-lb]").forEach((fig, i) => {
      const open = () => {
        collectLightbox();
        const src = fig.dataset.lb;
        const idx = lbItems.findIndex((it) => it.src === src);
        openLb(idx < 0 ? i : idx);
      };
      fig.addEventListener("click", open);
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
    $$(".player .playbtn").forEach((btn) => {
      btn.addEventListener("click", () => loadPlayer(btn.closest(".player")));
    });
  }

  function loadPlayer(player) {
    if (!player || player.dataset.loaded) return;
    const id = player.dataset.yt;
    player.dataset.loaded = "1";
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(id) +
      "?autoplay=1&rel=0&modestbranding=1";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.title = "YouTube";
    player.innerHTML = "";
    player.appendChild(iframe);
  }

  function init() {
    if (!window.GM) {
      document.body.innerHTML = "<p>Missing js/content.js</p>";
      return;
    }
    buildHeader();
    renderAll();
    let lang = DEFAULT_LANG;
    try {
      const saved = sessionStorage.getItem("gm-lang");
      if (LANGS.includes(saved)) lang = saved;
    } catch (e) {}
    setLang(lang, { keep: false });

    $(".lang-switch").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (btn) setLang(btn.dataset.lang);
    });

    window.addEventListener("scroll", updateSpy, { passive: true });
    window.addEventListener("resize", () => {
      scalePlates();
      updateSpy();
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => scalePlates());
    }
    updateSpy();

    $(".lb .x").addEventListener("click", closeLb);
    $(".lb .prev").addEventListener("click", () => openLb(lbIndex - 1));
    $(".lb .next").addEventListener("click", () => openLb(lbIndex + 1));
    $(".lb").addEventListener("click", (e) => {
      if (e.target === $(".lb")) closeLb();
    });
    document.addEventListener("keydown", (e) => {
      if (!$(".lb.open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") openLb(lbIndex - 1);
      if (e.key === "ArrowRight") openLb(lbIndex + 1);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
