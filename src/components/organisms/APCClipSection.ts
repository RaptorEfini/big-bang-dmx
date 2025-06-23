export class APCClipSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const section = document.createElement('div');
    section.className = 'clip-section';

    const grid = document.createElement('clip-grid');
    section.append(grid);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/apc-clip-section.css';
    shadow.append(link, section);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apc-clip-section': APCClipSection;
  }
}

customElements.define('apc-clip-section', APCClipSection);
