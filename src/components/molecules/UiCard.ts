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
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/ui-card.css';
    wrapper.append(title, content);
    shadow.append(link, wrapper);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-card': UiCard;
  }
}

customElements.define('ui-card', UiCard);
