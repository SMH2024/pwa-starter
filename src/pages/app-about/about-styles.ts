// about-styles.ts
import { css } from 'lit';

// Specific styles for the about page with material theme support
export const styles = css`
  @media (min-width: 1000px) {
    sl-card {
      max-width: 70vw;
      background: var(--surface, #F6FBF3);
      color: var(--on-surface, #181D18);
      border: 1px solid var(--outline, #717971);
    }
  }

  p {
    margin: 0 0 16px 0;
  }
`;
