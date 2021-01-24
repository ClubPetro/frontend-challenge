import Styles from "./styles";
import InputMask from "react-input-mask";
import { useContext, useEffect, useState } from "react";
import { GetAllPlacesContext } from "../../context/GetAllPlacesContext";
import { db } from "../../utils/firebase";

const FormAddPlace = () => {
  const { places, setPlaces } = useContext(GetAllPlacesContext);
  const [contriesSelect, setCountriesSelect] = useState([]);
  const [countrySelected, setCountrySelected] = useState({
    country: "Selecione...",
  });
  const [placeModelDb, setPlaceModelDb] = useState({
    country: {
      name: "",
      flag: "",
    },
    place: "",
    meta: "",
  });

  useEffect(() => {
    const getCountryApi = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();

      const result = data.map((countries: any) => ({
        name: countries.translations.br,
        flag: countries.flag,
      }));

      setCountriesSelect(result);
    };

    getCountryApi();
  }, []);

  const onChengeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setCountrySelected({
      ...countrySelected,
      country: value,
    });
  };

  useEffect(() => {
    const setContryModel = () => {
      const filterCountry = contriesSelect.filter(
        (country: any) => country.name === countrySelected.country
      );

      setPlaceModelDb({
        ...placeModelDb,
        country: filterCountry[0],
      });
    };

    setContryModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countrySelected, contriesSelect]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPlaceModelDb({
      ...placeModelDb,
      [name]: value,
    });
  };

  const handleSubitPlaces = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const dataModalAddPlace = await db
        .collection("Contries")
        .add(placeModelDb);

      setPlaces([{ ...placeModelDb, id: dataModalAddPlace.id }, ...places]);


      setPlaceModelDb({
        country: {
          name: "",
          flag: "",
        },
        place: "",
        meta: "",
      });

      setCountrySelected({
        country: "Selecione...",
      });

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      <form onSubmit={handleSubitPlaces} className="container">
        <div className="input-group">
          <label className="label-input" htmlFor="select-country">
            País
          </label>
          <select
            className="input-standard"
            name="country"
            id="select-country"
            onChange={(e) => onChengeSelect(e)}
            value={countrySelected.country}
            required
          >
            {countrySelected.country === "Selecione..." && (
              <option value={countrySelected.country} disabled>
                Selecione...
              </option>
            )}
            {contriesSelect.map((country: any, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label className="label-input" htmlFor="input-place">
            Local
          </label>
          <input
            className="input-standard"
            name="place"
            type="text"
            id="input-place"
            placeholder="Digite o local que deseja conhecer"
            onChange={(e) => onChangeInput(e)}
            value={placeModelDb.place}
          />
        </div>
        <div className="input-group">
          <label className="label-input" htmlFor="input-meta">
            Meta
          </label>
          <InputMask
            mask="99/9999"
            name="meta"
            className="input-standard"
            type="text"
            id="input-meta"
            placeholder="mês/ano"
            onChange={(e) => onChangeInput(e)}
            value={placeModelDb.meta}
          />
        </div>
        <button className="button-submited">Adicionar</button>
      </form>
    </Styles>
  );
};

export default FormAddPlace;
