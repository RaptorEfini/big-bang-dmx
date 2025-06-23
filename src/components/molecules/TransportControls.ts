export class TransportControls extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.className = 'controls';

    const labels = (this.getAttribute('labels') ?? 'Play,Stop,Record')
      .split(',')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    for (const label of labels) {
      const btn = document.createElement('ui-button');
      btn.setAttribute('label', label);
      wrapper.append(btn);
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/transport-controls.css';
    shadow.append(link, wrapper);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'transport-controls': TransportControls;
  }
}

customElements.define('transport-controls', TransportControls);
