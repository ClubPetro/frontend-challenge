import "./style.css";
import InputMask from "react-input-mask";
import { CountrySelect } from "../../utils/intefaces";
import { useContext, useEffect, useState } from "react";
import { GetPlacesContext } from "../../context/GetPlacesContext";
import { db } from "../../utils/firebase";

const FormAddPlace = () => {
  const { places, setPlaces } = useContext(GetPlacesContext);
  const [selected, setSelected] = useState(false)
  const [dataCountrySelect, setDataCountrySelect] = useState([]);
  const [countrySelected, setCountrySelected] = useState("");
  const [countryDataModel, setCountryDataModel] = useState({
    country: {},
    meta: "",
    place: "",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const result = await data.json();

      const resultMap = result.map((country: any) => ({
        name: country.translations.br,
        flag: country.flag,
      }));

      setDataCountrySelect(resultMap);
    };

    getData();
  }, []);

  useEffect(() => {
    const getDataCountryNameAndFleg = () => {
      if (countrySelected !== undefined) {
        const objectCountry = dataCountrySelect.filter(
          (countryFilter: CountrySelect) =>
            countryFilter.name === countrySelected
        );

        setCountryDataModel({
          ...countryDataModel,
          country: objectCountry[0],
        });
      }
    };


    getDataCountryNameAndFleg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countrySelected, dataCountrySelect]);

  const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountrySelected(e.target.value);
  };

  const handleChangePlaceAndMeta = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCountryDataModel({
      ...countryDataModel,
      [name]: value,
    });

    setSelected(false)
  };

  const addPlaceOnFirebase = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const dataModalAddPlace = await db
        .collection("Contries")
        .add(countryDataModel);

      setPlaces([{ ...countryDataModel, id: dataModalAddPlace.id }, ...places]);

      setCountryDataModel({
        country: {},
        meta: "",
        place: "",
      });

      setSelected(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <form className="form-content" onSubmit={addPlaceOnFirebase}>
          <div className="input-group">
            <label className="input-label" htmlFor="form-country">
              País
            </label>
            <div className="select-container">
              <select
                name="country"
                className="input-group-height select"
                id="form-country"
                required
                onChange={(e) => handleChangeCountry(e)}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled selected={selected}>
                  Selecione...
                </option>
                {dataCountrySelect.map((countries: CountrySelect) => (
                  <option value={countries.name} key={countries.name}>
                    {countries.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
              onChange={(e) => handleChangePlaceAndMeta(e)}
              value={countryDataModel.place}
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
              onChange={(e) => handleChangePlaceAndMeta(e)}
              value={countryDataModel.meta}
            />
          </div>

          <button type="submit" className="form-button-submit">
            Adicionar
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormAddPlace;
