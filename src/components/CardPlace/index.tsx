import { useContext } from "react";
import Styles from "./styles";
import { GetAllPlacesContext } from "../../context/GetAllPlacesContext";
import { ModalEditContext } from "../../context/ModalEditContext";

export interface Places {
  id: string;
  country: {
    flag: string;
    name: string;
  };
  meta: string;
  place: string;
}

const CardPlace = () => {
  const { places } = useContext(GetAllPlacesContext);
  const { setIsModalVisible } = useContext(ModalEditContext);

  const editConfig = (place: Places) => {
    setIsModalVisible(true);
  };

  return (
    <>
      {places.map((place) => (
        <Styles key={place.id}>
          <div className="card-flag-and-name">
            <img
              className="card-flag"
              src={place.country.flag}
              alt={place.country.name}
            />
            <p className="card-country-name">{place.country.name}</p>
          </div>
          <div className="edit-and-delete-place">
            <img
              className="delete-place"
              src="./assets/img/delete.png"
              alt="Excluir Lugar"
            />
            <img
              className="edit-place"
              src="./assets/img/edit.png"
              alt="Editar Lugar"
              onClick={() => editConfig(place)}
            />
          </div>
          <img src="./assets/img/line.png" alt="Divisor" className="line" />
          <div className="place-and-meta">
            <p className="place-description">{place.place}</p>
            <p className="meta-date">{place.meta}</p>
          </div>
        </Styles>
      ))}
    </>
  );
};

export default CardPlace;
