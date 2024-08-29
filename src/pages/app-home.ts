// app-home.ts
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {
  @property() message = 'Welcome!';

  static styles = [
    styles,
    css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px;
      }

      sl-card {
        width: 70vw;
        margin-bottom: 16px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }
      }
    `,
  ];

  render() {
    return html`
      <app-header></app-header>
      <main>
        <div id="welcomeBar">
          <sl-card>
            <div slot="header">
              <h2>${this.message}</h2>
            </div>
            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">documentation</a>.
            </p>
          </sl-card>
          <sl-card>
            <h2>Technology Used</h2>
            <ul>
              <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
              <li><a href="https://lit.dev">Lit</a></li>
              <li><a href="https://shoelace.style/">Shoelace</a></li>
              <li><a href="https://github.com/thepassle/app-tools/blob/master/router/README.md">App Tools Router</a></li>
            </ul>
          </sl-card>
          <sl-button href="${resolveRouterPath('about')}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `;
  }
}
