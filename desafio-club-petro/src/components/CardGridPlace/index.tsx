import "./style.css";
import Edit from "../../assets/img/edit.png"
import Delete from "../../assets/img/delete.png"
import { useHistory } from "react-router-dom";

const CardGridPlace = () => {
  const history = useHistory()
  return (
    <section className="cardGridPlace container">
      <div className="wrapper">
        <div className="card">
          <div className="fla-and-title">
            <img className="card-country-flag" src="https://restcountries.eu/data/bra.svg" alt=""/>
            <h2 className="card-country-title">Brasil</h2>
          </div>
          <div className="edit-and-delet-place">
            <img onClick={() => history.push("./editar")} className="edit-place" src={Edit} alt="Editar"/>
            <img className="delete-place" src={Delete} alt="Excluir"/>
          </div>
          <hr className="line-divisor"/>
          <div className="card-place-and-meta">
            <p className="card-place">Local: Balneario Camboriu </p>
            <p className="card-meta">Meta: 04/2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGridPlace;
