import Link from "next/link";

const ITEMS = [
  {
    label: "Qualified Teachers",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px] shrink-0" aria-hidden="true">
        <path d="M12 1.8 3.6 5.4v5.2c0 4.8 3.5 8.6 8.4 10.4 4.9-1.8 8.4-5.6 8.4-10.4V5.4L12 1.8zm-1.3 14.6-3.4-3.4 1.5-1.5 1.9 1.9 4.4-4.4 1.5 1.5-5.9 5.9z" />
      </svg>
    ),
  },
  {
    label: "Classes for Kids & Adults",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px] shrink-0" aria-hidden="true">
        <path d="M9 11a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 9 11zm7.2.6a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zM9 12.8c-3.1 0-6.6 1.5-6.6 3.6v2.2h13.2v-2.2c0-2.1-3.5-3.6-6.6-3.6zm7.2.6c-.5 0-1 .1-1.5.2 1.2.9 1.9 2 1.9 3.2v1.8h5.4v-1.8c0-2-3-3.4-5.8-3.4z" />
      </svg>
    ),
  },
  {
    label: "Student Progress Monitoring",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px] shrink-0" aria-hidden="true">
        <path d="M3 20h18M6 20v-5M11 20V9M16 20v-7M21 20V5" />
      </svg>
    ),
  },
];

/**
 * Navy trust band with the red FREE-trial panel — directly under the 14
 * specialities, as in the client's reference design.
 */
export default function TrustBand() {
  return (
    <section className="trust-band bg-[linear-gradient(90deg,#062a63_0%,#0b3d91_52%,#0a3480_100%)]">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch lg:flex-row lg:items-stretch">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-white sm:gap-x-8">
          {ITEMS.map((t, i) => (
            <span key={t.label} className="flex items-center gap-2.5">
              {i > 0 && (
                <span className="mr-3 hidden h-7 w-px bg-white/25 sm:block" aria-hidden="true" />
              )}
              <span className="flex items-center gap-2.5">
                {t.icon}
                <span className="text-[0.95rem] font-extrabold leading-tight">{t.label}</span>
              </span>
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-3 bg-brandRed px-6 py-4 text-white transition hover:bg-redDark lg:px-9 lg:[clip-path:polygon(5%_0,100%_0,100%_100%,0_100%)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-9 w-9 shrink-0" aria-hidden="true">
            <path d="M12 21s-7.5-4.7-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1.1 4.5 2.6l1 1.4 1-1.4C14 6.1 15.5 5 17.5 5 21 5 23 8.5 21.5 12c-2 4.3-9.5 9-9.5 9z" />
          </svg>
          <span className="text-left text-[1.1rem] font-extrabold leading-tight sm:text-[1.2rem]">
            3-Day Absolutely
            <br />
            FREE Trial Classes
          </span>
        </Link>
      </div>
    </section>
  );
}
