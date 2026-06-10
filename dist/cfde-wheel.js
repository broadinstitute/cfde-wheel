(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cfde-wheel,.cfde-wheel *,.cfde-wheel *:before,.cfde-wheel *:after{box-sizing:border-box}.cfde-wheel{position:fixed;inset:0;z-index:10000;display:flex;justify-content:center;width:100vw;height:100vh;padding:0;font-family:Arial,Helvetica,sans-serif}.cfde-wheel__underlay{position:absolute;inset:0;background:#000c}.cfde-wheel__close{position:absolute;top:20px;right:25px;z-index:1;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:0;border-radius:50%;background:#fff;color:#000;cursor:pointer;font-size:16px;line-height:1}.cfde-wheel__content{position:relative;display:flex;width:100%;height:100%;padding:40px;pointer-events:none}.cfde-wheel__visual{position:relative;display:flex;flex:1;align-items:center;justify-content:center}.cfde-wheel__svg{width:min(88vw,980px);max-height:calc(100vh - 80px);height:auto;pointer-events:all}.cfde-wheel__interactive:hover{cursor:pointer}.cfde-wheel__center-slice:hover{opacity:.75}.cfde-wheel__ring-circle:hover,.cfde-wheel__core:hover{fill:#ccc}.cfde-wheel__label{fill:#fff;font-size:14px;text-transform:uppercase;text-anchor:middle;pointer-events:none}.cfde-wheel__no-events,.cfde-wheel__ring-image{pointer-events:none}.cfde-wheel__ring-image{mix-blend-mode:darken}.cfde-wheel__tooltip{position:absolute;max-width:220px;padding:6px 10px;border-radius:4px;background:#1e1e1ee6;color:#fff;font-size:14px;pointer-events:none;transform:translate(-50%,-50%)}[data-cfde-wheel-trigger]{cursor:pointer}@media(max-width:768px){.cfde-wheel__content{padding:20px}.cfde-wheel__close{top:12px;right:12px}.cfde-wheel__svg{width:min(95vw,700px);max-height:calc(100vh - 40px)}.cfde-wheel__tooltip{max-width:180px;font-size:12px}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var CfdeWheel=(function(d){"use strict";var c=typeof document<"u"?document.currentScript:null;const v=[{id:"65af85ae-82d5-5b81-bc66-6bddaa6420ce",short_label:"Kids First",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=Kids%20First",icon:"assets/kids-first.png",description:"Data, tools, and resources empowering pediatric research"},{id:"e332dadd-8084-5fbc-be41-29d75775aab3",short_label:"A2CPS",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=A2CPS",icon:"assets/a2cps.png",description:"Understanding the complex biological processes underlying chronic pain"},{id:"803ad44d-e7a2-550a-95c6-57855bf06be8",short_label:"HuBMAP",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=HuBMAP",icon:"assets/hubmap.png",description:"Cellular spatial atlas of the human body"},{id:"d6bb00c3-7224-5001-b9c5-9838622fba40",short_label:"4DN",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=4DN",icon:"assets/4dn.png",description:"Nuclear organization in space and time"},{id:"f3f490cf-fd69-579c-8ea3-472c7cf3fb59",short_label:"LINCS",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=LINCS",icon:"assets/lincs-logo.png",description:"Omics signatures for drug & target discovery"},{id:"a1289ebb-0306-59a1-b0fc-e4d03a4790d7",short_label:"IDG",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=IDG",icon:"assets/idg.png",description:"Illuminating GPCRs, kinases, ion channels, & other drug targets"},{id:void 0,short_label:"NPH",homepage:"https://commonfund.nih.gov/nutritionforprecisionhealth",icon:"assets/nph.png",description:"Predictive algorithms to advance nutrition research"},{id:"e31052b0-ac50-5ede-9828-698ff3610427",short_label:"GlyGen",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=GlyGen",icon:"assets/glygen.png",description:"Computational and informatics resources for glycoscience"},{id:"75b3be39-a021-5d80-b7e2-2a7938a1e11a",short_label:"Bridge2AI",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=Bridge2AI",icon:"assets/bridge2ai.png",description:"Biomedical AI ↔ people, data & ethics"},{id:"a9aeab22-4fbc-5329-aef6-21110f463c23",short_label:"MoTrPAC",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=MoTrPAC",icon:"assets/motrpac.png",description:"The molecular map of exercise"},{id:"089d8d63-3364-526f-9706-80d62d0ec88c",short_label:"Metabolomics Workbench",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=Metabolomics",icon:"assets/metabolomics.png",description:"Metabolomics"},{id:void 0,short_label:"SCGE",homepage:"https://commonfund.nih.gov/editing",icon:"assets/scge.png",description:"Reducing the burden of diseases caused by genetic changes"},{id:"2399794e-74c6-5735-a039-0782cdeeb1e2",short_label:"SPARC",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=SPARC",icon:"assets/sparc.svg",description:"Bridging the body and brain"},{id:void 0,short_label:"SMaHT",homepage:"https://smaht.org/",icon:"assets/smaht.png",description:"Mapping somatic mutations' health implications"},{id:"b3028db2-209c-5862-8f4d-33c5b312332e",short_label:"GTEx",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=GTEx",icon:"assets/gtex.png",description:"Gene expression and regulation across human tissues"},{id:"dd66e8a5-0e05-5a43-a0ca-18cc3698bb36",short_label:"SenNet",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=SenNet",icon:"assets/sennet.png",description:"Mapping senescent cells"},{id:"f65babf7-2875-5725-9635-210d654533f1",short_label:"ExRNA",homepage:"https://cfdeknowledge.org/r/kc_programs?DCC=exRNA",icon:"assets/exrna.png",description:"Extracellular RNA communication"}],k=[{homepage:"https://cfdeconnect.org/",short_label:"The Integration and Coordination Center",yOffset:100},{homepage:"https://cfdecloud.org",short_label:"The Cloud Workspace Implementation Center",yOffset:120},{homepage:"https://cfdeknowledge.org",short_label:"The Knowledge Center",yOffset:60},{homepage:"https://orau.org/cfde-trainingcenter/",short_label:"The Training Center",yOffset:60},{homepage:"https://cfde.cloud/",short_label:"The Data Resource Center",yOffset:120}],a={cfdeLogo:"assets/cfde-logo.png",training:"assets/training-1.png",cloud:"assets/cloud-1.png",knowledge:"assets/knowledge-1.png",data:"assets/data-1.png",launcherIcon:"assets/cfde_unified_icon.png"};let h="";function E(){if(h)return;if(document.currentScript?.src){h=document.currentScript.src.replace(/[^/]+$/,"");return}try{if(c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("cfde-wheel.js",document.baseURI).href){h=(c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("cfde-wheel.js",document.baseURI).href).replace(/[^/]+$/,"");return}}catch{}const t=document.querySelector('script[src*="cfde-wheel"]');t?.src&&(h=t.src.replace(/[^/]+$/,""))}function S(){return h}function r(t){if(!t||typeof t!="string")return"";if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return t;const e=S();if(!e)return t;const o=t.replace(/^assets\//,""),n=e.includes("/src/")?"/assets/":"../public/assets/";return new URL(`${n}${o}`,e).href}const w="cfde-wheel";class x extends HTMLElement{static get observedAttributes(){return["size"]}constructor(){super(),this.attachShadow({mode:"open"}),this.handleClick=this.handleClick.bind(this)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}handleClick(e){e.preventDefault(),p()}getSize(){const e=this.getAttribute("size");return e?/^\d+$/.test(e)?`${e}px`:e:null}render(){const e=this.getSize(),o=e?`width:${e};height:${e};`:"width:100%;height:100%;";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-flex;
          ${o}
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
        <img src="${r(a.launcherIcon)}" alt="CFDE wheel icon" />
      </button>
    `,this.shadowRoot.querySelector("button")?.addEventListener("click",this.handleClick)}}function T(){customElements.get(w)||customElements.define(w,x)}const m={dccs:v,centers:k,target:document.body,closeOnEscape:!0},$=191,R=183,_=150,D=35,f=30;function C(t){if(typeof t!="string")return"";const e=t.trim();if(!e)return"";const o=e.replace(/[\u0000-\u001F\u007F\s]+/g,"").toLowerCase();return/^(javascript|data|vbscript):/.test(o)?"":e}function i(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function L(t,e){const o=2*Math.PI/e*t;return{x:$+_*Math.cos(o),y:R+_*Math.sin(o)}}function P(t){return[{path:"m99.134 67.883 91.725 124.504L282.29 67.103 191.033.957l-45.95 33.463Z",fill:"#cd5230",label:"Coordination",x:191,y:70},{path:"m381.408 140.247-91.693-66.462-91.43 125.285 148.332 48.664z",fill:"#ecaa4b",label:"Cloud",x:330,y:155},{path:"m309.598 365.388 34.792-107.487-148.333-48.664.22 156.28z",fill:"#7cb27c",label:"Knowledge",x:260,y:335},{path:"m73.25 365.642 112.632-.127-.22-156.278-147.446 48.996z",fill:"#5a909b",label:"Training",x:120,y:335},{path:"m35.99 248.066 147.445-48.996L91.71 74.566.957 140.658Z",fill:"#544f77",label:"Data",x:50,y:155}].map((o,n)=>{const s=t[n];return`
      <path
        class="cfde-wheel__interactive cfde-wheel__center-slice"
        data-wheel-kind="center"
        data-wheel-index="${n}"
        d="${o.path}"
        fill="${o.fill}"
        stroke="${o.fill}"
        stroke-width="1.914"
        stroke-linejoin="round"
        aria-label="${i(s?.short_label||o.label)}"
      />
      <text class="cfde-wheel__label" x="${o.x}" y="${o.y}">${i(o.label)}</text>
    `}).join("")}function I(t){return t.map((e,o)=>{const n=L(o,t.length);return`
      <g data-wheel-kind="dcc" data-wheel-index="${o}">
        <circle
          cx="${n.x}"
          cy="${n.y}"
          r="${D/1.5}"
          fill="#ffffff"
          stroke="#ccc"
          stroke-width="0.2"
          class="cfde-wheel__interactive cfde-wheel__ring-circle"
          aria-label="${i(e.short_label)}"
        />
        <image
          class="cfde-wheel__ring-image"
          href="${i(C(r(e.icon)))}"
          x="${n.x-f/2}"
          y="${n.y-f/2}"
          width="${f}"
          height="${f}"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    `}).join("")}function N(t){return`
    <div class="cfde-wheel__underlay" data-wheel-close="true"></div>
    <button type="button" class="cfde-wheel__close" aria-label="Close CFDE wheel" data-wheel-close="true">✖</button>
    <div class="cfde-wheel__content">
      <div class="cfde-wheel__visual">
        <svg class="cfde-wheel__svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.365 366.599" role="img" aria-label="CFDE wheel">
          <g transform="translate(191,183) scale(0.55) translate(-191,-200)">
            ${P(t.centers)}
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
            <image class="cfde-wheel__no-events" href="${i(r(a.cfdeLogo))}" x="141" y="173" width="100" />
            <image class="cfde-wheel__no-events" href="${i(r(a.training))}" x="166" y="93" width="50" />
            <image class="cfde-wheel__no-events" href="${i(r(a.cloud))}" x="246" y="143" width="50" />
            <image class="cfde-wheel__no-events" href="${i(r(a.knowledge))}" x="216" y="243" width="50" />
            <image class="cfde-wheel__no-events" href="${i(r(a.training))}" x="116" y="243" width="50" />
            <image class="cfde-wheel__no-events" href="${i(r(a.data))}" x="91" y="143" width="50" />
          </g>
          ${I(t.dccs)}
        </svg>
        <div class="cfde-wheel__tooltip" hidden></div>
      </div>
    </div>
  `}class b{constructor(e={}){this.options={...m,...e,dccs:e.dccs||m.dccs,centers:e.centers||m.centers},this.root=null,this.tooltipEl=null,this.previousBodyOverflow="",this.handleKeydown=this.handleKeydown.bind(this),this.handleRootClick=this.handleRootClick.bind(this),this.handlePointerOver=this.handlePointerOver.bind(this),this.handlePointerOut=this.handlePointerOut.bind(this)}open(){return this.root?this.root:(this.root=document.createElement("div"),this.root.className="cfde-wheel",this.root.innerHTML=N(this.options),this.tooltipEl=this.root.querySelector(".cfde-wheel__tooltip"),this.root.addEventListener("click",this.handleRootClick),this.root.addEventListener("mouseover",this.handlePointerOver),this.root.addEventListener("mouseout",this.handlePointerOut),this.previousBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden",this.options.target.appendChild(this.root),this.options.closeOnEscape&&document.addEventListener("keydown",this.handleKeydown),this.root)}close(){this.root&&(this.root.removeEventListener("click",this.handleRootClick),this.root.removeEventListener("mouseover",this.handlePointerOver),this.root.removeEventListener("mouseout",this.handlePointerOut),this.root.remove(),this.root=null,this.tooltipEl=null,document.body.style.overflow=this.previousBodyOverflow,document.removeEventListener("keydown",this.handleKeydown))}destroy(){this.close()}handleKeydown(e){e.key==="Escape"&&this.close()}handleRootClick(e){if(e.target.closest("[data-wheel-close='true']")){this.close();return}const n=e.target.closest(".cfde-wheel__center-slice");if(n){const g=this.options.centers[Number(n.dataset.wheelIndex)];this.navigate(g);return}const s=e.target.closest("[data-wheel-kind='dcc']");if(s){const g=this.options.dccs[Number(s.dataset.wheelIndex)];this.navigate(g)}}handlePointerOver(e){const o=e.target.closest(".cfde-wheel__center-slice");if(o){const s=this.options.centers[Number(o.dataset.wheelIndex)];this.showTooltip(s?.short_label||"",e.target.getBoundingClientRect(),s?.yOffset);return}const n=e.target.closest("[data-wheel-kind='dcc']");if(n){const s=this.options.dccs[Number(n.dataset.wheelIndex)];this.showTooltip(s?.description||"",e.target.getBoundingClientRect())}}handlePointerOut(e){const o=e.target.closest(".cfde-wheel__interactive, [data-wheel-kind='dcc']");o&&(e.relatedTarget&&o.contains(e.relatedTarget)||this.hideTooltip())}showTooltip(e,o,n){if(!this.tooltipEl||!e)return;const s=o.x+o.width/2,g=typeof n=="number"?o.y+n:o.y+o.height*.8;this.tooltipEl.textContent=e,this.tooltipEl.style.left=`${s}px`,this.tooltipEl.style.top=`${g}px`,this.tooltipEl.hidden=!1}hideTooltip(){this.tooltipEl&&(this.tooltipEl.hidden=!0)}navigate(e){const o=C(e?.homepage);o&&window.open(o,"_blank","noopener,noreferrer")}}let l=null;function O(){return l||(l=new b),l}function p(t){return t&&(l?.destroy(),l=new b(t)),O().open()}function y(){l?.close()}function u(){document.querySelectorAll("[data-cfde-wheel-trigger]").forEach(t=>{t.dataset.cfdeWheelBound!=="true"&&(t.dataset.cfdeWheelBound="true",t.addEventListener("click",e=>{e.preventDefault(),p()}))})}const A={open:p,close:y,init:u,create(t){return new b(t)}};return typeof window<"u"&&(E(),window.CfdeWheel=A,T()),document.readyState!=="loading"?u():document.addEventListener("DOMContentLoaded",u,{once:!0}),d.closeCfdeWheel=y,d.initCfdeWheel=u,d.openCfdeWheel=p,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),d})({});
