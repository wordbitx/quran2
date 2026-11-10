import Link from "next/link";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TrustBand from "@/components/TrustBand";
import Steps from "@/components/Steps";
import FaqList from "@/components/FaqList";
import { ADDITIONAL_SPECIALITIES, COURSE_MAP, COURSES, FAQS } from "@/lib/data";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

// Where each "Why Families Choose Us" box links to — same order as
// ADDITIONAL_SPECIALITIES, existing pages only.
const SPECIALITY_HREFS = [
  "/courses", // Live One-to-One Online Classes
  "/teachers", // Qualified Male & Female Teachers
  "/courses", // Classes for Kids & Adults
  "/contact", // Flexible Class Timings
  "/courses/islamic-manners-ethics", // Islamic Manners & Ethics
  "/courses/six-kalimas", // Six Kalimas
  "/courses/selected-surah-memorization", // Selected Surah Memorization
  "/courses/basic-arabic-learning", // Basic Arabic Learning
  "/courses/quran-tafseer", // Quran Tafseer
  "/courses/seerah", // Seerah of Prophet Muhammad
  "/about", // Student Progress Monitoring
  "/contact", // 3-Day Absolutely FREE Trial Classes
];

// The 14 specialities in the EXACT order of the client's reference design —
// first row, then second row (7 × 2). Only the home-page grid uses this
// order; the /courses page keeps its own syllabus order.
const SPECIALITY_ORDER = [
  "quran-translation",
  "noorani-qaida",
  "masnoon-duas",
  "salah-namaz",
  "islamic-studies",
  "hifz-ul-quran",
  "tajweed",
  "quran-reading-nazra",
  "selected-surah-memorization",
  "six-kalimas",
  "basic-arabic-learning",
  "quran-tafseer",
  "seerah",
  "islamic-manners-ethics",
];

const HOME_SPECIALITIES = SPECIALITY_ORDER.map((slug) => COURSE_MAP[slug]).filter(
  Boolean,
);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Our Specialities — the 14 courses, in the reference's 7 × 2 grid */}
      <section className="specialities relative bg-[linear-gradient(180deg,#f4f9ff_0%,#eef6ff_100%)] pb-12 pt-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
            <span className="h-[2px] w-10 rounded-full bg-brandRed sm:w-24" aria-hidden="true" />
            <h2 className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#0a3a86,#0d4ba6)] px-7 py-2.5 text-xl font-extrabold text-white shadow-[0_8px_18px_rgba(11,61,145,0.25)] sm:text-[1.4rem]">
              Our Specialities
            </h2>
            <span className="h-[2px] w-10 rounded-full bg-brandRed sm:w-24" aria-hidden="true" />
          </div>
          <div className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-7">
            {HOME_SPECIALITIES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-extrabold text-white shadow-[0_10px_22px_rgba(11,61,145,0.22)] transition hover:bg-navy2"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Navy trust band with the red FREE-trial panel — sits directly under
          the 14 specialities, exactly like the reference design. */}
      <TrustBand />

      {/* Additional Specialities */}
      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">
              Why Families Choose Us
            </h2>
            <p className="mt-3 text-lg font-bold text-navy">Additional Specialities</p>
            <p className="mt-2 leading-relaxed text-muted">
              More than lessons — a complete, caring learning experience for every student,
              wherever in the world you live. Tap any box to open its page.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_SPECIALITIES.map((s, i) => (
              <Link
                key={s.title}
                href={SPECIALITY_HREFS[i] ?? "/courses"}
                className="group block rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(6,36,83,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <h3 className="text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[0.9rem] font-bold text-brandRed opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — 3 steps, reusing the existing Steps component
          (same copy as the About page: book the trial, meet the teacher,
          learn and track progress). */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">How It Works</h2>
            <p className="mt-2 text-lg font-bold text-navy">
              Start Learning in 3 Simple Steps
            </p>
          </div>
          <div className="mt-8">
            <Steps />
          </div>
        </div>
      </section>

      {/* Courses at a Glance — all 14 courses as quick links. */}
      <section className="bg-sky2 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">
              Courses at a Glance
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Every course is taught live, one-to-one, with proper Tajweed.
              Tap any course to open its page.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {COURSES.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="rounded-full border border-cardBorder bg-white px-5 py-2.5 font-bold text-navyDark shadow-[0_3px_12px_rgba(6,36,83,0.05)] transition hover:bg-navy hover:text-white"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview — 3 real FAQs from data.ts, nothing invented. */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">
              Common Questions
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Everything parents usually ask before the free trial classes.
            </p>
          </div>
          <div className="mt-8">
            <FaqList faqs={FAQS.slice(0, 3)} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faqs" className="font-bold text-brandRed hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold">
            Start Your 3-Day FREE Trial Today
          </h2>
          <p className="mt-3 text-[#d7e3f5]">
            Live one-to-one Quran classes for kids and adults — no cost for
            the first three days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brandRed px-7 py-3 font-extrabold text-white shadow-card transition hover:bg-redDark"
            >
              Book Your Free Trial →
            </Link>
            <a
              href={whatsappUrl(TRIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25d366] px-7 py-3 font-extrabold text-white transition hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-line py-6 text-center">
        <p className="px-4 text-[1.15rem] font-bold italic text-navyDark">
          Quran Light Institute — Spreading the Light of Quran Worldwide
        </p>
      </div>
    </>
  );
}
