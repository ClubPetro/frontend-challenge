import React from 'react'
import { WrapContainerStyled, ContainerStyled } from './styles'
import { CardItem } from '../../components'
import { useContext } from "react";
import { CountrieContext } from "../../contexts/CardsInfos";
import { CardDataProps } from "../../contexts/interfaces";

const Home: React.FC = () => {
  const { cardData } = useContext(CountrieContext);

  return (
    <WrapContainerStyled>
      <ContainerStyled>
        {cardData &&
          cardData.map((item: CardDataProps) => (
            <CardItem
              key={item.id}
              idItem={item.id}
              imgSrc={item.img}
              altImg={item.title}
              title={item.title}
              local={item.local}
              goal={item.goal}
            />
          ))
        }
      </ContainerStyled>
    </WrapContainerStyled>
  )
}

export default Home