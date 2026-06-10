import { getScriptBase } from "./script-base.js";

export function resolveAsset(path) {
  if (!path || typeof path !== "string") return "";

  if (/^(https?:)?\/\//i.test(path) || path.startsWith("/")) {
    return path;
  }

  const base = getScriptBase();
  if (!base) return path;

  const normalizedPath = path.replace(/^assets\//, "");
  const assetRoot = base.includes("/src/") ? "/assets/" : "../assets/";
  return new URL(`${assetRoot}${normalizedPath}`, base).href;
}
