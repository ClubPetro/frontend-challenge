import React from "react";
import { Container } from "./styles";
import Delete from "../../assets/mdi_close.png";
import Edit from "../../assets/mdi_edit.png";
import crudController from "../../Controllers/CrudController";

interface CountryProps {
  handleRefreshCardList: Function;
  handleModalVisibility: Function;
  hadnleEditCard:Function;
  countryInfos: {
    id: string;
    country: {
      name: string;
      flag: string;
    };
    goal: string;
    location: string;
  };
}

const Card: React.FC<CountryProps> = ({
  countryInfos,
  handleRefreshCardList,
  handleModalVisibility,
  hadnleEditCard
}) => {
  const { country, goal, location, id } = countryInfos;

  const handleDelete = async (id: string) => {
    window.confirm("Você tem certeza que quer excluir?") &&
      (await crudController.delete(id));

    handleRefreshCardList({ country, goal, location });
  };

  return (
    <Container>
      <nav>
        <div>
          <img className="flag" src={country.flag} alt="br" />
          <h3>{country.name}</h3>
        </div>
        <div className="actions">
          <span>
            <button
              onClick={() => {
                window.location.href = '#header';
                hadnleEditCard(countryInfos);
                handleModalVisibility((old: boolean) => !old);
              }}
            >
              <img src={Edit} alt="Edit" />
            </button>
          </span>
          <span>
            <button onClick={() => handleDelete(id)}>
              <img src={Delete} alt="Delete" />
            </button>
          </span>
        </div>
      </nav>
      <hr />
      <div className="infos">
        <h6>Local: {location} </h6>
        <h6>Meta: {goal} </h6>
      </div>
    </Container>
  );
};

export default Card;
