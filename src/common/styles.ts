import { css } from 'lit';

export const button = css`
button {
    background-color : var(--editor-background);
    border-radius : 5px;
    padding : 0.5em 1em;
    border-color : var(--editor-border);
    color : var(--editor-text);
    margin : 0.1em 0.5em;
    transition : color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}
button.highlighted {
    border-color : var(--editor-text);
}
button:hover {
    background-color : var(--editor-focus);
    color : var(--editor-text);
    border-color : var(--editor-focus);
}
`;