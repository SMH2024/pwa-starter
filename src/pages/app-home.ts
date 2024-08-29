// app-home.ts
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = [
    styles,
    css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px;
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
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
              <h2>Welcome to the Home Page</h2>
            </div>
            <p>
              This is an example of a home page that adapts to the current theme!
            </p>
          </sl-card>
        </div>
      </main>
    `;
  }
}
