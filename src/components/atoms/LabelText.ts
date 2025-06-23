export class LabelText extends HTMLElement {
  private span: HTMLSpanElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.span = document.createElement('span');
    this.span.className = 'label';
    this.span.textContent = this.getAttribute('text') ?? '';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/label-text.css';
    shadow.append(link, this.span);
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'text') {
      this.span.textContent = value ?? '';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'label-text': LabelText;
  }
}

customElements.define('label-text', LabelText);
