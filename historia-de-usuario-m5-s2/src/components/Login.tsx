import { useState } from "react"; // Hook de React para manejar estado dentro del componente
import { authenticate } from "../utils/auth"; // Importa la función authenticate que valida credenciales
import { useNavigate } from "react-router-dom"; // Hook de react-router-dom para navegar entre rutas

// Definición del componente Login
export const Login = () => {
  // Estado para guardar el username ingresado
  const [username, setUsername] = useState("");

  // Estado para guardar la contraseña
  const [password, setPassword] = useState("");

  // Estado para mostrar mensajes (éxito o error)
  const [message, setMessage] = useState("");

  // Hook que permite redireccionar a otra ruta
  const navigate = useNavigate();

  // Función que se ejecuta cuando el usuario hace click en "Ingresar"
  const handleLogin = () => {
    // Llama a la función authenticate con los datos ingresados
    const user = authenticate(username, password);

    // Si el usuario existe (credenciales correctas)
    if (user) {
      // Muestra mensaje de éxito
      setMessage("Login exitoso");

      // Redirige al dashboard después de 1 segundo
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      // Si las credenciales son incorrectas, muestra error
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Usuario"
        // Cada vez que el usuario escribe, actualiza el estado username
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        // Actualiza el estado password
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Ingresar</button>
      <p>{message}</p>
    </div>
  );
};
