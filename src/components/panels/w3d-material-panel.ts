import { LitElement, html, css } from 'lit';
import { button } from '../../common/styles';

class W3DMaterialPanel extends LitElement {
    static styles =  [css`
    :host {
        display : flex;
        flex-direction: column;
        width : 100%;
        flex-grow : 1;
    }
    div {
        display : flex;
        flex-direction: column;
        position : relative;
        align-items : flex-start;
        color : var(--editor-text);
        margin-top : 1em;
        transition : color 0.2s ease-out;
    }
    div:focus-within{
        color : var(--editor-focus);
    }
    section {
        flex-grow : 1;
        overflow : auto;
    }
    textarea {
        align-self : stretch;
        resize: vertical;
        min-height : 200px;
        background-color : var(--editor-background);
        color : var(--editor-text);
        font-family : Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
        font-size : 14;
        border-radius : 5px;
        border-width: 1px;
        border-color: var(--editor-border);
        margin-top : 0.3em;
        transition : outline-color 0.2s ease-out;
        outline-color : var(--editor-background)
    }
    textarea:focus {
        outline : 2px solid var(--editor-focus);
    }
    .button-bar {
        display : flex;
        flex-direction : row;
        justify-content : flex-end;
        margin : 0.5em 0em;
        padding : 0 0.5em;
    }
    `,button];

    render() {
        return html`
        <section>
        <div>
        <label for="vertex">Vertex Shader</label>
        <textarea id="vertex"></textarea>
        </div>
        <div>
        <label for="fragment">Fragment Shader</label>
        <textarea id="fragment"></textarea>
        </div>
        </section>
        <div class="button-bar">
            <button>Cancel</button>
            <button class="highlighted">Save</button>
        </div>
        `;
    }
}
customElements.define('w3d-material-panel', W3DMaterialPanel);