export class APC40Template extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.className = 'apc40';

    const track = document.createElement('apc-track-section');
    const clip = document.createElement('apc-clip-section');
    const master = document.createElement('apc-master-section');

    wrapper.append(track, clip, master);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/apc40-template.css';
    shadow.append(link, wrapper);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apc40-template': APC40Template;
  }
}

customElements.define('apc40-template', APC40Template);
