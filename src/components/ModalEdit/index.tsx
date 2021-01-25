import { useContext } from "react";
import { EditPlaceContext } from "../../context/EditPlaceContext";
import { ModalEditContext } from "../../context/ModalEditContext";
import Styles from "./styles";
import InputMask from "react-input-mask";
import { db } from "../../utils/firebase";
import { GetAllPlacesContext } from "../../context/GetAllPlacesContext";

const ModalEdit = () => {
  const { dataPlaceEdit, setDataPlaceEdit } = useContext(EditPlaceContext);
  const { setIsModalVisible } = useContext(ModalEditContext);
  const { places, setPlaces } = useContext(GetAllPlacesContext);

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

      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      <div className="container">
        <div className="contente">
          <div className="flag-and-Name">
            <img
              className="flag"
              src={dataPlaceEdit.country.flag}
              alt={dataPlaceEdit.country.name}
            />
            <p className="country-name">{dataPlaceEdit.country.name}</p>
          </div>
          <img
            src="./assets/img/delete.png"
            alt=""
            className="close"
            onClick={() => setIsModalVisible(false)}
          />
        </div>

        <form onSubmit={editPlaceFirebase} className="input-button-edit">
          <div className="input-group">
            <label htmlFor="input-place-edit" className="input-place-edit">
              Local
            </label>
            <input
              type="text"
              className="input-edit-standard"
              name="place"
              value={dataPlaceEdit.place}
              onChange={(e) => handleChangePlaceAndMeta(e)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="input-meta-edit" className="input-place-edit">
              Meta
            </label>
            <InputMask
              mask="99/9999"
              type="text"
              className="input-edit-standard"
              name="meta"
              value={dataPlaceEdit.meta}
              onChange={(e) => handleChangePlaceAndMeta(e)}
            />
          </div>
          <button className="button-edit">Editar</button>
        </form>
      </div>
    </Styles>
  );
};

export default ModalEdit;
