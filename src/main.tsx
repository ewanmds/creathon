if (process.env.NODE_ENV === 'development' || (typeof window !== 'undefined' && window.location.hostname === 'localhost')) void import('code-to-figma');


  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  