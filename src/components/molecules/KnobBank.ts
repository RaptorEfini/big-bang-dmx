export class KnobBank extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const bank = document.createElement('div');
    bank.className = 'bank';

    const count = parseInt(this.getAttribute('count') ?? '8', 10);
    for (let i = 0; i < count; i++) {
      const knob = document.createElement('knob-control');
      bank.append(knob);
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/knob-bank.css';
    shadow.append(link, bank);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'knob-bank': KnobBank;
  }
}

customElements.define('knob-bank', KnobBank);
