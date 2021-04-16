import { LitElement, html, css} from 'lit';
import { property } from 'lit/decorators.js';
import './components/panels/w3d-material-panel';

export class Wtvr3dEditor extends LitElement {
  @property({ type: String }) title = 'Wtvr3d Editor';

  static styles = css`
    :host {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: var(--editor-text);
      margin: 0 auto;
      text-align: center;
      background-color: var(--editor-background);
    }

    main {
      position : relative;
      flex-grow: 1;
      align-self: stretch;
      padding : 5px;
      display : flex;
      flex-direction : column;
      max-height : 100%;
    }
  `;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <w3d-material-panel></w3d-material-panel>
      </main>
    `;
  }
}
