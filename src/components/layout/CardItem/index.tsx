import React from 'react'
import { Card, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { CardContentStyled, IconsPositionStyled } from './styles'
import { useContext } from "react";
import { CountrieContext } from "../../../contexts/CardsInfos";

interface PropsCardItem {
  imgSrc?: string;
  title?: string;
  altImg?: string;
  local?: string;
  goal?: string;
  idItem?: string | number;
}

const CardItem: React.FC<PropsCardItem> = ({imgSrc, altImg, title, local, goal, idItem}) => {
  const { handleDeleteCard } = useContext(CountrieContext);

  return (
    <Card>
      <CardContentStyled>
        <IconsPositionStyled>
          <EditIcon />
          <CloseIcon onClick={() => handleDeleteCard(idItem)} />
        </IconsPositionStyled>
        <img src={imgSrc} alt={altImg} />
        <h4>{title}</h4>
        <Divider/>
        <p>Local: <span>{local}</span></p>
        <p>Meta: <span>{goal}</span></p>
      </CardContentStyled>
    </Card>
  )
}

export default CardItem