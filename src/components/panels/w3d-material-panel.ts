import { LitElement, html, css } from 'lit';

class W3DMaterialPanel extends LitElement {
    static styles =  css`
    :host {
        display : flex;
        flex-direction: column;
        width : 100%;
    }
    div {
        display : flex;
        flex-direction: column;
        position : relative;
    }
    textarea {
        align-self : stretch;
        resize: vertical;
        min-height : 200px;
    }
    `;

    render() {
        return html`
        <div>
        <label for="vertex">Vertex Shader</label>
        <textarea id="vertex"></textarea>
        </div>
        <div>
        <label for="fragment">Fragment Shader</label>
        <textarea id="fragment"></textarea>
        </div>
        `;
    }
}
customElements.define('w3d-material-panel', W3DMaterialPanel);