import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthWrapper } from "./context/auth.context.jsx";
import { BrowserRouter } from "react-router-dom";
import globalStyle from "./globalStyle.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthWrapper>
            <App />
        </AuthWrapper>
    </BrowserRouter>
);
