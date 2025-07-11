import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";

createRoot(document.getElementById("root")!).render(<App />);
