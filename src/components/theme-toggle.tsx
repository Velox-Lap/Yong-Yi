"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "yongyi-theme";
const THEME_EVENT = "yongyi-theme-change";
const mediaQuery = "(prefers-color-scheme: dark)";

let inMemoryTheme: Theme | null = null;

function getThemeSnapshot(): Theme {
  if (inMemoryTheme) return inMemoryTheme;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // Storage may be unavailable; fall back to the system preference.
  }

  return window.matchMedia(mediaQuery).matches ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribe(onStoreChange: () => void): () => void {
  const media = window.matchMedia(mediaQuery);

  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === STORAGE_KEY) {
      inMemoryTheme = null;
      onStoreChange();
    }
  };

  window.addEventListener(THEME_EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener(THEME_EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", onStoreChange);
  };
}

function updateTheme(theme: Theme): void {
  inMemoryTheme = theme;

  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Keep the in-memory setting for this page if storage is unavailable.
  }

  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    updateTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      className="theme-button"
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
    </button>
  );
}