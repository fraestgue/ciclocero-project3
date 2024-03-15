import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/config.service";
import { AuthContext } from "../../context/auth.context"

function Login() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCredentialChange = (event) => setCredential(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = async (event) => {
    event.preventDefault();

    const credentials = {
      credential,
      password,
    }; //como hacer para usar uno u otro(email o username)

    try {
      //validamos credenciale use
      const response = service.post("/auth/login", credentials);
      console.log(response);

      //almacenamos el token de forma segura
      localStorage.setItem("authToken", (await response).data.authToken);

      //valimos el token y actualizamos los estados de auth del user
      await authenticateUser();

      //aqui queremos que se muestre la pagina home al estar logeado, no redirigir
      

    } catch (error) {
      console.log(error);
      let errorCode = error.response.status;
      let errorMessage = error.response.data.message;
      if (errorCode === 400) {
        setErrorMessage(errorMessage);
      } else console.log(error);

      navigate("/error500");
    }
  };

  return (
    <div>
      <h1>Formulario de Acceso</h1>

      <form onSubmit={handleLogin}>
        {/*Aqui para poner email o user, como hacer el input */}
        <label>Correo Electronico o Username:</label>
        <input
          type="string"
          name="email"
          value={credential}
          onChange={handleCredentialChange}
          placeholder="email o username"
        />

        <br />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="**********"
        />

        <br />

        <button type="submit">Acceder</button>
      </form>
    </div>
  );
}

export default Login;
