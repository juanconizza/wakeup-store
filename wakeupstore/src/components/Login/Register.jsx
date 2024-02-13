import { useState, useContext } from "react";

import { useForm } from "react-hook-form";
import { auth, crearUser, db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const userEmail = watch("email");
  const irAlUserPanel = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const { login } = useContext(LoginContext);

  const onSubmit = async (data) => {
    try {
      if (data.email !== data.confirmEmail) {
        throw new Error(
          "El correo electrónico y la confirmación de correo electrónico no coinciden."
        );
      }

      // Crear el usuario en Firebase Authentication
      const userCredential = await crearUser(auth, data.email, data.password);
      const user = userCredential.user;

      // Agregar el usuario a la colección 'usuarios' en Firestore y especificar manualmente el ID del documento asi coindide con el UID creado por el autenticador de Google
      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: data.firstName,
        apellido: data.lastName,
        email: data.email,
      });

      setShowMessage(true);
      setTimeout(() => {
        irAlUserPanel("/panel");
        login();
      }, 2000);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4 mx-auto align-items-center">
          <h2>¡Regístrate!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-danger">Este campo es requerido</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-danger">Este campo es requerido</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
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
              <label htmlFor="confirmEmail" className="form-label">
                Confirmar correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="confirmEmail"
                {...register("confirmEmail", {
                  required: true,
                  validate: (value) =>
                    value === userEmail ||
                    "Los correos electrónicos no coinciden",
                })}
              />
              {errors.confirmEmail && (
                <span className="text-danger">
                  {errors.confirmEmail.message}
                </span>
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
              className="mb-3 btn btn btn-btn btn-block btn-success text-white rounded-pill-primary"
            >
              Registrarse
            </button>
          </form>
          {showMessage && (
            <div className="alert alert-success mt-3" role="alert">
              ¡Gracias por registrarte!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
