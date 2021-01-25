import { useContext } from "react";
import Styles from "./styles";
import { GetAllPlacesContext } from "../../context/GetAllPlacesContext";
import { ModalEditContext } from "../../context/ModalEditContext";
import { EditPlaceContext } from "../../context/EditPlaceContext";
import { db } from "../../utils/firebase";

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
  const { places, setPlaces } = useContext(GetAllPlacesContext);
  const { setIsModalVisible } = useContext(ModalEditContext);
  const { setDataPlaceEdit } = useContext(EditPlaceContext);

  const editConfig = (place: Places) => {
    setIsModalVisible(true);
    setDataPlaceEdit(place);
  };

  const deletePlace = async (id: string) => {
    try {
      db.collection("Contries").doc(id).delete();

      const deleteFilter = places.filter(
        (placeFilter) => placeFilter.id !== id
      );

      setPlaces(deleteFilter);
    } catch (error) {
      console.log(error);
    }
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
              onClick={() => deletePlace(place.id)}
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
            <p className="place-description">Local: {place.place}</p>
            <p className="meta-date">Meta: {place.meta}</p>
          </div>
        </Styles>
      ))}
    </>
  );
};

export default CardPlace;
