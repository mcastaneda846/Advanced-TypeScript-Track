//Este archivo es el punto de entrada de la aplicación

import React from "react"; // Librería principal de React,necesaria para usar JSX y componentes
import ReactDOM from "react-dom/client"; // // ReactDOM para renderizar la app en el navegador, "client" indica que estamos en entorno web moderno

import App from "./App";

// StrictMode ayuda a detectar errores, malas prácticas y código inseguro

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
