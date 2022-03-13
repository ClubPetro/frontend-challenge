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
  InputAreaModal,
  AreaLoad,
  BoxStyles,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { Select } from "../../components/Form/Select";
import { useContext } from "react";
import { SelectChangeEvent, CircularProgress } from "@mui/material";
import { Modal } from "../../components/Modal";
import { DividerStyles } from "../../components/Card/styles";
import { Input } from "../../components/Form/Input";
import { CountrieContext } from "../../context/CountrieContext";
import { CardDataProps } from "../../context/intefaces";

export function Home() {
  const {
    setSelectCountrie,
    selectCountrie,
    selectedCountrie,
    data,
    cardData,
    setOpenEditModal,
    openEditModal,
    setItemCardDelete,
    itemCardDelete,
    setOpenModaConfirmeDeleteCard,
    openModaConfirmeDeleteCard,
    setIsLoad,
    isLoad,
    onSubmitPostCard,
    onSubmitEditCard,
    handleOpenCardId,
    handleDeleteCard,
    register,
    handleSubmit,
  } = useContext(CountrieContext);

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
            isMask={true}
          />
        </InputDate>
        <ButtonArea>
          <Button titleButton="Adicionar" type={"submit"} />
        </ButtonArea>
      </Form>
      <BoxStyles>
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
      </BoxStyles>

      <Modal
        handleClose={() => {
          setIsLoad(true);
          setOpenEditModal(false);
        }}
        open={openEditModal}
      >
        <FormModal onSubmit={handleSubmit(onSubmitEditCard)}>
          {!isLoad ? (
            <>
              <h2>
                Editando <u>{selectedCountrie}</u>
              </h2>
              <DividerStyles />
              <InputAreaModal>
                <Input
                  titleLabel="Meta"
                  register={register("metaModal")}
                  isVisible
                />
              </InputAreaModal>
              <InputAreaModal>
                <Input
                  titleLabel="Local"
                  register={register("localModal")}
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
                  handleClick={() => {
                    setOpenEditModal(false);
                    setIsLoad(true);
                  }}
                  typebgcolor={"cancel"}
                />
              </ButtonAreaModal>
            </>
          ) : (
            <AreaLoad>
              <CircularProgress />
            </AreaLoad>
          )}
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
