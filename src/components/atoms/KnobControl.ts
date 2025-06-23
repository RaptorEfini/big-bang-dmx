export class KnobControl extends HTMLElement {
  private input: HTMLInputElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.input = document.createElement('input');
    this.input.type = 'range';
    this.input.min = this.getAttribute('min') ?? '0';
    this.input.max = this.getAttribute('max') ?? '127';
    this.input.value = this.getAttribute('value') ?? this.input.min;
    this.input.className = 'knob';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/knob-control.css';
    shadow.append(link, this.input);
  }

  static get observedAttributes() {
    return ['min', 'max', 'value'];
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'min') {
      this.input.min = value ?? '0';
    } else if (name === 'max') {
      this.input.max = value ?? '127';
    } else if (name === 'value') {
      this.input.value = value ?? this.input.min;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'knob-control': KnobControl;
  }
}

customElements.define('knob-control', KnobControl);
