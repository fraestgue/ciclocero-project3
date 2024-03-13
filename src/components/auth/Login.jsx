import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/config.service";
import { AuthContext } from "../../context/auth.context";

function Login() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = async (event) => {
    event.preventDefault()

    const credentials = {
        email,
        username,
        password
    } //como hacer para usar uno u otro(email o username)

    try {
        //validamos credenciale use
        const response = service.post("/auth/login", credentials)
        console.log(response)

        //almacenamos el token de forma segura
        localStorage.setItem("authToken", (await response).data.authToken)

        //valimos el token y actualizamos los estados de auth del user
        await authenticateUser()

        //aqui queremos que se muestre la pagina home al estar logeado, no redirigir

        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>

      <h1>Formulario de Acceso</h1>

      <form onSubmit={handleLogin}>
        {/*Aqui para poner email o user, como hacer el input */}
        <label>Correo Electronico o Username:</label>
        <input
          type="string"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <button type="submit">Acceder</button>
      </form>
      
    </div>
  );
}

export default Login;
