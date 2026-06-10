import { CORE_ASSETS } from "./data.js";
import { openCfdeWheel } from "./index.js";
import { resolveAsset } from "./utils/resolve-asset.js";

const ELEMENT_TAG = "cfde-wheel";

class CfdeWheelElement extends HTMLElement {
  static get observedAttributes() {
    return ["size"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  handleClick(event) {
    event.preventDefault();
    openCfdeWheel();
  }

  getSize() {
    const raw = this.getAttribute("size");
    if (!raw) return null;
    return /^\d+$/.test(raw) ? `${raw}px` : raw;
  }

  render() {
    const size = this.getSize();
    const dimensionRule = size
      ? `width:${size};height:${size};`
      : "width:100%;height:100%;";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          ${dimensionRule}
          max-width: 100%;
          max-height: 100%;
          aspect-ratio: 1;
          vertical-align: middle;
        }

        button {
          width: 100%;
          height: 100%;
          min-width: 0;
          min-height: 0;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      </style>
      <button type="button" aria-label="Open CFDE wheel">
        <img src="${resolveAsset(CORE_ASSETS.launcherIcon)}" alt="CFDE wheel icon" />
      </button>
    `;

    this.shadowRoot.querySelector("button")?.addEventListener("click", this.handleClick);
  }
}

export function defineCfdeWheelElement() {
  if (!customElements.get(ELEMENT_TAG)) {
    customElements.define(ELEMENT_TAG, CfdeWheelElement);
  }
}
