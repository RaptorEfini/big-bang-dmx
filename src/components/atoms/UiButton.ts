export class UiButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.textContent = this.getAttribute('label') ?? 'Button';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/ui-button.css';
    shadow.append(link, button);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': UiButton;
  }
}

customElements.define('ui-button', UiButton);
