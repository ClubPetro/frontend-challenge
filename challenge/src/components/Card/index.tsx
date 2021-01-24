import { useState, useEffect } from "react";

import { Card, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

import { CountryName, Hr, Text } from "./style";

import { DataProps } from "../CardsList";
import { countriesApi, api } from "../../services/api";

import Modal from "../Modal";

const CardContainer = ({ place, goal, country, id }: DataProps) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState([]);

  useEffect(() => {
    countriesApi
      .get(`/name/${country}`)
      .then((res) => {
        res.data.map((data: any) => {
          setImage(data.flag);
          setName(data.translations.br);
        });
      })
      .catch((err) => console.log(err));
  }, [country]);

  const deleteGoal = (id: number) => {
    api.delete(`/places/${id}`);
  };

  return (
    <Card style={{ width: 250, height: 250, margin: 10 }}>
      <CardHeader
        avatar={
          <CardMedia
            component="img"
            alt="img"
            image={image}
            style={{ width: 100 }}
          />
        }
        action={
          <>
            <Modal id={id} />
            <IconButton aria-label="edit" onClick={() => deleteGoal(id)}>
              <Clear />
            </IconButton>
          </>
        }
      />
      <CountryName>{name}</CountryName>

      <Hr />

      <Text>Local: {place}</Text>
      <Text>Meta: {goal}</Text>
    </Card>
  );
};

export default CardContainer;
