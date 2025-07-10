(function(i,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(i=typeof globalThis<"u"?globalThis:i||self,l(i.darkglow={}))})(this,function(i){"use strict";const l=':host{display:inline-block}.button{font-family:Orbitron,sans-serif;padding:var(--spacing-xs) var(--spacing-sm);border:2px solid transparent;border-radius:0;cursor:pointer;font-size:16px;transition:all .3s ease;outline:none;position:relative;text-transform:uppercase;letter-spacing:1px;clip-path:polygon(10% 0,100% 0,90% 100%,0 100%);background-color:var(--color-darker);box-shadow:0 0 10px #ff00ff80;overflow:hidden}.button:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(45deg,transparent 25%,rgba(255,255,255,.1) 50%,transparent 75%);background-size:200% 200%;animation:shimmer 2s infinite linear;z-index:1;opacity:0;transition:opacity .3s ease}@keyframes shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}.button:hover:not(:disabled){transform:translateY(-2px) scale(1.05);box-shadow:0 0 15px var(--color-primary)}.button:hover:not(:disabled):before{opacity:1}.button:active:not(:disabled){transform:translateY(0) scale(.98);box-shadow:0 0 5px var(--color-primary)}.button:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,var(--color-primary),transparent);animation:neon-border 2s linear infinite}.button:disabled{opacity:.6;cursor:not-allowed}.primary{background-color:var(--color-darker);color:var(--color-primary);border:2px solid var(--color-primary);box-shadow:0 0 10px var(--color-primary)}.primary:hover:not(:disabled){box-shadow:0 0 15px var(--color-primary),inset 0 0 10px var(--color-primary);text-shadow:0 0 5px var(--color-primary)}.secondary{background-color:var(--color-darker);color:var(--color-secondary);border:2px solid var(--color-secondary);box-shadow:0 0 10px var(--color-secondary)}.secondary:hover:not(:disabled){box-shadow:0 0 15px var(--color-secondary),inset 0 0 10px var(--color-secondary);text-shadow:0 0 5px var(--color-secondary)}.secondary:after{background:linear-gradient(90deg,transparent,var(--color-secondary),transparent)}.danger{background-color:var(--color-darker);color:var(--color-danger);border:2px solid var(--color-danger);box-shadow:0 0 10px var(--color-danger)}.danger:hover:not(:disabled){box-shadow:0 0 15px var(--color-danger),inset 0 0 10px var(--color-danger);text-shadow:0 0 5px var(--color-danger)}.danger:after{background:linear-gradient(90deg,transparent,var(--color-danger),transparent)}.ghost{background-color:transparent;color:var(--color-white);border:2px solid var(--color-white);box-shadow:0 0 5px #ffffff4d;clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}.ghost:hover:not(:disabled){color:var(--color-primary);border-color:var(--color-primary);box-shadow:0 0 10px var(--color-primary);text-shadow:0 0 5px var(--color-primary)}';class d extends HTMLElement{static get observedAttributes(){return["variant","disabled"]}constructor(){super(),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled){e.preventDefault();return}this.dispatchEvent(new CustomEvent("button-click",{bubbles:!0,composed:!0}))}}),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.addEventListener("click",this.handleClick)}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}attributeChangedCallback(e,t,r){t!==r&&this.render()}get variant(){return this.getAttribute("variant")||"primary"}get disabled(){return this.hasAttribute("disabled")}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>${l}</style>
      <button class="button ${this.variant}" ${this.disabled?"disabled":""}>
        <slot></slot>
      </button>
    `)}}const y=":host{display:block;width:100%}.button-group{display:flex;gap:var(--spacing-sm);padding:var(--spacing-xs);background:#0d0221b3;border-radius:var(--border-radius);position:relative;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.horizontal{flex-wrap:wrap}::slotted(darkglow-button){margin:0;transition:transform .2s ease,box-shadow .2s ease}::slotted(darkglow-button:hover){transform:translateY(-2px);filter:brightness(1.2)}";class c extends HTMLElement{static get observedAttributes(){return["orientation","align"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}get orientation(){return this.getAttribute("orientation")||"horizontal"}get align(){return this.getAttribute("align")||"center"}render(){if(!this.shadowRoot)return;let e,t;switch(this.align){case"start":e="flex-start",t="flex-start";break;case"end":e="flex-end",t="flex-end";break;case"center":default:e="center",t="center";break}console.log(t);const r=`
      .button-group {
        flex-direction: ${this.orientation==="vertical"?"column":"row"};
        ${this.orientation==="vertical"?`align-items: ${e};`:`justify-content: ${e};`}
      }
    `;this.shadowRoot.innerHTML=`
      <style>
        ${y}
        ${r}
      </style>
      <div class="button-group ${this.orientation}">
        <slot></slot>
      </div>
    `}}const x=':host{display:block;width:100%}.card{background-color:var(--color-darker);border-radius:var(--border-radius);padding:var(--spacing-md);margin:var(--spacing-sm) 0;color:var(--color-white);transition:all .3s ease;position:relative;overflow:hidden;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid var(--color-primary)}.card:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--color-primary),transparent);animation:neon-border 2s linear infinite}@keyframes neon-border{0%{transform:translate(-100%)}to{transform:translate(100%)}}.card:hover{transform:translateY(-3px)}.card-content{display:flex;flex-direction:column;gap:var(--spacing-sm);position:relative;z-index:1}.default{border:1px solid var(--color-gray-dark);box-shadow:0 0 5px #fff3}.primary{border:1px solid var(--color-primary);box-shadow:0 0 10px #ff00ff4d}.primary:before{content:"";position:absolute;top:0;left:0;width:4px;height:100%;background-color:var(--color-primary);box-shadow:var(--color-primary-glow)}.secondary{border:1px solid var(--color-secondary);box-shadow:0 0 10px #00ffff4d}.secondary:before{content:"";position:absolute;top:0;left:0;width:4px;height:100%;background-color:var(--color-secondary);box-shadow:var(--color-secondary-glow)}.danger{border:1px solid var(--color-danger);box-shadow:0 0 10px #ff2b6d4d}.danger:before{content:"";position:absolute;top:0;left:0;width:4px;height:100%;background-color:var(--color-danger);box-shadow:var(--color-danger-glow)}.outlined{background-color:transparent;border:1px solid var(--color-primary)}::slotted(h1),::slotted(h2),::slotted(h3){margin-top:0;color:var(--color-white)}::slotted(p){margin:0;color:var(--color-gray-light)}';class h extends HTMLElement{static get observedAttributes(){return["variant","elevated"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(e,t,r){t!==r&&this.render()}get variant(){return this.getAttribute("variant")||"default"}get elevated(){return this.hasAttribute("elevated")}render(){if(!this.shadowRoot)return;const e=`
      .card {
        ${this.elevated?"box-shadow: var(--shadow-lg);":"box-shadow: var(--shadow-sm);"}
      }
      
      .card:hover {
        ${this.elevated?"box-shadow: var(--shadow-xl);":"box-shadow: var(--shadow-md);"}
      }
    `;this.shadowRoot.innerHTML=`
      <style>
        ${x}
        ${e}
      </style>
      <div class="card ${this.variant}">
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `}}const w=':host{display:block;width:100%}.container{margin:var(--spacing-lg) auto;max-width:800px;padding:var(--spacing-sm);background-color:var(--color-dark);border-radius:var(--border-radius);box-shadow:var(--shadow-md);overflow-x:auto;position:relative;border:1px solid var(--color-secondary);box-shadow:0 0 15px #0ff3}.container:before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--color-secondary),transparent);animation:neon-scan 3s ease-in-out infinite}@keyframes neon-scan{0%,to{opacity:0;transform:translateY(0)}50%{opacity:1;transform:translateY(calc(100% - 2px))}}.content{display:flex;flex-direction:column;gap:var(--spacing-sm);position:relative;z-index:1}::slotted(.button-row){display:flex;flex-wrap:wrap;gap:var(--spacing-sm);padding-top:var(--spacing-sm);padding-bottom:var(--spacing-sm);justify-content:center}';class u extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(e,t,r){t!==r&&this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>${w}</style>
      <div class="container">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `)}}const k=':host{display:inline-block}.fader-container{display:flex;align-items:center;-webkit-user-select:none;user-select:none}.fader-wrapper{position:relative;margin:10px 0}.fader-track{position:absolute;background-color:var(--fader-color);border:2px solid var(--fader-border);box-shadow:0 0 10px var(--fader-border);border-radius:4px;overflow:hidden}.fader-track:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.fader-handle{position:absolute;background-color:var(--handle-color);border:2px solid var(--fader-border);box-shadow:0 0 10px var(--fader-border);border-radius:4px;transition:box-shadow .3s ease,transform .1s ease;z-index:2}.fader-handle:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 50%);z-index:1}.value-display{margin-top:8px;font-family:Orbitron,sans-serif;font-size:14px;color:var(--indicator-color);text-shadow:0 0 5px var(--indicator-color)}.label{margin-top:4px;font-family:Orbitron,sans-serif;font-size:12px;color:var(--color-white);text-transform:uppercase;letter-spacing:1px}.ticks{position:absolute;width:100%;height:100%;top:0;left:0;z-index:0}.tick{position:absolute;background-color:#ffffff4d}.tick.major{background-color:var(--indicator-color);box-shadow:0 0 3px var(--indicator-color)}.primary{--fader-border: var(--color-primary);--indicator-color: var(--color-primary)}.secondary{--fader-border: var(--color-secondary);--indicator-color: var(--color-secondary)}.danger{--fader-border: var(--color-danger);--indicator-color: var(--color-danger)}.accent{--fader-border: var(--color-accent);--indicator-color: var(--color-accent)}:host([disabled]) .fader-track,:host([disabled]) .fader-handle{opacity:.6;box-shadow:none}:host([disabled]) .value-display,:host([disabled]) .label{opacity:.6}';class b extends HTMLElement{static get observedAttributes(){return["value","min","max","disabled","variant","orientation"]}constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:50}),Object.defineProperty(this,"_min",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_max",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(this,"_isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startY",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_startX",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_faderElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_handleElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_valueDisplay",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_sensitivity",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"handleMouseDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var t;this.disabled||(this._isDragging=!0,this._startY=e.clientY,this._startX=e.clientX,(t=this._handleElement)==null||t.classList.add("active"),e.preventDefault())}}),Object.defineProperty(this,"handleMouseMove",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this._isDragging)return;const t=this._max-this._min;let r;this.orientation==="horizontal"?(r=(e.clientX-this._startX)*this._sensitivity*(t/100),this._startX=e.clientX):(r=(this._startY-e.clientY)*this._sensitivity*(t/100),this._startY=e.clientY),this.value=this._value+r}}),Object.defineProperty(this,"handleMouseUp",{enumerable:!0,configurable:!0,writable:!0,value:()=>{var e;this._isDragging&&(this._isDragging=!1,(e=this._handleElement)==null||e.classList.remove("active"))}}),Object.defineProperty(this,"handleWheel",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled)return;e.preventDefault();const t=this.orientation==="horizontal"?e.deltaY>0?1:-1:e.deltaY>0?-1:1,r=(this._max-this._min)/100;this.value=this._value+t*r*5}}),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){var e,t,r,a;this._faderElement=(e=this.shadowRoot)==null?void 0:e.querySelector(".fader-track"),this._handleElement=(t=this.shadowRoot)==null?void 0:t.querySelector(".fader-handle"),this._valueDisplay=(r=this.shadowRoot)==null?void 0:r.querySelector(".value-display"),(a=this._handleElement)==null||a.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),this.addEventListener("wheel",this.handleWheel),this.updateFaderPosition()}disconnectedCallback(){var e;(e=this._handleElement)==null||e.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.removeEventListener("wheel",this.handleWheel)}attributeChangedCallback(e,t,r){if(t!==r)switch(e){case"value":this._value=isNaN(Number(r))?50:Number(r),this.updateFaderPosition();break;case"min":this._min=isNaN(Number(r))?0:Number(r),this.updateFaderPosition();break;case"max":this._max=isNaN(Number(r))?100:Number(r),this.updateFaderPosition();break;case"disabled":case"variant":case"orientation":this.render();break}}get value(){return this._value}set value(e){const t=Math.min(Math.max(e,this._min),this._max);t!==this._value&&(this._value=t,this.setAttribute("value",String(t)),this.updateFaderPosition(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._value}})))}get min(){return this._min}set min(e){this._min=e,this.setAttribute("min",String(e))}get max(){return this._max}set max(e){this._max=e,this.setAttribute("max",String(e))}get disabled(){return this.hasAttribute("disabled")}get variant(){return this.getAttribute("variant")||"primary"}get orientation(){return this.getAttribute("orientation")||"vertical"}updateFaderPosition(){if(!this._handleElement||!this._valueDisplay)return;const e=(this._value-this._min)/(this._max-this._min)*100;if(this.orientation==="horizontal")this._handleElement.style.left=`${e}%`,this._handleElement.style.top="50%",this._handleElement.style.transform="translate(-50%, -50%)";else{const t=100-e;this._handleElement.style.top=`${t}%`,this._handleElement.style.left="50%",this._handleElement.style.transform="translateX(-50%)"}this._valueDisplay.textContent=Math.round(this._value).toString()}render(){if(!this.shadowRoot)return;const e=this.orientation==="horizontal",t=`
      :host {
        --fader-width: ${e?"150px":"40px"};
        --fader-height: ${e?"40px":"150px"};
        --fader-color: var(--color-darker);
        --handle-color: var(--color-darker);
        --indicator-color: var(--color-primary);
        --fader-border: var(--color-primary);
      }

      .fader-container {
        flex-direction: column;
        width: var(--fader-width);
      }

      .fader-wrapper {
        width: var(--fader-width);
        height: var(--fader-height);
        margin: ${e?"0 0 10px 0":"10px 0"};
      }

      .fader-track {
        ${e?"top: 50%; left: 0; transform: translateY(-50%); width: 100%; height: 8px;":"top: 0; left: 50%; transform: translateX(-50%); width: 8px; height: 100%;"}
      }

      .fader-track::before {
        background: ${e?"linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 50%)":"linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 50%)"};
      }

      .fader-handle {
        ${e?"left: 0; top: 50%; transform: translate(-50%, -50%);":"left: 50%; top: 0; transform: translateX(-50%);"}
        width: ${e?"16px":"var(--fader-width)"};
        height: ${e?"var(--fader-height)":"16px"};
        cursor: ${this.disabled?"not-allowed":e?"ew-resize":"ns-resize"};
      }

      .fader-handle.active {
        transform: ${e?"translate(-50%, -50%) scale(0.95)":"translateX(-50%) scale(0.95)"};
      }

      .tick {
        ${e?"width: 2px; height: 6px; top: calc(50% - 10px);":"width: 6px; height: 2px; left: calc(50% - 10px);"}
      }

      .tick.major {
        ${e?"width: 2px; height: 10px;":"width: 10px; height: 2px;"}
      }
    `;let r='<div class="ticks">';for(let a=0;a<=10;a++){const n=a*10,s=a%2===0;this.orientation==="horizontal"?r+=`
          <div class="tick ${s?"major":""}" 
               style="left: ${n}%;">
          </div>
        `:r+=`
          <div class="tick ${s?"major":""}" 
               style="top: ${n}%;">
          </div>
        `}r+="</div>",this.shadowRoot.innerHTML=`
      <style>
        ${k}
        ${t}
      </style>
      <div class="fader-container">
        <div class="fader-wrapper">
          <div class="fader-track ${this.variant} ${this.disabled?"disabled":""}">
            ${r}
          </div>
          <div class="fader-handle ${this.variant} ${this.disabled?"disabled":""}"></div>
        </div>
        <div class="value-display">50</div>
        <div class="label"><slot></slot></div>
      </div>
    `,this._faderElement=this.shadowRoot.querySelector(".fader-track"),this._handleElement=this.shadowRoot.querySelector(".fader-handle"),this._valueDisplay=this.shadowRoot.querySelector(".value-display"),this.updateFaderPosition()}}const _=":host{display:block;width:100%}.grid-container{display:grid;margin:var(--spacing-md) auto;padding:var(--spacing-sm);border-radius:var(--border-radius);position:relative;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}::slotted(*){transition:transform .2s ease,filter .2s ease}::slotted(*:hover){transform:translateY(-2px);filter:brightness(1.2)}";class p extends HTMLElement{static get observedAttributes(){return["columns","gap","max-width","align","variant"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(e,t,r){t!==r&&this.render()}get columns(){return this.getAttribute("columns")||"4"}get gap(){return this.getAttribute("gap")||"10px"}get maxWidth(){return this.getAttribute("max-width")||"none"}get align(){return this.getAttribute("align")||"center"}get variant(){return this.getAttribute("variant")||"default"}render(){if(!this.shadowRoot)return;let e,t;switch(this.align){case"start":e="start",t="flex-start";break;case"end":e="end",t="flex-end";break;case"center":default:e="center",t="center";break}let r="transparent",a="none",n="none";switch(this.variant){case"primary":r="rgba(13, 2, 33, 0.7)",a="1px solid var(--color-primary)",n="0 0 10px rgba(0, 128, 255, 0.3)";break;case"secondary":r="rgba(13, 2, 33, 0.7)",a="1px solid var(--color-secondary)",n="0 0 10px rgba(0, 255, 255, 0.3)";break;case"danger":r="rgba(13, 2, 33, 0.7)",a="1px solid var(--color-danger)",n="0 0 10px rgba(255, 0, 0, 0.3)";break;case"accent":r="rgba(13, 2, 33, 0.7)",a="1px solid var(--color-accent)",n="0 0 10px rgba(255, 0, 255, 0.3)";break;case"outlined":r="transparent",a="1px solid var(--color-border)";break;case"default":default:r="rgba(13, 2, 33, 0.7)";break}const s=`
      .grid-container {
        grid-template-columns: repeat(${this.columns}, 1fr);
        gap: ${this.gap};
        max-width: ${this.maxWidth};
        justify-items: ${e};
        justify-content: ${t};
        background: ${r};
        border: ${a};
        box-shadow: ${n};
      }
    `;this.shadowRoot.innerHTML=`
      <style>
        ${_}
        ${s}
      </style>
      <div class="grid-container">
        <slot></slot>
      </div>
    `}}const $=':host{display:inline-block;--knob-size: 80px;--knob-color: var(--color-darker);--indicator-color: var(--color-primary);--knob-border: var(--color-primary)}.knob-container{display:flex;flex-direction:column;align-items:center;width:var(--knob-size);-webkit-user-select:none;user-select:none}.knob-wrapper{position:relative;width:var(--knob-size);height:var(--knob-size);overflow:hidden;border-radius:50%}.knob{position:relative;width:100%;height:100%;border-radius:50%;background-color:var(--knob-color);border:2px solid var(--knob-border);box-shadow:0 0 10px var(--knob-border);transition:box-shadow .3s ease,transform .1s ease;overflow:hidden}.knob:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at center,rgba(255,255,255,.1) 0%,transparent 70%);z-index:1}.knob:after{content:"";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;background:linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 50%);z-index:2}.knob.active{transform:scale(.95)}.indicator{position:absolute;top:10%;left:50%;width:2px;height:40%;background-color:var(--indicator-color);transform-origin:bottom center;transform:translate(-50%) rotate(0);z-index:3;box-shadow:0 0 5px var(--indicator-color)}.value-display{margin-top:8px;font-family:Orbitron,sans-serif;font-size:14px;color:var(--indicator-color);text-shadow:0 0 5px var(--indicator-color)}.label{margin-top:4px;font-family:Orbitron,sans-serif;font-size:12px;color:var(--color-white);text-transform:uppercase;letter-spacing:1px}.primary{--knob-border: var(--color-primary);--indicator-color: var(--color-primary)}.secondary{--knob-border: var(--color-secondary);--indicator-color: var(--color-secondary)}.danger{--knob-border: var(--color-danger);--indicator-color: var(--color-danger)}.accent{--knob-border: var(--color-accent);--indicator-color: var(--color-accent)}:host([disabled]) .knob{opacity:.6;box-shadow:none}:host([disabled]) .value-display,:host([disabled]) .label{opacity:.6}.ticks{position:absolute;width:100%;height:100%;top:0;left:0;z-index:0;display:flex;justify-content:center;align-items:center}.tick{position:absolute;width:2px;height:6px;background-color:#ffffff4d;transform-origin:bottom center;top:0;left:calc(50% - 1px)}.tick.major{height:10px;width:2px;background-color:var(--indicator-color);box-shadow:0 0 3px var(--indicator-color)}.tick.limit-marker{height:12px;width:2px;background-color:var(--indicator-color);box-shadow:0 0 5px var(--indicator-color)}';class v extends HTMLElement{static get observedAttributes(){return["value","min","max","disabled","variant"]}constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:50}),Object.defineProperty(this,"_min",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_max",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(this,"_isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startY",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_knobElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_indicatorElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_valueDisplay",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_sensitivity",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"handleMouseDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var t;this.disabled||(this._isDragging=!0,this._startY=e.clientY,(t=this._knobElement)==null||t.classList.add("active"),e.preventDefault())}}),Object.defineProperty(this,"handleMouseMove",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this._isDragging)return;const t=this._startY-e.clientY,r=this._max-this._min,a=t*this._sensitivity*(r/100);this.value=this._value+a,this._startY=e.clientY}}),Object.defineProperty(this,"handleMouseUp",{enumerable:!0,configurable:!0,writable:!0,value:()=>{var e;this._isDragging&&(this._isDragging=!1,(e=this._knobElement)==null||e.classList.remove("active"))}}),Object.defineProperty(this,"handleWheel",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled)return;e.preventDefault();const t=e.deltaY>0?-1:1,r=(this._max-this._min)/100;this.value=this._value+t*r*5}}),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){var e,t,r;this._knobElement=(e=this.shadowRoot)==null?void 0:e.querySelector(".knob"),this._indicatorElement=(t=this.shadowRoot)==null?void 0:t.querySelector(".indicator"),this._valueDisplay=(r=this.shadowRoot)==null?void 0:r.querySelector(".value-display"),this.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),this.addEventListener("wheel",this.handleWheel),this.updateKnobPosition()}disconnectedCallback(){this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.removeEventListener("wheel",this.handleWheel)}attributeChangedCallback(e,t,r){if(t!==r)switch(e){case"value":this._value=isNaN(Number(r))?50:Number(r),this.updateKnobPosition();break;case"min":this._min=isNaN(Number(r))?0:Number(r),this.updateKnobPosition();break;case"max":this._max=isNaN(Number(r))?100:Number(r),this.updateKnobPosition();break;case"disabled":case"variant":this.render();break}}get value(){return this._value}set value(e){const t=Math.min(Math.max(e,this._min),this._max);t!==this._value&&(this._value=t,this.setAttribute("value",String(t)),this.updateKnobPosition(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._value}})))}get min(){return this._min}set min(e){this._min=e,this.setAttribute("min",String(e))}get max(){return this._max}set max(e){this._max=e,this.setAttribute("max",String(e))}get disabled(){return this.hasAttribute("disabled")}get variant(){return this.getAttribute("variant")||"primary"}updateKnobPosition(){if(!this._indicatorElement||!this._valueDisplay)return;const a=225+(this._value-this._min)/(this._max-this._min)*100*285/100;this._indicatorElement.style.transform=`rotate(${a}deg)`,this._valueDisplay.textContent=Math.round(this._value).toString()}render(){if(!this.shadowRoot)return;const e=`
      .knob {
        cursor: ${this.disabled?"not-allowed":"pointer"};
      }
    `;let t='<div class="ticks">';const r=225,a=150;for(let n=0;n<28;n++){const s=n*10,j=n%9===0,z=Math.abs(s-r)<5,P=Math.abs(s-a)<5;t+=`
        <div class="tick ${z||P?"limit-marker":j?"major":""}" 
             style="transform: rotate(${s}deg) translateY(-calc(var(--knob-size) / 2 - 4px));">
        </div>
      `}t+=`
      <div class="tick limit-marker" 
           style="transform: rotate(${r}deg) translateY(-calc(var(--knob-size) / 2 - 4px));">
      </div>
      <div class="tick limit-marker" 
           style="transform: rotate(${a}deg) translateY(-calc(var(--knob-size) / 2 - 4px));">
      </div>
    `,t+="</div>",this.shadowRoot.innerHTML=`
      <style>
        ${$}
        ${e}
      </style>
      <div class="knob-container">
        <div class="knob-wrapper">
          <div class="knob ${this.variant} ${this.disabled?"disabled":""}">
            ${t}
            <div class="indicator"></div>
          </div>
        </div>
        <div class="value-display">${Math.round(this._value).toString()}</div>
        <div class="label"><slot></slot></div>
      </div>
    `,this._knobElement=this.shadowRoot.querySelector(".knob"),this._indicatorElement=this.shadowRoot.querySelector(".indicator"),this._valueDisplay=this.shadowRoot.querySelector(".value-display"),this.updateKnobPosition()}}const E=':host{display:inline-block;--pad-size: 60px;--pad-color: var(--color-darker);--pad-border: var(--color-primary);--pad-active-color: var(--color-primary)}.pad-container{display:flex;flex-direction:column;align-items:center;width:var(--pad-size);-webkit-user-select:none;user-select:none}.pad{position:relative;width:var(--pad-size);height:var(--pad-size);background-color:var(--pad-color);border:2px solid var(--pad-border);box-shadow:0 0 10px var(--pad-border);transition:box-shadow .3s ease,transform .1s ease,background-color .2s ease;display:flex;justify-content:center;align-items:center}.pad:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 50%);z-index:1}.pad.pressed{transform:scale(.95)}.number{position:relative;z-index:2;font-family:Orbitron,sans-serif;font-size:24px;color:var(--pad-border);text-shadow:0 0 5px var(--pad-border);display:flex;justify-content:center;align-items:center}.label{margin-top:4px;font-family:Orbitron,sans-serif;font-size:12px;color:var(--color-white);text-transform:uppercase;letter-spacing:1px}.primary{--pad-border: var(--color-primary);--pad-active-color: var(--color-primary)}.secondary{--pad-border: var(--color-secondary);--pad-active-color: var(--color-secondary)}.danger{--pad-border: var(--color-danger);--pad-active-color: var(--color-danger)}.accent{--pad-border: var(--color-accent);--pad-active-color: var(--color-accent)}:host([active]) .pad{background-color:var(--pad-active-color);box-shadow:0 0 15px var(--pad-border)}:host([active]) .number{color:var(--color-white);text-shadow:0 0 5px var(--color-white)}:host([disabled]) .pad{opacity:.6;box-shadow:none}:host([disabled]) .number,:host([disabled]) .label{opacity:.6}:host([size="s"]) .pad{height:calc(var(--pad-size) / 2)}:host([size="s"]) .number{font-size:18px}';class m extends HTMLElement{static get observedAttributes(){return["number","variant","active","disabled","size"]}constructor(){super(),Object.defineProperty(this,"_number",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_padElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_numberElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.dispatchEvent(new CustomEvent("pad-click",{bubbles:!0,composed:!0,detail:{number:this._number}}))}}),Object.defineProperty(this,"handleMouseDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var t;this.disabled||(t=this._padElement)==null||t.classList.add("pressed")}}),Object.defineProperty(this,"handleMouseUp",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var t;this.disabled||(t=this._padElement)==null||t.classList.remove("pressed")}}),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){var e,t;this._padElement=(e=this.shadowRoot)==null?void 0:e.querySelector(".pad"),this._numberElement=(t=this.shadowRoot)==null?void 0:t.querySelector(".number"),this.addEventListener("click",this.handleClick),this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("mouseup",this.handleMouseUp)}disconnectedCallback(){this.removeEventListener("click",this.handleClick),this.removeEventListener("mousedown",this.handleMouseDown),this.removeEventListener("mouseup",this.handleMouseUp)}attributeChangedCallback(e,t,r){if(t!==r)switch(e){case"number":this._number=r!==null?Number(r):null,this.updateNumberDisplay();break;case"variant":case"active":case"disabled":case"size":this.render();break}}get number(){return this._number}set number(e){this._number=e,e===null?this.removeAttribute("number"):this.setAttribute("number",String(e)),this.updateNumberDisplay()}get variant(){return this.getAttribute("variant")||"primary"}get active(){return this.hasAttribute("active")}set active(e){e?this.setAttribute("active",""):this.removeAttribute("active")}get disabled(){return this.hasAttribute("disabled")}get size(){return this.getAttribute("size")||"default"}updateNumberDisplay(){this._numberElement&&(this._number!==null?(this._numberElement.textContent=String(this._number),this._numberElement.style.display="flex"):this._numberElement.style.display="none")}render(){if(!this.shadowRoot)return;const e=`
      .pad {
        cursor: ${this.disabled?"not-allowed":"pointer"};
      }
    `;this.shadowRoot.innerHTML=`
      <style>
        ${E}
        ${e}
      </style>
      <div class="pad-container">
        <div class="pad ${this.variant} ${this.active?"active":""} ${this.disabled?"disabled":""}">
          <div class="number">${this._number!==null?this._number:""}</div>
        </div>
        <div class="label"><slot></slot></div>
      </div>
    `,this._padElement=this.shadowRoot.querySelector(".pad"),this._numberElement=this.shadowRoot.querySelector(".number"),this.updateNumberDisplay()}}const C=":host{display:block}.typography{margin:var(--spacing-xs) 0;transition:all .3s ease;position:relative}.title{font-family:Orbitron,sans-serif;font-size:2rem;font-weight:700;letter-spacing:1px;color:var(--color-primary);text-shadow:var(--color-primary-glow)}.subtitle{font-family:Orbitron,sans-serif;font-size:1.5rem;font-weight:600;letter-spacing:.5px;color:var(--color-secondary);text-shadow:var(--color-secondary-glow)}.text{font-family:Raleway,sans-serif;font-size:1rem;font-weight:300;color:var(--color-white-muted);line-height:1.5}.primary{color:var(--color-primary);text-shadow:var(--color-primary-glow)}.secondary{color:var(--color-secondary);text-shadow:var(--color-secondary-glow)}.danger{color:var(--color-danger);text-shadow:var(--color-danger-glow)}.accent{color:var(--color-accent);text-shadow:var(--color-accent-glow)}.light-off{opacity:.5;text-shadow:none;color:var(--color-gray-light);filter:grayscale(80%)}.light-off.title,.light-off.subtitle{text-shadow:0 0 2px rgba(255,255,255,.3)}.typography:not(.light-off):hover{transform:translateY(-1px)}.title:not(.light-off):hover,.subtitle:not(.light-off):hover{text-shadow:0 0 15px currentColor}";class g extends HTMLElement{static get observedAttributes(){return["variant","type","light-off"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(e,t,r){t!==r&&this.render()}get variant(){return this.getAttribute("variant")||"default"}get type(){return this.getAttribute("type")||"text"}get lightOff(){return this.hasAttribute("light-off")}render(){if(!this.shadowRoot)return;let e="p";this.type==="title"?e="h1":this.type==="subtitle"&&(e="h2"),this.shadowRoot.innerHTML=`
      <style>${C}</style>
      <${e} class="typography ${this.type} ${this.variant} ${this.lightOff?"light-off":""}">
        <slot></slot>
      </${e}>
    `}}const M=':host{display:flex;flex-direction:column;height:100vh;width:100%;overflow:hidden}header{height:60px;background-color:var(--color-dark);color:var(--color-white);display:flex;align-items:center;padding:0 var(--spacing-sm);box-shadow:var(--shadow-sm);overflow:auto;position:relative;border-bottom:1px solid var(--color-primary);box-shadow:0 0 10px #ff00ff4d}header:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-primary));animation:neon-pulse 2s ease-in-out infinite}@keyframes neon-pulse{0%,to{opacity:.5}50%{opacity:1}}main{flex:1;overflow:auto;padding:var(--spacing-sm);background:radial-gradient(circle at center,rgba(255,0,255,.05) 0%,transparent 70%)}footer{height:40px;background-color:var(--color-dark);color:var(--color-white);display:flex;align-items:center;justify-content:center;padding:0 var(--spacing-sm);box-shadow:var(--shadow-up);overflow:auto;position:relative;border-top:1px solid var(--color-secondary);box-shadow:0 0 10px #00ffff4d}footer:before{content:"";position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,var(--color-secondary),var(--color-primary),var(--color-secondary));animation:neon-pulse 2s ease-in-out infinite}.header-content,.footer-content{width:100%}';class f extends HTMLElement{static get observedAttributes(){return["title"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}get title(){return this.getAttribute("title")||"Darkglow UI"}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>${M}</style>
      <header>
        <div class="header-content">
          <slot name="header"></slot>
        </div>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <div class="footer-content">
          <slot name="footer"></slot>
        </div>
      </footer>
    `,document.title=this.title,this.removeAttribute("title"))}}function L(o="darkglow"){customElements.define(`${o}-button`,d),customElements.define(`${o}-button-group`,c),customElements.define(`${o}-card`,h),customElements.define(`${o}-container`,u),customElements.define(`${o}-fader`,b),customElements.define(`${o}-grid`,p),customElements.define(`${o}-knob`,v),customElements.define(`${o}-pad`,m),customElements.define(`${o}-typography`,g),customElements.define(`${o}-layout`,f)}i.ButtonComponent=d,i.ButtonGroupComponent=c,i.CardComponent=h,i.ContainerComponent=u,i.FaderComponent=b,i.GridComponent=p,i.KnobComponent=v,i.LayoutComponent=f,i.PadComponent=m,i.TypographyComponent=g,i.registerComponents=L,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=darkglow.umd.cjs.map
