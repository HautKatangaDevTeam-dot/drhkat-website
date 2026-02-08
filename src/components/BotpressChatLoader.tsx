"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { hasChatConsent } from "./ChatConsentBanner";

const INJECT_SRC = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
const BOT_SRC =
  "https://files.bpcontent.cloud/2025/05/23/15/20250523150619-0T8KL549.js";

function shouldDisableOnPath(pathname: string) {
  return pathname.startsWith("/privacy-policy") || pathname.startsWith("/terms-of-service");
}

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 640px)").matches;
}

function loadStylesheetOnce(href: string) {
  const id = "drhkat-botpress-overrides";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export function BotpressChatLoader() {
  const pathname = usePathname() ?? "/";
  const loadedRef = useRef(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (shouldDisableOnPath(pathname)) return;

    const refresh = () => setConsent(hasChatConsent());
    refresh();

    window.addEventListener("storage", refresh);
    window.addEventListener("drhkat:chat-consent", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("drhkat:chat-consent", refresh);
    };
  }, [pathname]);

  useEffect(() => {
    if (!consent) return;
    if (loadedRef.current) return;
    if (shouldDisableOnPath(pathname)) return;
    if (isMobile()) return; // do not load on mobile

    loadedRef.current = true;

    // Load after a small delay or user scroll, whichever happens first.
    let loaded = false;
    const triggerLoad = async () => {
      if (loaded) return;
      loaded = true;
      loadStylesheetOnce("/botpress-overrides.css");
      try {
        await loadScript(INJECT_SRC);
        await loadScript(BOT_SRC);
      } catch {
        // Silent failure: don't break the page if the third-party script fails.
      }
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      if (window.scrollY > 120) triggerLoad();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const t = window.setTimeout(triggerLoad, 4000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, [consent, pathname]);

  return null;
}

