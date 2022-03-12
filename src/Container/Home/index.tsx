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
  SelectArea,
  FormModal,
  ContainerConfirmeDelete,
  ButtonAreaModal,
  SelectAreaModal,
  InputAreaModal,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { useEffect, useState } from "react";
import { SelectChangeEvent, Box } from "@mui/material";
import { getAllCountries } from "../../services/countries";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getAllCards,
  postCard,
  getCardId,
  patchCardId,
  deleteCardId,
} from "../../services/cards";
import { Modal } from "../../components/Modal";
import { DividerStyles } from "../../components/Card/styles";

interface Inputs {
  local: string;
  meta: string;
  localModal: string;
  metaModal: string;
}
interface CardDataProps {
  id: number;
  checkboxPais: string;
  img: string;
  local: string;
  meta: string;
}
interface ItemCardDeleteProps {
  id: number;
  name: string;
}

export function Home() {
  const [selectCountrie, setSelectCountrie] = useState<any>("");
  const [selectedCountrie, setSelectedCountrie] = useState<any>("");
  const [data, setData] = useState<object[]>([]);
  const [cardData, setCardData] = useState<CardDataProps[]>([]);
  const [dataForModal, setDataForModal] = useState<CardDataProps[]>([]);
  const [upDateState, setUpDateState] = useState<CardDataProps[]>([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [itemCardDelete, setItemCardDelete] = useState<ItemCardDeleteProps>();
  const [openModaConfirmeDeleteCard, setOpenModaConfirmeDeleteCard] =
    useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  useEffect(() => {
    getAllCards().then((data) => setCardData(data));
  }, [upDateState]);
  useEffect(() => {
    getAllCountries().then((data) => setData(data));
  }, []);

  const onSubmitPostCard: SubmitHandler<any> = (rest) => {
    const flag: any =
      data &&
      data.filter((item: any) => {
        if (item.name === selectCountrie) {
          return item;
        }
      });
    const body = {
      ...rest,
      checkboxPais: selectCountrie,
      img: flag[0].flag,
    };
    postCard(body).then((returnApi) => {
      setUpDateState(returnApi);
      reset({ meta: "", local: "" });
      setSelectCountrie("");
    });
  };

  const onSubmitEditCard: SubmitHandler<any> = (rest) => {
    const flag: any =
      data &&
      data.filter((item: any) => {
        if (item.name === selectedCountrie) {
          return item;
        }
      });
    const body = {
      local: rest.localModal,
      meta: rest.metaModal,
      checkboxPais: selectedCountrie,
      img: flag[0].flag,
    };

    patchCardId(dataForModal[0].id, body).then((returnApi) => {
      setUpDateState(returnApi);
      setOpenEditModal(false);
    });
  };

  const handleOpenCardId = (id: number) => {
    setOpenEditModal(true);
    getCardId(id).then((data: CardDataProps[]) => {
      setSelectedCountrie(data[0].checkboxPais);
      setDataForModal(data);
      reset({ metaModal: data[0].meta, localModal: data[0].local });
    });
  };

  const handleDeleteCard = () => {
    deleteCardId(itemCardDelete?.id).then((returnApi) => {
      setUpDateState(returnApi);
      setOpenModaConfirmeDeleteCard(false);
    });
  };

  return (
    <>
      <Header image={Logo} />
      <Form onSubmit={handleSubmit(onSubmitPostCard)}>
        <SelectArea>
          <Select
            titleLabel="País"
            value={selectCountrie}
            handleChangeSelect={(event: SelectChangeEvent<unknown>) =>
              setSelectCountrie(event.target.value)
            }
            contentMenuItem={data}
          />
        </SelectArea>
        <InputLocal>
          <Input
            register={register("local")}
            titleLabel="Local"
            placeholderText="Digite o local que deseja conhecer"
          />
        </InputLocal>
        <InputDate>
          <Input
            titleLabel="Meta"
            placeholderText="mês/ano"
            register={register("meta")}
          />
        </InputDate>
        <ButtonArea>
          <Button titleButton="Adicionar" type={"submit"} />
        </ButtonArea>
      </Form>

      <Box
        style={{
          paddingLeft: "36px",
          paddingRight: "36px",
          paddingTop: "53px",
        }}
      >
        <ContentBody container rowSpacing={5} columnSpacing={3}>
          {cardData &&
            cardData.map((item: CardDataProps) => (
              <Item key={item.id} xs={12} sm={4} md={3} lg={2.4}>
                <Card
                  urlImage={item.img}
                  altImage={item.checkboxPais}
                  countries={item.checkboxPais}
                  local={item.local}
                  meta={item.meta}
                  handleEditCard={() => handleOpenCardId(item.id)}
                  handleDeleteCard={() => {
                    setItemCardDelete({ id: item.id, name: item.checkboxPais });
                    setOpenModaConfirmeDeleteCard(true);
                  }}
                />
              </Item>
            ))}
        </ContentBody>
      </Box>

      <Modal handleClose={() => setOpenEditModal(false)} open={openEditModal}>
        <FormModal onSubmit={handleSubmit(onSubmitEditCard)}>
          <h2>Editar</h2>
          <DividerStyles />
          <SelectAreaModal>
            <Select
              isVisible={true}
              titleLabel="País"
              value={selectedCountrie}
              handleChangeSelect={(event: SelectChangeEvent<unknown>) =>
                setSelectedCountrie(event.target.value)
              }
              contentMenuItem={data}
            />
          </SelectAreaModal>
          <InputAreaModal>
            <Input
              titleLabel="Meta"
              register={register("metaModal")}
              isBorder
              isVisible
            />
          </InputAreaModal>
          <InputAreaModal>
            <Input
              titleLabel="Local"
              register={register("localModal")}
              isBorder
              isVisible
            />
          </InputAreaModal>
          <ButtonAreaModal>
            <Button titleButton="salvar" type={"submit"} />
          </ButtonAreaModal>
          <ButtonAreaModal>
            <Button
              titleButton="cancelar"
              type={"button"}
              handleClick={() => setOpenEditModal(false)}
              typebgcolor={"cancel"}
            />
          </ButtonAreaModal>
        </FormModal>
      </Modal>

      <Modal
        handleClose={() => setOpenModaConfirmeDeleteCard(false)}
        open={openModaConfirmeDeleteCard}
      >
        <ContainerConfirmeDelete>
          <h2>
            Deseja remover <u>{itemCardDelete?.name}</u>?
          </h2>
          <DividerStyles />
          <ButtonAreaModal>
            <Button
              titleButton="sim, desejo remover"
              type={"button"}
              handleClick={handleDeleteCard}
            />
          </ButtonAreaModal>
          <ButtonAreaModal>
            <Button
              titleButton="não"
              type={"button"}
              handleClick={() => setOpenModaConfirmeDeleteCard(false)}
              typebgcolor={"cancel"}
            />
          </ButtonAreaModal>
        </ContainerConfirmeDelete>
      </Modal>
    </>
  );
}
