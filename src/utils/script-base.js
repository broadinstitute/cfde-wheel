let SCRIPT_BASE = "";

export function initScriptBase() {
  if (SCRIPT_BASE) return;

  if (document.currentScript?.src) {
    SCRIPT_BASE = document.currentScript.src.replace(/[^/]+$/, "");
    return;
  }

  try {
    if (import.meta.url) {
      SCRIPT_BASE = import.meta.url.replace(/[^/]+$/, "");
      return;
    }
  } catch {}

  const script = document.querySelector('script[src*="cfde-wheel"]');
  if (script?.src) {
    SCRIPT_BASE = script.src.replace(/[^/]+$/, "");
  }
}

export function getScriptBase() {
  return SCRIPT_BASE;
}
