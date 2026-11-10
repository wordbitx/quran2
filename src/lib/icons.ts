// Course / speciality icons.
//
// The SHAPES are established free library icons — nothing redrawn by hand.
// The FINISH is what the site adds: every icon is painted with a premium
// three-layer treatment, like the client's reference artwork —
//   1. a bright-to-deep blue gradient body,
//   2. a soft white gloss across the top half,
//   3. a subtle dark inner shade along the bottom edge,
// plus the red accents of the reference (bookmark ribbons) on top.
//
// Sources (all free licences):
// - Font Awesome Free 6.7.2 (CC BY 4.0): book-open, mosque, graduation-cap,
//   book-bookmark, handshake — https://fontawesome.com
// - Material Design Icons / @mdi/js (Pictogrammers, Apache 2.0):
//   book-open-variant (Hifz), mosque (Quran Tafseer), hands-pray (Masnoon
//   Duas) — https://pictogrammers.com/library/mdi/
// - Arabic calligraphy: vector <text> in Aref Ruqaa / Amiri (Tajweed,
//   Basic Arabic عربي, Seerah محمد ﷺ).
// - Noorani Qaida: the reference's own "A + Arabic letter tiles" badge.
// - Six Kalimas: big white "6" in a blue circle, as in the reference.
//
// Every icon carries its own <defs> with UNIQUE gradient ids, so several of
// them can sit on one page without their gradients colliding.

const RED = "#e0231c";
const WHITE = "#ffffff";

/** Decorative calligraphy for the three Arabic icons (Nastaliq, as asked). */
const NASTALIQ_FONT =
  "'Noto Nastaliq Urdu','Aref Ruqaa','Amiri','Noto Naskh Arabic','Segoe UI',serif";
const ARABIC_FONT =
  "'Aref Ruqaa','Amiri','Noto Naskh Arabic','Traditional Arabic','Segoe UI',serif";

/**
 * Build one icon: `shapes` is painted three times (body gradient, top gloss,
 * bottom shade) and `extras` (red accents, white lettering) sits on top.
 */
function icon(uid: string, shapes: string, extras = "", vb = "0 0 64 64"): string {
  const b = `${uid}b`;
  const s = `${uid}s`;
  return `<svg viewBox="${vb}" aria-hidden="true"><defs><linearGradient id="${b}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#4aa4f6"/><stop offset="0.45" stop-color="#1a6fdc"/><stop offset="0.74" stop-color="#1256bd"/><stop offset="1" stop-color="#0b3d91"/></linearGradient><linearGradient id="${s}" x1="0.1" y1="0" x2="0.55" y2="1"><stop offset="0" stop-color="${WHITE}" stop-opacity="0.46"/><stop offset="0.4" stop-color="${WHITE}" stop-opacity="0.1"/><stop offset="0.5" stop-color="${WHITE}" stop-opacity="0"/><stop offset="0.8" stop-color="#04122e" stop-opacity="0"/><stop offset="1" stop-color="#04122e" stop-opacity="0.22"/></linearGradient></defs><g fill="url(#${b})">${shapes}</g><g fill="url(#${s})">${shapes}</g>${extras}</svg>`;
}

// ---------------------------------------------------------------- paths ----

/** Font Awesome Free 6.7.2 — solid "book-open" (viewBox 0 0 576 512). */
const P_BOOK_OPEN = `M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z`;

/** Font Awesome Free 6.7.2 — solid "mosque" (viewBox 0 0 640 512). */
const P_MOSQUE = `M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5c0 0 0 0 0 0s0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4l-356.4 0c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6c0 0 0 0 0 0s0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512l0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-48 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l416 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-58c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454l0 58-64 0zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126l0 2L0 128l0-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160l160 0 0 136.6c-19.1 11.1-32 31.7-32 55.4l0 128c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2l-64 0c-26.5 0-48-21.5-48-48L0 176l0-16z`;

/** Font Awesome Free 6.7.2 — solid "graduation-cap" (viewBox 0 0 640 512). */
const P_GRAD_CAP = `M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z`;

/** Font Awesome Free 6.7.2 — solid "book-bookmark" (viewBox 0 0 448 512). */
const P_BOOK_BOOKMARK = `M0 96C0 43 43 0 96 0l96 0 0 190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5L352 0l32 0 32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32z`;

/** Font Awesome Free 6.7.2 — solid "handshake" (viewBox 0 0 640 512). */
const P_HANDSHAKE = `M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z`;

/** Material Design Icons — "book-open-variant" (0 0 24 24). */
const P_BOOK_OPEN_VARIANT = `M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z`;

/** Material Design Icons — "hands-pray" (0 0 24 24). */
const P_HANDS_PRAY = `M11.43 9.67C11.47 9.78 11.5 9.88 11.5 10V15.22C11.5 15.72 11.31 16.2 10.97 16.57L8.18 19.62L4.78 16.22L6 15L8.8 2.86C8.92 2.36 9.37 2 9.89 2C10.5 2 11 2.5 11 3.11V8.07C10.84 8.03 10.67 8 10.5 8C9.4 8 8.5 8.9 8.5 10V13C8.5 13.28 8.72 13.5 9 13.5S9.5 13.28 9.5 13V10C9.5 9.45 9.95 9 10.5 9C10.69 9 10.85 9.07 11 9.16C11.12 9.23 11.21 9.32 11.3 9.42C11.33 9.46 11.36 9.5 11.38 9.55C11.4 9.59 11.42 9.63 11.43 9.67M2 19L6 22L7.17 20.73L3.72 17.28L2 19M18 15L15.2 2.86C15.08 2.36 14.63 2 14.11 2C13.5 2 13 2.5 13 3.11V8.07C13.16 8.03 13.33 8 13.5 8C14.6 8 15.5 8.9 15.5 10V13C15.5 13.28 15.28 13.5 15 13.5S14.5 13.28 14.5 13V10C14.5 9.45 14.05 9 13.5 9C13.31 9 13.15 9.07 13 9.16C12.88 9.23 12.79 9.32 12.71 9.42C12.68 9.46 12.64 9.5 12.62 9.55C12.6 9.59 12.58 9.63 12.57 9.67C12.53 9.78 12.5 9.88 12.5 10V15.22C12.5 15.72 12.69 16.2 13.03 16.57L15.82 19.62L19.22 16.22L18 15M20.28 17.28L16.83 20.73L18 22L22 19L20.28 17.28Z`;

/** Material Design Icons — "mosque" (0 0 24 24). */
const P_MOSQUE_SKYLINE = `M7 8H17C17.3 8 17.6 8.1 17.8 8.1C17.9 7.8 18 7.4 18 7.1C18 5.8 17.4 4.6 16.3 3.9L12 1L7.7 3.8C6.7 4.6 6 5.8 6 7.1C6 7.5 6.1 7.8 6.2 8.1C6.4 8.1 6.7 8 7 8M24 7C24 5.9 22 4 22 4S20 5.9 20 7C20 7.7 20.4 8.4 21 8.7V13H19V11C19 9.9 18.1 9 17 9H7C5.9 9 5 9.9 5 11V13H3V8.7C3.6 8.4 4 7.7 4 7C4 5.9 2 4 2 4S0 5.9 0 7C0 7.7 .4 8.4 1 8.7V21H10V17C10 15.9 10.9 15 12 15S14 15.9 14 17V21H23V8.7C23.6 8.4 24 7.7 24 7Z`;

// ---------------------------------------------------------------- icons ----

/** Quran Translation — open book (FA book-open). */
const BOOK_OPEN = icon("qlBookOpen", `<path d="${P_BOOK_OPEN}"/>`, "", "0 0 576 512");

/** Quran Reading (Nazra) — open book with the red bookmark ribbons. */
const BOOK_OPEN_RIBBON = icon(
  "qlNazraOpen",
  `<path d="${P_BOOK_OPEN}"/>`,
  `<path d="M276 452h24v56l-12-11-12 11z" fill="${RED}"/><path d="M132 452h18v44l-9-8-9 8z" fill="${RED}"/><path d="M426 452h18v44l-9-8-9 8z" fill="${RED}"/>`,
  "0 0 576 512",
);

/** Noorani Qaida — the reference's "A" over two Arabic letter tiles. */
const QAIDA_BADGE = icon(
  "qlQaida",
  `<rect x="20" y="3" width="24" height="24" rx="7"/><rect x="7" y="31" width="24" height="24" rx="7"/><rect x="33" y="31" width="24" height="24" rx="7"/>`,
  `<text x="32" y="16" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="800" fill="${WHITE}">A</text><text x="19" y="43" text-anchor="middle" dominant-baseline="central" font-family="${ARABIC_FONT}" font-size="17" font-weight="700" fill="${WHITE}">أ</text><text x="45" y="43" text-anchor="middle" dominant-baseline="central" font-family="${ARABIC_FONT}" font-size="17" font-weight="700" fill="${WHITE}">ب</text>`,
);

/** Masnoon Duas — two raised praying hands (MDI hands-pray). */
const HANDS_PRAY = icon("qlHands", `<path d="${P_HANDS_PRAY}"/>`, "", "0 0 24 24");

/** Salah (Namaz) — mosque with dome and arches (FA mosque). */
const MOSQUE = icon("qlMosque", `<path d="${P_MOSQUE}"/>`, "", "0 0 640 512");

/** Islamic Studies — graduation cap (FA graduation-cap). */
const GRAD_CAP = icon("qlGrad", `<path d="${P_GRAD_CAP}"/>`, "", "0 0 640 512");

/** Hifz-ul-Quran — open book with page lines (MDI book-open-variant). */
const BOOK_OPEN_VARIANT = icon(
  "qlHifz",
  `<path d="${P_BOOK_OPEN_VARIANT}"/>`,
  "",
  "0 0 24 24",
);

/** Tajweed — Arabic calligraphy in Nastaliq. */
const TAJWEED_TEXT = icon(
  "qlTajweed",
  `<text x="32" y="42" text-anchor="middle" font-size="19" font-weight="700" font-family="${NASTALIQ_FONT}">تجويد</text>`,
);

/** Selected Surah Memorization — closed book with a red bookmark. */
const BOOK_BOOKMARK = icon(
  "qlSurah",
  `<path d="${P_BOOK_BOOKMARK}"/>`,
  `<path d="M212 436h24v58l-12-11-12 11z" fill="${RED}"/>`,
  "0 0 448 512",
);

/** Six Kalimas — big white "6" in a blue circle. */
const SIX_KALIMAS = icon(
  "qlSix",
  `<circle cx="32" cy="32" r="27"/>`,
  `<text x="32" y="46" text-anchor="middle" font-size="38" font-weight="800" fill="${WHITE}" font-family="Arial,Helvetica,sans-serif">6</text>`,
);

/** Basic Arabic Learning — Arabic calligraphy in Nastaliq (عربي). */
const ARABIC_TEXT = icon(
  "qlArabic",
  `<text x="32" y="42" text-anchor="middle" font-size="19" font-weight="700" font-family="${NASTALIQ_FONT}">عربي</text>`,
);

/** Quran Tafseer — mosque with dome and two minarets (MDI mosque). */
const MOSQUE_SKYLINE = icon(
  "qlTafseer",
  `<path d="${P_MOSQUE_SKYLINE}"/>`,
  "",
  "0 0 24 24",
);

/** Seerah of Prophet Muhammad ﷺ — Arabic calligraphy in Nastaliq. */
const SEERAH_TEXT = icon(
  "qlSeerah",
  `<text x="32" y="42" text-anchor="middle" font-size="17" font-weight="700" font-family="${NASTALIQ_FONT}">محمد ﷺ</text>`,
);

/** Islamic Manners & Ethics — handshake (FA handshake). */
const HANDSHAKE = icon("qlManners", `<path d="${P_HANDSHAKE}"/>`, "", "0 0 640 512");

/** Icon SVG by course slug. Every slug has an entry — no fallback needed. */
export const COURSE_ICONS: Record<string, string> = {
  "quran-translation": BOOK_OPEN, // Font Awesome — book-open
  "noorani-qaida": QAIDA_BADGE, // reference "A + Arabic letter tiles" badge
  "masnoon-duas": HANDS_PRAY, // MDI — hands-pray
  "salah-namaz": MOSQUE, // Font Awesome — mosque
  "islamic-studies": GRAD_CAP, // Font Awesome — graduation-cap
  "hifz-ul-quran": BOOK_OPEN_VARIANT, // MDI — book-open-variant
  tajweed: TAJWEED_TEXT, // Arabic calligraphy text
  "quran-reading-nazra": BOOK_OPEN_RIBBON, // open book + red ribbons
  "selected-surah-memorization": BOOK_BOOKMARK, // Font Awesome — book-bookmark
  "six-kalimas": SIX_KALIMAS, // big "6" in a blue circle
  "basic-arabic-learning": ARABIC_TEXT, // Arabic calligraphy text
  "quran-tafseer": MOSQUE_SKYLINE, // MDI — mosque
  seerah: SEERAH_TEXT, // Arabic calligraphy text
  "islamic-manners-ethics": HANDSHAKE, // Font Awesome — handshake
};

/** Resolve the icon HTML for a course (override first, original icon as fallback). */
export function courseIcon(slug: string, fallback: string): string {
  return COURSE_ICONS[slug] ?? fallback;
}
