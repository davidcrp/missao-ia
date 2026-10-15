"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { upsellModal } from "@/content/site";
import { Btn, cx } from "./ui/Primitives";

/**
 * CTA for the basic plan. Instead of going straight to checkout it opens an
 * order-bump modal offering the upgrade; declining continues to the basic
 * checkout, so the original path is never blocked.
 */
export function BasicPlanCta({ href, label }: { href: string; label: string }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Escape to dismiss, and lock the page behind the modal.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cx(
          "flex w-full items-center justify-center gap-2.5 rounded-xl bg-action px-10 py-4",
          "text-lg font-extrabold text-white transition-[background-color,transform] duration-200",
          "hover:-translate-y-0.5 hover:bg-action-strong",
        )}
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-3"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="upsell-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[95dvh] w-full max-w-[380px] overflow-y-auto rounded-3xl bg-surface text-center shadow-card outline-none"
          >
            {/* header */}
            <div className="relative bg-brand px-6 pb-3.5 pt-4">
              <button
                type="button"
                onClick={close}
                aria-label={upsellModal.closeLabel}
                className="absolute right-3 top-3 grid size-7 place-items-center rounded-full text-lg text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              >
                ✕
              </button>

              <span
                aria-hidden
                className="mx-auto grid size-9 place-items-center rounded-xl bg-white/20 text-lg"
              >
                🎁
              </span>

              <h2
                id="upsell-title"
                className="mt-2.5 text-[15px] font-extrabold leading-snug text-white"
              >
                {upsellModal.title}
              </h2>
            </div>

            <div className="px-6 py-4">
              <p className="text-sm text-body">
                {upsellModal.excludedLabel.replace("NÃO INCLUI:", "")}
                <strong className="font-extrabold text-ink">NÃO INCLUI:</strong>
              </p>

              <ul className="mt-3 rounded-2xl bg-urgent-tint px-4 py-3 text-left">
                {upsellModal.excluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 py-0.5 text-[13px] font-semibold text-ink"
                  >
                    <span aria-hidden className="text-urgent">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-2xl border border-[#bbf7d0] bg-action-tint px-4 py-3">
                <p className="text-[13px] font-semibold text-body">
                  {upsellModal.offerLead}{" "}
                  <strong className="text-action-ink">{upsellModal.offerDelta}</strong>,{" "}
                  {upsellModal.offerTail}
                </p>
                <p className="text-lg font-black leading-tight text-action-ink">
                  {upsellModal.offerName}
                </p>
                <p className="text-xs text-muted">
                  de <s>{upsellModal.oldPrice}</s> por{" "}
                  <strong className="text-action-ink">{upsellModal.newPrice}</strong>{" "}
                  · {upsellModal.offerNote}
                </p>
              </div>

              <Btn href={upsellModal.acceptHref} block className="mt-3 py-3.5! text-sm leading-snug">
                {upsellModal.acceptCta}
              </Btn>

              <a
                href={href}
                className="mt-2 block rounded-xl border border-line px-4 py-2 text-xs font-semibold text-muted transition-colors hover:bg-surface-alt hover:text-body"
              >
                {upsellModal.declineCta}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
