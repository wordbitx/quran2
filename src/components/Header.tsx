"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COURSES } from "@/lib/data";
import { SITE_TAGLINE } from "@/lib/site";
import TrialModal from "@/components/TrialModal";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teachers", href: "/teachers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLink = (active: boolean) =>
    `relative rounded-xl px-3 py-2 text-[1rem] font-extrabold transition ${
      active
        ? "bg-brandRed text-white shadow-[0_8px_18px_rgba(224,35,28,0.28)]"
        : "text-navyDark hover:text-brandRed"
    }`;

  // Header is intentionally NOT sticky: the circular logo is deliberately
  // oversized and overflows the bar top (into the top bar) and bottom (into
  // the hero), like the reference — a sticky header would clip it.
  return (
    <header className="site relative z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-[84px] max-w-7xl items-center gap-2 px-3 sm:h-[92px] sm:gap-3 sm:px-4 lg:h-[96px] xl:h-[104px]">
        <Link
          href="/"
          className="brand relative flex items-center gap-2 sm:gap-3"
          aria-label="Quran Light Institute — home"
        >
          {/* White disc that carries the overhanging logo over the dark top
              bar — exactly the reference's white circle around the logo. */}
          <span
            className="pointer-events-none absolute -left-[8px] top-1/2 h-[100px] w-[100px] -translate-y-1/2 rounded-full bg-white sm:-left-[12px] sm:h-[120px] sm:w-[120px] lg:h-[134px] lg:w-[134px] xl:h-[150px] xl:w-[150px]"
            aria-hidden="true"
          />
          <span className="logo-shine relative z-10 block h-[84px] w-[84px] shrink-0 rounded-full ring-[3px] ring-white drop-shadow-[0_6px_14px_rgba(6,36,83,0.22)] sm:h-[100px] sm:w-[100px] lg:h-[110px] lg:w-[110px] xl:h-[126px] xl:w-[126px]">
            <Image
              src="/logo.jpg"
              alt="Quran Light Institute logo"
              width={640}
              height={640}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </span>

          <span className="wordmark relative z-10 leading-none">
            <span className="block text-[1.22rem] font-extrabold leading-none tracking-tight sm:text-[1.55rem] lg:text-[2rem] xl:text-[2.3rem]">
              <span className="text-[#0b3b8f]">Quran</span>{" "}
              <span className="text-[#c8102e]">Light</span>
            </span>
            <span className="mt-[6px] flex items-center gap-1.5 sm:mt-[7px] sm:gap-2">
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="h-[2px] w-2.5 rounded-full bg-brandRed sm:w-5 lg:w-9" />
                <span className="h-[2px] w-2.5 rounded-full bg-brandRed sm:w-5 lg:w-9" />
              </span>
              <span className="text-[0.62rem] font-extrabold tracking-[2.6px] text-navy sm:text-[0.86rem] sm:tracking-[5px] lg:text-[1.02rem] lg:tracking-[7px]">
                INSTITUTE
              </span>
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="h-[2px] w-2.5 rounded-full bg-brandRed sm:w-5 lg:w-9" />
                <span className="h-[2px] w-2.5 rounded-full bg-brandRed sm:w-5 lg:w-9" />
              </span>
            </span>
            <span className="tagline-ribbon mt-[6px] inline-block px-2.5 py-[3px] text-[0.57rem] font-bold text-white sm:mt-[8px] sm:px-3 sm:py-[3px] sm:text-[0.7rem] lg:mt-[9px] lg:px-4 lg:text-[0.82rem]">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        {/* Thin vertical rule between the wordmark and the navigation */}
        <span
          className="mx-1 hidden h-12 w-px shrink-0 bg-line xl:block"
          aria-hidden="true"
        />

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="h-6 w-6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav className="main ml-auto hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {NAV.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={navLink(isActive(item.href))}>
              {item.label}
            </Link>
          ))}
          {/* Courses dropdown — desktop opens on hover, chevron toggles on click */}
          <div
            className="group relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <div className="flex items-center">
              <Link href="/courses" className={`${navLink(isActive("/courses"))} pr-1`}>
                Courses
              </Link>
              <button
                type="button"
                aria-label="Open courses menu"
                aria-expanded={coursesOpen}
                onClick={() => setCoursesOpen((v) => !v)}
                className={`-ml-1 rounded-lg p-1 transition ${
                  isActive("/courses") ? "text-white" : "text-navyDark hover:text-brandRed"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div
              className={`absolute left-0 top-full z-50 w-72 rounded-2xl border border-cardBorder bg-white p-2 shadow-cardLg ${
                coursesOpen ? "block" : "hidden"
              } group-hover:block`}
            >
              {COURSES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className="block rounded-xl px-3 py-2 text-[0.92rem] font-semibold text-navyDark hover:bg-sky"
                  onClick={() => setCoursesOpen(false)}
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/courses"
                className="mt-1 block rounded-xl bg-navy px-3 py-2 text-[0.92rem] font-bold text-white"
              >
                View All Courses →
              </Link>
            </div>
          </div>
          {NAV.slice(2).map((item) => (
            <Link key={item.href} href={item.href} className={navLink(isActive(item.href))}>
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setTrialOpen(true)}
            className="btn-trial ml-3 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brandRed py-1.5 pl-5 pr-1.5 text-[0.95rem] font-extrabold text-white shadow-[0_10px_22px_rgba(224,35,28,0.32)] transition hover:bg-redDark"
          >
            3-Day FREE Trial
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[1rem] text-brandRed"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2.5 font-bold ${
                  isActive(item.href) ? "bg-brandRed text-white" : "text-navyDark hover:bg-sky"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="flex items-center justify-between rounded-xl px-3 py-2.5 font-bold text-navyDark hover:bg-sky"
              aria-expanded={coursesOpen}
              onClick={() => setCoursesOpen((v) => !v)}
            >
              Courses
              <span aria-hidden="true">{coursesOpen ? "▲" : "▼"}</span>
            </button>
            {coursesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l-2 border-line pl-3">
                {COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-[0.92rem] font-semibold text-navyDark hover:bg-sky"
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  href="/courses"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-[0.92rem] font-bold text-navy"
                >
                  View All Courses →
                </Link>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTrialOpen(true);
              }}
              className="btn-trial mt-2 whitespace-nowrap rounded-full bg-brandRed px-5 py-3 text-center font-extrabold text-white"
            >
              3-Day FREE Trial →
            </button>
          </div>
        </nav>
      )}

      {/* Header free-trial popup — opens on the same page, never navigates. */}
      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} courseName="" />
    </header>
  );
}
