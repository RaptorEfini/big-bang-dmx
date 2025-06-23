export class UiCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    const title = document.createElement('h2');
    title.textContent = this.getAttribute('title') ?? '';
    const content = document.createElement('div');
    content.className = 'content';
    const slot = document.createElement('slot');
    content.append(slot);
    const style = document.createElement('style');
    style.textContent = `
      .card {
        border: 1px solid #444;
        padding: 16px;
        border-radius: 8px;
        background: rgba(255,255,255,0.1);
        color: white;
      }
      h2 {
        margin-top: 0;
      }
    `;
    wrapper.append(title, content);
    shadow.append(style, wrapper);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-card': UiCard;
  }
}

customElements.define('ui-card', UiCard);
