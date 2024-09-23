// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import "@fontsource-variable/roboto-condensed";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
