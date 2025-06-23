export class FaderBank extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const bank = document.createElement('div');
    bank.className = 'bank';

    const count = parseInt(this.getAttribute('count') ?? '8', 10);
    for (let i = 0; i < count; i++) {
      const fader = document.createElement('fader-control');
      bank.append(fader);
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/fader-bank.css';
    shadow.append(link, bank);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fader-bank': FaderBank;
  }
}

customElements.define('fader-bank', FaderBank);
