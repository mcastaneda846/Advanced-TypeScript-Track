// Importa los componentes necesarios de react-router-dom
// BrowserRouter: maneja la navegación en la app
// Routes: contenedor de rutas
// Route: define cada ruta individual
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login"; // Importa el componente Login desde la carpeta components
import { useEffect } from "react"; // Hook de React que permite ejecutar efectos secundarios
import { UserStore } from "./utils/UserStore"; // Importa la clase UserStore que contiene el CRUD

// Componente simple que representa la vista después del login
const Dashboard = () => <h1>Bienvenido</h1>;

function App() {
  // useEffect se ejecuta cuando el componente se monta (una sola vez)
  useEffect(() => {
    // Se crea una instancia de la clase UserStore
    const store = new UserStore();

    // Mensaje en consola para identificar la prueba
    console.log("---- CREATE (con decorador) ----");

    // Se ejecuta el método create
    // Aquí es donde el decorador entra en acción
    console.log(
      store.create({
        id: 99,
        username: "test",
        password: "1234",
      }),
    );
  }, []); // El array vacío indica que solo se ejecuta al inicio

  return (
    // BrowserRouter habilita el sistema de rutas en la aplicación
    <BrowserRouter>
      {/* Contenedor de todas las rutas */}
      <Routes>
        {/* Ruta principal (/) que muestra el Login */}
        <Route path="/" element={<Login />} />

        {/* Ruta /dashboard que muestra el Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporta el componente para ser usado en main.tsx
export default App;
