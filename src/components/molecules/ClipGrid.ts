export class ClipGrid extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const grid = document.createElement('div');
    grid.className = 'grid';

    const rows = parseInt(this.getAttribute('rows') ?? '5', 10);
    const cols = parseInt(this.getAttribute('cols') ?? '8', 10);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pad = document.createElement('pad-button');
        grid.append(pad);
      }
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/clip-grid.css';
    shadow.append(link, grid);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'clip-grid': ClipGrid;
  }
}

customElements.define('clip-grid', ClipGrid);
