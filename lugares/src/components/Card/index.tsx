import React from "react";
import {Container} from './styles';
import Delete from '../../assets/mdi_close.png';
import Edit from '../../assets/mdi_edit.png';

interface CountryProps {
countryInfos:{
    id:string;
    country: {
      name: string;
      flag: string;
    };
    goal: string;
    location: string;
}
 
}

const Card: React.FC<CountryProps> = ({countryInfos}) => {
    const {country,goal,location} = countryInfos;

    console.log(countryInfos);

  return (
        <Container>
            <nav>
                <div>
                    <img 
                        className="flag" 
                        src={country.flag} alt="br" />
                    <h3>{country.name}</h3>
                </div>
                <div className="actions">
                    <span>
                        <button><img src={Edit} alt="Edit" /></button>
                    </span>
                    <span>
                        <button><img src={Delete} alt="Delete" /></button>
                    </span>
                </div>
            </nav>
            <hr />
            <div className="infos">
                <h6>Local: {location} </h6>
                <h6>Meta: {goal} </h6>
            </div>
        </Container>
  )

};

export default Card;
