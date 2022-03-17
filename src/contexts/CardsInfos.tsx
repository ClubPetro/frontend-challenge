import { createContext, useState, useContext, useEffect } from "react";
import { getAllCountries } from "../services/countries";
import {
  deleteCardId,
  getAllCards,
  getCardId,
  patchCardId,
  postCard,
} from "../services/cards";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  DataProps,
  CardDataProps,
  Inputs,
  Props,
  ItemCardDeleteProps,
  PropsCountrie,
} from "./interfaces";
const { v4: uuidv4 } = require('uuid');

export const CountrieContext = createContext({} as PropsCountrie);

export function CountrieContextProvider({ children }: Props) {
  const [selectCountrie, setSelectCountrie] = useState<any>("");
  const [selectedCountrie, setSelectedCountrie] = useState<any>("");
  const [data, setData] = useState<DataProps[]>([]);
  const [cardData, setCardData] = useState<CardDataProps[]>([]);
  const [dataForModal, setDataForModal] = useState<CardDataProps[]>([]);
  const [upDateState, setUpDateState] = useState<CardDataProps[]>([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [itemCardDelete, setItemCardDelete] = useState<ItemCardDeleteProps>();
  const [openModaConfirmeDeleteCard, setOpenModaConfirmeDeleteCard] =
    useState(false);
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  useEffect(() => {
    getAllCountries().then((data) => setData(data));
  }, []);
  useEffect(() => {
    getAllCards().then((data) => setCardData(data));
  }, [upDateState]);

  const onSubmitPostCard: SubmitHandler<any> = (rest) => {
    const flag: any | undefined =
      data &&
      data.filter((item: DataProps): DataProps | undefined => {
        if (item.translations.br === rest.countries) {
          return item;
        }
        return undefined;
    });

    postCard({...rest, img: flag[0].flag, title: flag[0]?.translations.br, id: uuidv4()}).then((returnApi) => {
      console.log(flag)
      setUpDateState(returnApi);
      reset({ goal: "", local: "", countries: "" });
      setSelectCountrie("");
    });
  };

  const onSubmitEditCard: SubmitHandler<any> = (rest) => {
    const flag: DataProps[] | undefined =
      data &&
      data.filter((item: DataProps): DataProps | undefined => {
        if (item.translations.br === selectedCountrie) {
          return item;
        }
        return undefined;
      });

    const body = {
      local: rest.localModal,
      goal: rest.metaModal,
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
      reset({ metaModal: data[0].goal, localModal: data[0].local });
      setIsLoad(false);
    });
  };

  const handleDeleteCard = () => {
    deleteCardId(itemCardDelete?.id).then((returnApi) => {
      setUpDateState(returnApi);
      setOpenModaConfirmeDeleteCard(false);
    });
  };

  return (
    <CountrieContext.Provider
      value={{
        setSelectCountrie,
        selectCountrie,
        setSelectedCountrie,
        selectedCountrie,
        data,
        cardData,
        setDataForModal,
        dataForModal,
        setUpDateState,
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
      }}
    >
      {children}
    </CountrieContext.Provider>
  );
}

export const useCountrie = () => {
  return useContext(CountrieContext);
};