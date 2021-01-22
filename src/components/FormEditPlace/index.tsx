// import "./style.css";
import { useContext } from "react";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import { EditPlaceContext } from "../../context/EditPlaceContext";
import { GetPlacesContext } from "../../context/GetPlacesContext";
import { db } from "../../utils/firebase";

const FormEditPlace = () => {

  const { places, setPlaces } = useContext(GetPlacesContext);
  const history = useHistory();
  const { dataPlaceEdit, setDataPlaceEdit } = useContext(EditPlaceContext);

  const handleChangePlaceAndMeta = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDataPlaceEdit({
      ...dataPlaceEdit,
      [name]: value,
    });
  };

  const editPlaceFirebase = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await db
        .collection("Contries")
        .doc(dataPlaceEdit.id)
        .update(dataPlaceEdit);

      const ediPlaceMap = places.map((place: any) =>
        place.id === dataPlaceEdit.id ? { ...place, ...dataPlaceEdit } : place
      );

      setPlaces(ediPlaceMap);

      history.push("./");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <form onSubmit={editPlaceFirebase} className="form-content">
          <div className="input-group">
            <label className="input-label" htmlFor="form-place">
              Local
            </label>
            <input
              type="text"
              name="place"
              className="input-group-height place-width"
              id="form-place"
              placeholder="Digite o local que deseja conhecer"
              required
              value={dataPlaceEdit.place}
              onChange={(e) => handleChangePlaceAndMeta(e)}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="form-meta">
              Meta
            </label>
            <InputMask
              mask="99/9999"
              type="text"
              name="meta"
              className="input-group-height meta-width"
              id="form-meta"
              placeholder="mês/ano"
              required
              value={dataPlaceEdit.meta}
              onChange={(e) => handleChangePlaceAndMeta(e)}
            />
          </div>

          <button type="submit" className="form-button-submit">
            Editar
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormEditPlace;
