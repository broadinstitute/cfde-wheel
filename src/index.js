import "./styles.css";

import { defineCfdeWheelElement } from "./custom-element.js";
import { initScriptBase } from "./utils/script-base.js";
import { CfdeWheelWidget } from "./widget.js";

let singleton = null;

function getSingleton() {
  if (!singleton) {
    singleton = new CfdeWheelWidget();
  }
  return singleton;
}

export function openCfdeWheel(options) {
  if (options) {
    singleton?.destroy();
    singleton = new CfdeWheelWidget(options);
  }
  return getSingleton().open();
}

export function closeCfdeWheel() {
  singleton?.close();
}

export function initCfdeWheel() {
  document.querySelectorAll("[data-cfde-wheel-trigger]").forEach((trigger) => {
    if (trigger.dataset.cfdeWheelBound === "true") return;
    trigger.dataset.cfdeWheelBound = "true";
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openCfdeWheel();
    });
  });
}

const api = {
  open: openCfdeWheel,
  close: closeCfdeWheel,
  init: initCfdeWheel,
  create(options) {
    return new CfdeWheelWidget(options);
  }
};

if (typeof window !== "undefined") {
  initScriptBase();
  window.CfdeWheel = api;
  defineCfdeWheelElement();
}

if (document.readyState !== "loading") {
  initCfdeWheel();
} else {
  document.addEventListener("DOMContentLoaded", initCfdeWheel, { once: true });
}
