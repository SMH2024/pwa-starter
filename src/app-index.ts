// app-index.ts
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './pages/app-home';
import './components/header';
import './styles/global.css';
import { router } from './router';
import { initializeTheme, toggleTheme } from './utils/theme-manager';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
    main {
      padding: 16px;
      background: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
    }

    .theme-toggle-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ('startViewTransition' in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      } else {
        this.requestUpdate();
      }
    });

    // Initialize the theme on first load
    initializeTheme();
  }

  render() {
    return html`
      ${router.render()}
      <button class="theme-toggle-btn" @click=${this.handleThemeToggle}>
        Toggle Theme
      </button>
    `;
  }

  handleThemeToggle() {
    // Assuming 'light' is the default or currently active theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    toggleTheme(currentTheme as 'light' | 'dark');
  }
}
