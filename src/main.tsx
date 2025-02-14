import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import Router
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/tech-swai">
        <App />
    </BrowserRouter>
);
