// theme-manager.ts

// Define allowed theme keys as a union of string literals
type ThemeKey = 'light' | 'light-mc' | 'light-hc' | 'dark' | 'dark-mc' | 'dark-hc';

// Define paths for each theme CSS file
const themePaths: Record<ThemeKey, string> = {
  light: '/path/to/light.css',
  'light-mc': '/path/to/light-mc.css',
  'light-hc': '/path/to/light-hc.css',
  dark: '/path/to/dark.css',
  'dark-mc': '/path/to/dark-mc.css',
  'dark-hc': '/path/to/dark-hc.css',
};

// Function to apply the selected theme by setting the href of the link element
export function applyTheme(theme: ThemeKey) {
  const themeLink = document.getElementById('theme-link') as HTMLLinkElement;

  if (!themeLink) {
    // Create the link element if it doesn't exist
    const newLink = document.createElement('link');
    newLink.id = 'theme-link';
    newLink.rel = 'stylesheet';
    newLink.href = themePaths[theme];
    document.head.appendChild(newLink);
  } else {
    // Update the href of the existing link element
    themeLink.href = themePaths[theme];
  }
}

// Function to toggle themes based on a button click or any other interaction
export function toggleTheme(currentTheme: ThemeKey) {
  const newTheme: ThemeKey = currentTheme.includes('light') ? 'dark' : 'light';
  applyTheme(newTheme);
  // Save the theme preference if needed, e.g., in localStorage
  localStorage.setItem('theme', newTheme);
}

// Function to initialize theme based on user preference or system settings
export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') as ThemeKey | null;
  const defaultTheme: ThemeKey = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(savedTheme || defaultTheme);
}

// Initialize the theme on load
initializeTheme();
