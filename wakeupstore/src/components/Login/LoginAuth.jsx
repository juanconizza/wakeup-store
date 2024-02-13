import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { userLogin, auth } from "../../firebase/config";

export const LoginAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(LoginContext);
  const [errorMessage, setErrorMessage] = useState(null); // Estado para almacenar el mensaje de error si login es incorrecto.
  const irAlUserPanel = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Lógica para iniciar sesión con Firebase
      await userLogin(auth, data.email, data.password);
      login();
      return irAlUserPanel("/panel"); // Llevamos al usuario al Panel de Usuario si el login es correcto
    } catch (error) {
      // Mostrar mensaje de error si las credenciales son incorrectas
      setErrorMessage(
        "Usuario o Contraseña Incorrectos.  Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-4 mx-auto align-items-center">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">Este campo es requerido</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-danger">Este campo es requerido</span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-btn btn-block btn-success text-white rounded-pill"
            >
              Iniciar Sesión
            </button>
          </form>
          {/* Mostrar mensaje de error si existe */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <div className="mt-3 mb-3">
            <h5>¿Nuevo?</h5>
            <Link
              to="/registro"
              className="btn btn-block btn-dark text-white rounded-pill"
            >
              Regístrate aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
