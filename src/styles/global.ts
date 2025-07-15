import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: "320px", // Mobile pequeno
  sm: "576px", // Mobile
  md: "768px", // Tablet
  lg: "992px", // Desktop pequeno
  xl: "1200px", // Desktop
  xxl: "1400px", // Desktop grande
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #8000ff;
    --primary-hover: #5500aa;
    --background-primary: #121214;
    --background-secondary: rgb(51, 0, 103);
    --text-primary: #e1e1e6;
    --text-secondary: rgba(255, 255, 255, 0.6);
    --text-muted: rgba(255, 255, 255, 0.5);
    --border-color: rgba(255, 255, 255, 0.2);
    --shadow-primary: rgba(128, 0, 255, 0.3);
    --border-radius: 6px;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  @media (max-width: ${breakpoints.lg}) {
    html { font-size: 15px; }
  }

  @media (max-width: ${breakpoints.md}) {
    html { font-size: 14px; }
  }

  @media (max-width: ${breakpoints.sm}) {
    html { font-size: 13px; }
  }

  body {
    background: linear-gradient(
      180deg, 
      var(--background-primary) 0%, 
      var(--background-primary) 60%, 
      var(--background-secondary) 100%
    );
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: var(--text-primary);
    font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  :focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;
