import "./Card.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Card({ name, field, image, color, deleteUser }) {
  return (
    <div className="card">
      <AiFillCloseCircle size={25} className="deletar" onClick={deleteUser} />
      <div style={{ backgroundColor: color }} className="cabecalho">
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{field}</h5>
      </div>
    </div>
  );
}

export default Card;
