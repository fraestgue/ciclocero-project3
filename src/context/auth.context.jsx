import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthConext = createContext();

function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);

  const authenticateUser = async () => {
    try {
      const response = await service.get("/auth/verify");
      setIsLoggedIn(true);
      setLoggedUserId(response.data._id);
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      setLoggedUserId(null);
    }
  };
  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser,
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthConext.Provider value={passedContext}>
      {props.children}
    </AuthConext.Provider>
  );
}

export { AuthConext, AuthWrapper };
