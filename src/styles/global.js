import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
  color-scheme: light dark;
  color: hsl(${({ theme }) => theme.COLORS.NEUTRAL_200});
  background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_GRAY_800});
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body, input, button, textarea {
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  font-synthesis: none;

  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
    margin: 0 106px 0 123px;
}


/* button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
} */

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}


`;
