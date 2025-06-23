export class LedIndicator extends HTMLElement {
  private led: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.led = document.createElement('div');
    this.led.className = 'led';
    if (this.hasAttribute('on')) {
      this.led.classList.add('on');
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/led-indicator.css';
    shadow.append(link, this.led);
  }

  static get observedAttributes() {
    return ['on'];
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'on') {
      if (value !== null) {
        this.led.classList.add('on');
      } else {
        this.led.classList.remove('on');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'led-indicator': LedIndicator;
  }
}

customElements.define('led-indicator', LedIndicator);
