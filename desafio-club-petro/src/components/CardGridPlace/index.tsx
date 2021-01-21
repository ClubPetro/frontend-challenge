import "./style.css";
import Edit from "../../assets/img/edit.png";
import Delete from "../../assets/img/delete.png";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GetPlacesContext } from "../../context/GetPlacesContext";
import { EditPlaceContext } from "../../context/EditPlaceContext";
import { db } from "../../utils/firebase";
import { Place } from "../../utils/intefaces";

const CardGridPlace = () => {
  const history = useHistory();

  const { places, setPlaces } = useContext(GetPlacesContext);
  const { setDataPlaceEdit } = useContext(EditPlaceContext);

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

  const editModePlace = (place) => {
    history.push("./editar");
    const placeForEdit = {
      id: place.id,
      place: place.place,
      meta: place.meta,
    };
    setDataPlaceEdit(placeForEdit);
  };

  return (
    <section className="cardGridPlace container">
      <div className="wrapper">
        {places.map((place: Place) => (
          <div key={place.id} className="card">
            <div className="fla-and-title">
              <img
                className="card-country-flag"
                src={place.country.flag}
                alt={place.place}
              />
              <h2 className="card-country-title">{place.country.name}</h2>
            </div>
            <div className="edit-and-delet-place">
              <img
                onClick={() => history.push("./editar")}
                className="edit-place"
                src={Edit}
                alt="Editar"
              />
              <img
                onClick={() => deletePlace(place.id)}
                className="delete-place"
                src={Delete}
                alt="Excluir"
              />
            </div>
            <hr className="line-divisor" />
            <div className="card-place-and-meta">
              <p className="card-place">Local: {place.place}</p>
              <p className="card-meta">Meta: {place.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGridPlace;
