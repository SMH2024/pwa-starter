// header.ts
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';
import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'PWA Starter';
  @property({ type: Boolean }) enableBack = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--primary);
      color: var(--on-primary);
      padding: 12px;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      -webkit-app-region: drag;
    }

    h1 {
      margin: 0;
      font-size: 12px;
      font-weight: bold;
    }

    #back-button-block {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `;

  render() {
    return html`
      <header>
        <div id="back-button-block">
          ${this.enableBack
            ? html`<sl-button size="small" href="${resolveRouterPath()}">Back</sl-button>`
            : null}
          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}
