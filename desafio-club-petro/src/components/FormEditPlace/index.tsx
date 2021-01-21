// import "./style.css";
import InputMask from "react-input-mask";

const FormEditPlace = () => {
  return (
    <section className="form-section">
      <div className="form-container">
        <form className="form-content">
          <div className="input-group">
            <label className="input-label" htmlFor="form-place">
              Local
            </label>
            <input
              type="text"
              className="input-group-height place-width"
              id="form-place"
              placeholder="Digite o local que deseja conhecer"
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="form-meta">
              Local
            </label>
            <InputMask
              mask="99/9999"
              type="text"
              className="input-group-height meta-width"
              id="form-meta"
              placeholder="mês/ano"
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
