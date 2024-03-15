import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/config.service";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSignup = async (event) => {
    event.preventDefault();

    const newUser = {
      email,
      username,
      password,
    };

    try {
      await service.post("/auth/signup", newUser);
      //como esta en la misma pagina, como hacer el cambio a login
    } catch (error) {
      let errorCode = error.response.status;
      let errorMessage = error.response.data.message;
      if (errorCode === 400) {
        setErrorMessage(errorMessage);
      } else
        console.log(error);

        navigate("/error500") 
    }
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>

      <form onSubmit={handleSignup}>
        <label>Correo Electronico:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="tu email"
        />

        <br />

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
        />

        <br />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="*********"
        />

        <br />

        <p>{errorMessage}</p>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Signup;
