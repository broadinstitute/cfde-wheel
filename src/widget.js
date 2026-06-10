import { CORE_ASSETS, DEFAULT_CENTERS, DEFAULT_DCCS } from "./data.js";
import { resolveAsset } from "./utils/resolve-asset.js";

const DEFAULT_OPTIONS = {
  dccs: DEFAULT_DCCS,
  centers: DEFAULT_CENTERS,
  target: document.body,
  closeOnEscape: true
};

const SVG_CENTER_X = 191;
const SVG_CENTER_Y = 183;
const RING_RADIUS = 150;
const CIRCLE_SIZE = 35;
const ICON_SIZE = 30;

function sanitizeUrl(url) {
  if (typeof url !== "string") return "";
  const value = url.trim();
  if (!value) return "";
  const normalized = value.replace(/[\u0000-\u001F\u007F\s]+/g, "").toLowerCase();
  if (/^(javascript|data|vbscript):/.test(normalized)) return "";
  return value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPoint(index, total) {
  const angle = (2 * Math.PI / total) * index;
  return {
    x: SVG_CENTER_X + RING_RADIUS * Math.cos(angle),
    y: SVG_CENTER_Y + RING_RADIUS * Math.sin(angle)
  };
}

function buildCenterPaths(centers) {
  const slices = [
    {
      path: "m99.134 67.883 91.725 124.504L282.29 67.103 191.033.957l-45.95 33.463Z",
      fill: "#cd5230",
      label: "Coordination",
      x: 191,
      y: 70
    },
    {
      path: "m381.408 140.247-91.693-66.462-91.43 125.285 148.332 48.664z",
      fill: "#ecaa4b",
      label: "Cloud",
      x: 330,
      y: 155
    },
    {
      path: "m309.598 365.388 34.792-107.487-148.333-48.664.22 156.28z",
      fill: "#7cb27c",
      label: "Knowledge",
      x: 260,
      y: 335
    },
    {
      path: "m73.25 365.642 112.632-.127-.22-156.278-147.446 48.996z",
      fill: "#5a909b",
      label: "Training",
      x: 120,
      y: 335
    },
    {
      path: "m35.99 248.066 147.445-48.996L91.71 74.566.957 140.658Z",
      fill: "#544f77",
      label: "Data",
      x: 50,
      y: 155
    }
  ];

  return slices.map((slice, index) => {
    const center = centers[index];
    return `
      <path
        class="cfde-wheel__interactive cfde-wheel__center-slice"
        data-wheel-kind="center"
        data-wheel-index="${index}"
        d="${slice.path}"
        fill="${slice.fill}"
        stroke="${slice.fill}"
        stroke-width="1.914"
        stroke-linejoin="round"
        aria-label="${escapeHtml(center?.short_label || slice.label)}"
      />
      <text class="cfde-wheel__label" x="${slice.x}" y="${slice.y}">${escapeHtml(slice.label)}</text>
    `;
  }).join("");
}

function buildDccNodes(dccs) {
  return dccs.map((item, index) => {
    const point = getPoint(index, dccs.length);
    return `
      <g data-wheel-kind="dcc" data-wheel-index="${index}">
        <circle
          cx="${point.x}"
          cy="${point.y}"
          r="${CIRCLE_SIZE / 1.5}"
          fill="#ffffff"
          stroke="#ccc"
          stroke-width="0.2"
          class="cfde-wheel__interactive cfde-wheel__ring-circle"
          aria-label="${escapeHtml(item.short_label)}"
        />
        <image
          class="cfde-wheel__ring-image"
          href="${escapeHtml(sanitizeUrl(resolveAsset(item.icon)))}"
          x="${point.x - ICON_SIZE / 2}"
          y="${point.y - ICON_SIZE / 2}"
          width="${ICON_SIZE}"
          height="${ICON_SIZE}"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    `;
  }).join("");
}

function buildMarkup(options) {
  return `
    <div class="cfde-wheel__underlay" data-wheel-close="true"></div>
    <button type="button" class="cfde-wheel__close" aria-label="Close CFDE wheel" data-wheel-close="true">✖</button>
    <div class="cfde-wheel__content">
      <div class="cfde-wheel__visual">
        <svg class="cfde-wheel__svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.365 366.599" role="img" aria-label="CFDE wheel">
          <g transform="translate(191,183) scale(0.55) translate(-191,-200)">
            ${buildCenterPaths(options.centers)}
            <path
              class="cfde-wheel__no-events"
              d="M191.22 315.291c63.947 0 115.787-51.768 115.787-115.627 0-63.859-51.84-115.627-115.787-115.627S75.434 135.805 75.434 199.664c0 63.86 51.84 115.627 115.786 115.627z"
              fill="#9f9f9f"
              style="mix-blend-mode:color-burn"
            />
            <path
              class="cfde-wheel__interactive cfde-wheel__core"
              d="M191.08 255.844c30.946 0 56.032-25.086 56.032-56.032 0-30.945-25.086-56.032-56.032-56.032-30.945 0-56.032 25.087-56.032 56.032 0 30.946 25.087 56.032 56.032 56.032z"
              fill="#ffffff"
            />
            <image class="cfde-wheel__no-events" href="${escapeHtml(resolveAsset(CORE_ASSETS.cfdeLogo))}" x="141" y="173" width="100" />
            <image class="cfde-wheel__no-events" href="${escapeHtml(resolveAsset(CORE_ASSETS.training))}" x="166" y="93" width="50" />
            <image class="cfde-wheel__no-events" href="${escapeHtml(resolveAsset(CORE_ASSETS.cloud))}" x="246" y="143" width="50" />
            <image class="cfde-wheel__no-events" href="${escapeHtml(resolveAsset(CORE_ASSETS.knowledge))}" x="216" y="243" width="50" />
            <image class="cfde-wheel__no-events" href="${escapeHtml(resolveAsset(CORE_ASSETS.training))}" x="116" y="243" width="50" />
            <image class="cfde-wheel__no-events" href="${escapeHtml(resolveAsset(CORE_ASSETS.data))}" x="91" y="143" width="50" />
          </g>
          ${buildDccNodes(options.dccs)}
        </svg>
        <div class="cfde-wheel__tooltip" hidden></div>
      </div>
    </div>
  `;
}

export class CfdeWheelWidget {
  constructor(options = {}) {
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options,
      dccs: options.dccs || DEFAULT_OPTIONS.dccs,
      centers: options.centers || DEFAULT_OPTIONS.centers
    };
    this.root = null;
    this.tooltipEl = null;
    this.previousBodyOverflow = "";
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleRootClick = this.handleRootClick.bind(this);
    this.handlePointerOver = this.handlePointerOver.bind(this);
    this.handlePointerOut = this.handlePointerOut.bind(this);
  }

  open() {
    if (this.root) return this.root;

    this.root = document.createElement("div");
    this.root.className = "cfde-wheel";
    this.root.innerHTML = buildMarkup(this.options);
    this.tooltipEl = this.root.querySelector(".cfde-wheel__tooltip");

    this.root.addEventListener("click", this.handleRootClick);
    this.root.addEventListener("mouseover", this.handlePointerOver);
    this.root.addEventListener("mouseout", this.handlePointerOut);

    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    this.options.target.appendChild(this.root);

    if (this.options.closeOnEscape) {
      document.addEventListener("keydown", this.handleKeydown);
    }

    return this.root;
  }

  close() {
    if (!this.root) return;

    this.root.removeEventListener("click", this.handleRootClick);
    this.root.removeEventListener("mouseover", this.handlePointerOver);
    this.root.removeEventListener("mouseout", this.handlePointerOut);
    this.root.remove();
    this.root = null;
    this.tooltipEl = null;

    document.body.style.overflow = this.previousBodyOverflow;
    document.removeEventListener("keydown", this.handleKeydown);
  }

  destroy() {
    this.close();
  }

  handleKeydown(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  handleRootClick(event) {
    const closeTarget = event.target.closest("[data-wheel-close='true']");
    if (closeTarget) {
      this.close();
      return;
    }

    const centerSlice = event.target.closest(".cfde-wheel__center-slice");
    if (centerSlice) {
      const item = this.options.centers[Number(centerSlice.dataset.wheelIndex)];
      this.navigate(item);
      return;
    }

    const dccNode = event.target.closest("[data-wheel-kind='dcc']");
    if (dccNode) {
      const item = this.options.dccs[Number(dccNode.dataset.wheelIndex)];
      this.navigate(item);
    }
  }

  handlePointerOver(event) {
    const centerSlice = event.target.closest(".cfde-wheel__center-slice");
    if (centerSlice) {
      const item = this.options.centers[Number(centerSlice.dataset.wheelIndex)];
      this.showTooltip(item?.short_label || "", event.target.getBoundingClientRect(), item?.yOffset);
      return;
    }

    const dccNode = event.target.closest("[data-wheel-kind='dcc']");
    if (dccNode) {
      const item = this.options.dccs[Number(dccNode.dataset.wheelIndex)];
      this.showTooltip(item?.description || "", event.target.getBoundingClientRect());
    }
  }

  handlePointerOut(event) {
    const leavingRelevantNode = event.target.closest(".cfde-wheel__interactive, [data-wheel-kind='dcc']");
    if (!leavingRelevantNode) return;

    if (event.relatedTarget && leavingRelevantNode.contains(event.relatedTarget)) {
      return;
    }

    this.hideTooltip();
  }

  showTooltip(text, rect, yOffset) {
    if (!this.tooltipEl || !text) return;

    const tooltipX = rect.x + rect.width / 2;
    const tooltipY = typeof yOffset === "number" ? rect.y + yOffset : rect.y + rect.height * .8;

    this.tooltipEl.textContent = text;
    this.tooltipEl.style.left = `${tooltipX}px`;
    this.tooltipEl.style.top = `${tooltipY}px`;
    this.tooltipEl.hidden = false;
  }

  hideTooltip() {
    if (this.tooltipEl) {
      this.tooltipEl.hidden = true;
    }
  }

  navigate(item) {
    const href = sanitizeUrl(item?.homepage);
    if (!href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  }
}
