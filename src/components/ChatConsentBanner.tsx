"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "drhkat_chat_consent_v1";

type ConsentState = "unknown" | "accepted" | "declined";

function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unknown";
  const raw = window.localStorage.getItem(CONSENT_KEY);
  if (raw === "accepted" || raw === "declined") return raw;
  return "unknown";
}

function writeConsent(state: Exclude<ConsentState, "unknown">) {
  window.localStorage.setItem(CONSENT_KEY, state);
  window.dispatchEvent(new Event("drhkat:chat-consent"));
}

export function ChatConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>("unknown");
  const mounted = useMemo(() => true, []);

  useEffect(() => {
    if (!mounted) return;
    setConsent(readConsent());

    const onEvent = () => setConsent(readConsent());
    window.addEventListener("storage", onEvent);
    window.addEventListener("drhkat:chat-consent", onEvent);
    return () => {
      window.removeEventListener("storage", onEvent);
      window.removeEventListener("drhkat:chat-consent", onEvent);
    };
  }, [mounted]);

  if (consent !== "unknown") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Assistant virtuel</p>
          <p className="mt-1 leading-relaxed">
            Pour activer le chat, nous devons charger un service tiers (Botpress).
            Les reponses sont indicatives. Pour une demande officielle, utilisez{" "}
            <a className="font-semibold text-blue-700 hover:text-blue-800" href="mailto:info@drhkat.cd">
              info@drhkat.cd
            </a>
            .
          </p>
          <p className="mt-2 text-xs text-slate-500">
            En acceptant, vous autorisez le chargement de scripts externes.{" "}
            <Link className="underline hover:text-slate-900" href="/privacy-policy">
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            onClick={() => {
              writeConsent("declined");
              setConsent("declined");
            }}
          >
            Refuser
          </button>
          <button
            type="button"
            className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            onClick={() => {
              writeConsent("accepted");
              setConsent("accepted");
            }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

export function hasChatConsent(): boolean {
  return typeof window !== "undefined" && readConsent() === "accepted";
}
