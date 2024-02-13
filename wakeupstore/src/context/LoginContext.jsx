import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const irAlInicio = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchDataUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          setIsLoggedIn(true);
          const userDoc = await getDoc(doc(db, "usuarios", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("No se encontró información para el usuario actual.");
          }
        } catch (error) {
          console.error(
            "Error al recuperar la información del usuario:",
            error
          );
        }
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    });

    return () => fetchDataUser();
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUserData(null);
      irAlInicio("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        user: userData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
