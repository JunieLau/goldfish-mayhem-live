/* Goldfish Mayhem livestream site */
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
    const cls = ["pair", className].filter(Boolean).join(" ");
    return `<div class="${cls}"><div class="en">${obj.en || ""}</div><div class="zh">${obj.zh || ""}</div></div>`;
  }

  function rich(obj, extraClass) {
    if (!obj) return "";
    return textPair(
      {
        en: (obj.en || "") + (obj.source ? " " + sourceMark(obj.source, "en") : ""),
        zh: (obj.zh || "") + (obj.source ? " " + sourceMark(obj.source, "zh") : "")
      },
      extraClass
    );
  }

  function renderFig(img, i) {
    const cls = ["fig"];
    if (img.slide) cls.push("slide-plate");
    if (img.portrait) cls.push("portrait");
    if (img.contain) cls.push("contain");
    if (img.natural) cls.push("natural");
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
    const w = img.slide ? (img.w || 10000) : (img.w || 1600);
    const h = img.slide ? (img.h || 2200) : (img.h || 900);
    return `<figure class="${cls.join(" ")}" data-lb="${esc(img.src)}" data-slide="${img.slide ? "1" : ""}" data-idx="${i}" tabindex="0" role="button" aria-label="${alt}">
      <img src="${esc(img.src)}" alt="${alt}" width="${w}" height="${h}" loading="lazy">
      ${hint}
      <figcaption>${cap}</figcaption>
    </figure>`;
  }

  function renderVideo(v) {
    const titleEn = esc(v.titleEn);
    const titleZh = esc(v.titleZh);
    const playEn = (window.GM.ui.play && window.GM.ui.play.en) || "Play";
    const playZh = (window.GM.ui.play && window.GM.ui.play.zh) || "播放";
    return `<div class="video-item">
      <div class="player" data-yt="${esc(v.id)}">
        <img src="${esc(v.poster)}" alt="${titleEn}" width="1280" height="720">
        <button type="button" class="playbtn" aria-label="${playEn}">
          <span class="tri" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          <span class="plab"><span class="en">${esc(playEn)}</span><span class="zh">${esc(playZh)}</span></span>
        </button>
      </div>
      <div class="player-meta">
        <div>${textPair({ en: v.titleEn + (v.source ? " " + sourceMark(v.source, "en") : ""), zh: v.titleZh + (v.source ? " " + sourceMark(v.source, "zh") : "") })}</div>
        <a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
      </div>
    </div>`;
  }

  function renderLinks(links) {
    return `<div class="link-grid">${links
      .map(
        (l) => `<a class="link-card" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">
        <div class="k">${textPair({ en: l.kindEn || "Link", zh: l.kindZh || "链接" })}</div>
        <div class="t">${textPair({ en: l.labelEn, zh: l.labelZh })}</div>
        ${l.noteEn || l.noteZh ? `<div class="d">${textPair({ en: l.noteEn || "", zh: l.noteZh || "" })}</div>` : ""}
        <div class="go">${textPair({ en: "Open ↗", zh: "打开 ↗" })}</div>
      </a>`
      )
      .join("")}</div>`;
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
      case "prompts":
        return `<div class="mod prompt-grid">${(b.items || [])
          .map(
            (p) => `<article class="prompt">
            <div class="tag">${textPair(window.GM.ui.promptTag)}</div>
            <div class="subh">${textPair({ en: p.qEn, zh: p.qZh })}</div>
            ${p.noteEn || p.noteZh ? rich({ en: p.noteEn, zh: p.noteZh, source: p.source }, "para") : ""}
          </article>`
          )
          .join("")}</div>`;
      case "live-slot":
        return `<div class="mod live-slot">
          <div class="tag" style="font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:8px;">${textPair(window.GM.ui.liveTag)}</div>
          <div class="subh">${textPair(b.title)}</div>
          ${rich(b, "para")}
        </div>`;
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
      ${rich(h.lead, "hero-lead")}
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
    window.addEventListener("resize", updateSpy);
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
