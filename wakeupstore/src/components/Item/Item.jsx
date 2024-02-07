import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <div className="card">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.titulo}
      />
      <div className="card-body">
        <h5 className="card-title tituloscard">{producto.titulo}</h5>
        <p className="card-text">Precio ${producto.precio}</p>
        <Link
          to={`/item/${producto.id}`}
          className="btn btn-block btn-dark text-white rounded-pill"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};
