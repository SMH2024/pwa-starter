// shared-styles.ts
import { css } from 'lit';

// Global shared styles including material theme integration
export const styles = css`
  :host {
    --primary: var(--primary, #2E6A44);
    --on-primary: var(--on-primary, #FFFFFF);
    --background: var(--background, #F6FBF3);
    --on-background: var(--on-background, #181D18);
  }

  main {
    margin-top: 34px;
    padding: 12px;
    background: var(--background);
    color: var(--on-background);
  }

  button {
    background-color: var(--primary);
    color: var(--on-primary);
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #00522B; /* Darker primary variant */
  }
`;
