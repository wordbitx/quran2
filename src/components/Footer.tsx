import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_TAGLINE, WHATSAPP_URL } from "@/lib/site";

const QUICK_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Teachers", "/teachers"],
  ["Testimonials", "/testimonials"],
  ["FAQs", "/faqs"],
  ["Contact", "/contact"],
] as const;

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[0.95rem] font-extrabold uppercase tracking-[1.5px] text-white">
      {children}
      <span className="mt-2 block h-[2px] w-9 rounded-full bg-gradient-to-r from-[#ff5a52] to-[#ff8a80]" aria-hidden="true" />
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="site relative overflow-hidden bg-[linear-gradient(180deg,#062a63_0%,#051f4a_55%,#041a3d_100%)] text-white">
      {/* premium top edge: a thin red → navy rule */}
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,#e0231c_0%,#ff7a70_18%,#1a5fc0_60%,#0b3d91_100%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-8 lg:grid-cols-4 lg:gap-10">
          {/* Brand lockup — same wordmark as the header, on the dark footer */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Quran Light Institute logo"
                width={640}
                height={640}
                className="h-[68px] w-[68px] shrink-0 rounded-full object-cover ring-2 ring-white/70 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              />
              <div className="wordmark leading-none">
                <p className="text-[1.55rem] font-extrabold leading-none tracking-tight">
                  <span className="text-white">Quran</span>{" "}
                  <span className="text-[#ff5f56]">Light</span>
                </p>
                <div className="mt-[6px] flex items-center gap-1.5">
                  <span className="flex flex-col gap-[3px]" aria-hidden="true">
                    <span className="h-[2px] w-4 rounded-full bg-[#ff5f56]" />
                    <span className="h-[2px] w-4 rounded-full bg-[#ff5f56]" />
                  </span>
                  <span className="text-[0.6rem] font-extrabold tracking-[4px] text-white/85">
                    INSTITUTE
                  </span>
                  <span className="flex flex-col gap-[3px]" aria-hidden="true">
                    <span className="h-[2px] w-4 rounded-full bg-[#ff5f56]" />
                    <span className="h-[2px] w-4 rounded-full bg-[#ff5f56]" />
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-[#bdd3f2]">
              {SITE_TAGLINE} — live one-to-one classes for kids &amp; adults,
              with qualified, caring and experienced male &amp; female teachers.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-[1.05rem] font-black leading-none text-white"
                aria-label="Facebook (link coming soon)"
                title="Facebook"
              >
                f
              </span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000] text-white"
                aria-label="YouTube (link coming soon)"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <Heading>Quick Links</Heading>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-[#bdd3f2] transition hover:text-white"
                  >
                    <span className="h-[3px] w-[3px] rounded-full bg-[#ff5f56] opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <Heading>Our Courses</Heading>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="group inline-flex items-center gap-1.5 text-[#bdd3f2] transition hover:text-white"
                  >
                    <span className="h-[3px] w-[3px] rounded-full bg-[#ff5f56] opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[0.82rem] font-bold text-white ring-1 ring-white/15 transition hover:bg-white/20"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <Heading>Contact Us</Heading>
            <ul className="mt-4 space-y-3 text-[0.92rem] text-[#bdd3f2]">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2.5 hover:text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                    </svg>
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 break-all hover:text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
                  </svg>
                </span>
                Online Classes Worldwide
              </li>
              <li className="pl-[38px] text-[0.85rem]">Flexible timings — your time zone</li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[0.85rem] font-extrabold text-white shadow-[0_8px_18px_rgba(37,211,102,0.28)] transition hover:brightness-110"
                >
                  Chat on WhatsApp
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-5 text-center">
          <p className="text-[1rem] font-bold italic text-white/90">
            Quran Light Institute — Spreading the Light of Quran Worldwide
          </p>
          <p className="text-xs text-white/45">
            © 2026 Quran Light Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
