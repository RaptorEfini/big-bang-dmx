export class APCMasterSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const section = document.createElement('div');
    section.className = 'master-section';

    const transport = document.createElement('transport-controls');
    section.append(transport);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/apc-master-section.css';
    shadow.append(link, section);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apc-master-section': APCMasterSection;
  }
}

customElements.define('apc-master-section', APCMasterSection);
