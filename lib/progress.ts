"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "htdg.progress.v1";
const CHANGE_EVENT = "htdg-progress-change";

function readStore(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed.filter((k) => typeof k === "string") : []);
  } catch {
    return new Set();
  }
}

let cache: Set<string> | null = null;
let cacheJson = "";

function getSnapshot(): Set<string> {
  const raw = typeof window === "undefined" ? "" : window.localStorage.getItem(STORAGE_KEY) ?? "";
  if (cache === null || raw !== cacheJson) {
    cacheJson = raw;
    cache = readStore();
  }
  return cache;
}

const EMPTY = new Set<string>();
function getServerSnapshot(): Set<string> {
  return EMPTY;
}

function subscribe(onChange: () => void): () => void {
  const handler = () => onChange();
  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function write(next: Set<string>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Reactive set of completed section keys, shared across all components. */
export function useProgress() {
  const done = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback((key: string) => {
    const next = new Set(getSnapshot());
    if (next.has(key)) next.delete(key);
    else next.add(key);
    write(next);
  }, []);

  const resetAll = useCallback(() => {
    write(new Set());
  }, []);

  const countDone = useCallback(
    (keys: string[]) => keys.reduce((n, k) => n + (done.has(k) ? 1 : 0), 0),
    [done]
  );

  return { done, toggle, resetAll, countDone };
}
