import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import Logo from "../../assets/svg/logo.svg";
import {
  Form,
  InputDate,
  InputLocal,
  ButtonArea,
  ContentBody,
  Item,
  CheckboxArea,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { FildsTextInput } from "../../components/Form/Input";
import { FildsCheckbox } from "../../components/Form/CheckBox";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { getAllCountries } from "../../services/countries";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  local: string;
  meta: string;
}

export function Home() {
  const [selectedCountrie, setSelectedCountrie] = useState<any>("");
  const [data, setData] = useState<object[]>([]);
  const { register, handleSubmit } = useForm<Inputs>();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedCountrie(event.target.value);
  };

  useEffect(() => {
    async function requestApiAllCountries() {
      const data = await getAllCountries();
      setData(data);
    }
    requestApiAllCountries();
  }, []);

  const flag: any = data.filter((item: any) => {
    if (item.name === selectedCountrie) {
      return item;
    }
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log({
      ...data,
      checkboxPais: selectedCountrie,
      flag: flag[0].flag,
    });
  };

  return (
    <>
      <Header image={Logo} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxArea>
          <FildsCheckbox
            titleLabel="País"
            value={selectedCountrie}
            handleChangeCheckbox={handleChange}
            contentMenuItem={data}
          />
        </CheckboxArea>
        <InputLocal>
          <FildsTextInput
            register={register("local")}
            titleLabel="Local"
            placeholderText="Digite o local que deseja conhecer"
          />
        </InputLocal>
        <InputDate>
          <FildsTextInput
            titleLabel="Meta"
            placeholderText="mês/ano"
            register={register("meta")}
          />
        </InputDate>
        <ButtonArea>
          <Button titleButton="Adicionar" type={"submit"} />
        </ButtonArea>
      </Form>

      <ContentBody container>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
        <Item>
          <Card />
        </Item>
      </ContentBody>
    </>
  );
}
