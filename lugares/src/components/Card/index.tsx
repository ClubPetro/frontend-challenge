import React from "react";
import { Container } from "./styles";
import Delete from "../../assets/mdi_close.png";
import Edit from "../../assets/mdi_edit.png";
import { useCardContext } from "../../Context/CardContext";

interface CountryProps {
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
  handleModalVisibility,
  hadnleEditCard
}) => {
  const { country, goal, location, id } = countryInfos;

  const {handleDeleteCountry} = useCardContext();
  
  return (
    <Container>
      <nav>
        <div>
          <img className="flag" src={country.flag} alt={country.name} />
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
            <button onClick={() => handleDeleteCountry(id)}>
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
