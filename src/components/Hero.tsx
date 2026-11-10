import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  { lines: ["Live", "Online Classes"], icon: "monitor" },
  { lines: ["Kids &", "Adults"], icon: "people" },
  { lines: ["Flexible", "Timings"], icon: "globe" },
  { lines: ["Personalized", "Learning"], icon: "shield" },
] as const;

function FeatureIcon({ kind }: { kind: string }) {
  const cls = "h-[30px] w-[30px] shrink-0 text-navy";
  if (kind === "monitor")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={cls} aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    );
  if (kind === "people")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
        <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.2 0-6 1.1-6 3.5V19h12v-2.5C14 14.1 10.2 13 8 13zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 1.9 2 3.4V19h5v-2.5c0-2.4-3.8-3.5-6-3.5z" />
      </svg>
    );
  if (kind === "globe")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={cls} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.4 4.6-1.8 8-5.4 8-10.4V5.5L12 2zm-1.2 14.6-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
    </svg>
  );
}

/** Faint mosque skyline drawn along the bottom of the hero (reference motif). */
function Skyline() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 h-[120px] w-[52%] text-[#cfe1fa] max-[1023px]:hidden"
      viewBox="0 0 600 120"
      fill="currentColor"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 120V70h14V54c0-6 5-9 8-13 3 4 8 7 8 13v16h12v-9c0-4 3-6 5-9 2 3 5 5 5 9v9h10V58c0-14 9-24 15-30 6 6 15 16 15 30v40h14v-10c0-5 3-8 6-11 3 3 6 6 6 11v10h9V62c0-16 10-27 16-34 6 7 16 18 16 34v36h12v-8c0-4 3-7 6-9 3 2 6 5 6 9v8h10V66h14V54c0-6 5-9 8-13 3 4 8 7 8 13v12h14v54H312v-20c0-9 7-15 15-15s15 6 15 15v20H0zm430 0V68h12V56c0-5 4-8 7-11 3 3 7 6 7 11v12h10V46c0-13 8-22 14-28 6 6 14 15 14 28v22h10V56c0-5 4-8 7-11 3 3 7 6 7 11v12h10v52z" />
      <path d="M470 0c6 8 8 16 8 24h-16c0-8 2-16 8-24z" />
    </svg>
  );
}

/**
 * Hero — the client's approved design, reproduced:
 * italic serif intro line with the red swoosh under it, "One-to-One Online"
 * in navy and "Quran Classes" in red, the bold "Qualified • Caring •
 * Experienced Teachers" line, the four feature items on one row, and the
 * single red "Start Your Free Trial Today" pill. On the right, the same
 * photo with the blue + red arcs hugging its curved left edge.
 */
export default function Hero() {
  return (
    <section className="hero relative overflow-hidden">
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <Skyline />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-12 pt-8 lg:grid-cols-[1.04fr_1fr] lg:gap-5 lg:pb-14">
        <div className="relative z-10">
          <div className="relative inline-block max-w-full">
            <p className="hero-intro text-[1.28rem] leading-snug text-navyDark sm:text-[1.45rem]">
              Help Your Child Learn the Holy Quran from Home
            </p>
            {/* Red swoosh underline — exactly the reference's shape: thin at
                both ends, a soft even sag through the middle, and it stops
                short of the right edge of the line. */}
            <svg
              className="mt-1.5 block h-[15px] w-[86%]"
              viewBox="0 0 600 18"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 4 C 170 13.6, 400 14, 596 3.4 C 400 17, 170 16.4, 4 4 Z"
                fill="#e0231c"
              />
            </svg>
          </div>

          <h1 className="hero-headline hero-h1 mt-2 text-[clamp(2.4rem,5vw,4rem)] leading-[1.03] tracking-tight text-navy">
            <span className="whitespace-nowrap max-[1020px]:whitespace-normal">
              One-to-One Online
            </span>
            <span className="block text-brandRed">Quran Classes</span>
          </h1>

          <p className="mt-3 text-[1.18rem] font-extrabold text-navyDark">
            Qualified <span className="text-brandRed">•</span> Caring{" "}
            <span className="text-brandRed">•</span> Experienced Teachers
          </p>

          {/* Four features on ONE row at desktop widths (like the reference);
              they may wrap on mobile only. */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 lg:flex-nowrap lg:gap-x-0 xl:gap-x-0">
            {FEATURES.map((f) => (
              <li
                key={f.lines[1]}
                className="flex items-center gap-2 border-r border-[#c8d9f0] pr-3 text-[0.8rem] font-extrabold leading-tight text-navyDark last:border-r-0 last:pr-0 lg:pr-3.5 lg:text-[0.85rem]"
              >
                <FeatureIcon kind={f.icon} />
                <span>
                  <span className="block">{f.lines[0]}</span>
                  <span className="block">{f.lines[1]}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Link
              href="/contact"
              className="btn-trial inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-brandRed py-2 pl-7 pr-2 text-[1.05rem] text-white shadow-[0_12px_26px_rgba(224,35,28,0.32)] transition hover:bg-redDark"
            >
              Start Your Free Trial Today
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[1.05rem] text-brandRed"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Hero photo — no frame and no decorative lines: just the photo with
            its softly curved left edge, as requested. */}
        <div className="relative mx-auto w-[94%] max-w-[560px] justify-self-center lg:w-full lg:max-w-[600px] lg:justify-self-end">
          <div className="relative z-10 overflow-hidden rounded-[28px] shadow-cardLg lg:rounded-[34px] lg:rounded-l-[58px]">
            <Image
              src="/hero.jpg"
              alt="A boy and a girl wearing headphones, learning Quran one-to-one online on a laptop"
              width={1760}
              height={1408}
              className="aspect-[1760/1408] w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
