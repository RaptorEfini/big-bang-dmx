export class UiButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.textContent = this.getAttribute('label') ?? 'Button';
    const style = document.createElement('style');
    style.textContent = `
      button {
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid #888;
        background: #222;
        color: white;
        cursor: pointer;
      }
    `;
    shadow.append(style, button);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': UiButton;
  }
}

customElements.define('ui-button', UiButton);
