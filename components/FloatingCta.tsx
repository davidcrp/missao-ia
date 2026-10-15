import { floatingCta } from "@/content/site";

/**
 * Pinned bottom-right shortcut to the pricing block.
 * Sits under the upsell modal (z-50) so it never overlaps it.
 */
export function FloatingCta() {
  return (
    <a
      href={floatingCta.href}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-action px-6 py-3.5 text-[15px] font-extrabold text-white shadow-[0_8px_24px_rgb(2_6_23/0.22)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-action-strong"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 shrink-0"
      >
        <circle cx="9" cy="20" r="1.6" />
        <circle cx="18" cy="20" r="1.6" />
        <path d="M2 3h2.6l2.2 11.2a1.8 1.8 0 0 0 1.8 1.4h8.5a1.8 1.8 0 0 0 1.8-1.4L21 7H5.2" />
      </svg>
      {floatingCta.label}
    </a>
  );
}
