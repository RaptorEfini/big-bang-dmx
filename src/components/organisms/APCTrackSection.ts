export class APCTrackSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const section = document.createElement('div');
    section.className = 'track-section';

    const knobs = document.createElement('knob-bank');
    const faders = document.createElement('fader-bank');
    section.append(knobs, faders);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/apc-track-section.css';
    shadow.append(link, section);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apc-track-section': APCTrackSection;
  }
}

customElements.define('apc-track-section', APCTrackSection);
