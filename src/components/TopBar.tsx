import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

/**
 * Top bar — laid out like the client's reference design: slim dark-navy bar,
 * contact details on the left (envelope + email · green WhatsApp badge +
 * official number) and the social icons on the right.
 *
 * Official number is +92 305 6622104 — NEVER the +92 300 123 0104 shown in
 * the client's design image (that number is not official).
 *
 * The circular logo above the header overflows this bar, so the left side is
 * padded to clear it on desktop (the white disc is painted by the Header).
 *
 * NOTE: the institute's Facebook / YouTube profile URLs were never supplied,
 * so those two icons are display-only (spans, no href) until the client
 * shares the real links — no URL is invented. WhatsApp links to the official
 * wa.me number.
 */
export default function TopBar() {
  return (
    <div className="topbar relative z-20 bg-[linear-gradient(90deg,#052a63_0%,#0b3d91_45%,#0a3480_100%)] text-white">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex min-h-[46px] flex-wrap items-center gap-x-3 gap-y-1 py-1.5 text-[0.85rem] font-bold max-[640px]:justify-center max-[640px]:gap-x-2 max-[640px]:text-[0.76rem] lg:flex-nowrap lg:pl-[184px]">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 whitespace-nowrap transition hover:text-[#cfe0ff]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px] shrink-0" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="max-[640px]:hidden">{EMAIL}</span>
          </a>

          <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden="true" />

          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="hidden min-[641px]:inline">Contact:</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#25d366] text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[12px] w-[12px]" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
              </svg>
            </a>
            <a href={PHONE_TEL} className="transition hover:text-[#cfe0ff]">
              {PHONE_DISPLAY}
            </a>
          </span>

          <span className="ml-auto hidden items-center gap-2.5 md:flex">
            <span className="text-white/85">Follow Us:</span>
            <span
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#1877f2] text-[1rem] font-black leading-none text-white shadow-[0_2px_6px_rgba(0,0,0,.25)]"
              aria-label="Facebook (link coming soon)"
              title="Facebook"
            >
              f
            </span>
            <span
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#ff0000] text-white shadow-[0_2px_6px_rgba(0,0,0,.25)]"
              aria-label="YouTube (link coming soon)"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_2px_6px_rgba(0,0,0,.25)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
