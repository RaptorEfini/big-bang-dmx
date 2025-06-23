export class PadButton extends HTMLElement {
  private button: HTMLButtonElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.button = document.createElement('button');
    this.button.className = 'pad';
    this.button.textContent = this.getAttribute('label') ?? '';
    if (this.hasAttribute('active')) {
      this.button.classList.add('active');
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/pad-button.css';
    shadow.append(link, this.button);
  }

  static get observedAttributes() {
    return ['label', 'active'];
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'label') {
      this.button.textContent = value ?? '';
    } else if (name === 'active') {
      if (value !== null) {
        this.button.classList.add('active');
      } else {
        this.button.classList.remove('active');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pad-button': PadButton;
  }
}

customElements.define('pad-button', PadButton);
