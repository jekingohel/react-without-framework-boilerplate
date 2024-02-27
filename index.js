import React from "react";
import App from "./src/App";
import { createRoot } from "react-dom/client";

// Render your React component instead
const root = createRoot(document.getElementById("root"));
root.render(<App />);
