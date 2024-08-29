// router.ts
import { html } from 'lit';
import { Router } from '@thepassle/app-tools/router.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';

import './pages/app-home.js';

export const router = new Router({
  routes: [
    {
      path: resolveRouterPath(),
      title: 'Home',
      render: () => html`<app-home></app-home>`,
    },
    {
      path: resolveRouterPath('about'),
      title: 'About',
      plugins: [lazy(() => import('./pages/app-about/app-about.js'))],
      render: () => html`<app-about></app-about>`,
    },
  ],
});

export function resolveRouterPath(unresolvedPath?: string) {
  const baseURL = (import.meta as any).env.BASE_URL || '/';
  return unresolvedPath ? `${baseURL}${unresolvedPath}` : baseURL;
}
