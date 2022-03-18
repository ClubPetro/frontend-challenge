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
  PropsCountrie,
} from "./interfaces";
const { v4: uuidv4 } = require('uuid');

export const CountrieContext = createContext({} as PropsCountrie);

export function CountrieContextProvider({ children }: Props) {
  const [data, setData] = useState<DataProps[]>([]);
  const [cardData, setCardData] = useState<CardDataProps[]>([]);
  const [dataForModal, setDataForModal] = useState<CardDataProps[]>([]);
  const [upDateState, setUpDateState] = useState<CardDataProps[]>([]);
  const [openEditModal, setOpenEditModal] = useState(false);
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
      setUpDateState(returnApi);
      reset({ goal: "", local: "", countries: "" });
    });
  };

  const onSubmitEditCard: SubmitHandler<any> = (rest) => {
    const flag: any | undefined =
      data &&
      data.filter((item: DataProps): DataProps | undefined => {
        if (item.translations.br === rest.countriesModal) {
          return item;
        }
        return undefined;
      });

    patchCardId(dataForModal[0].id, {goal: rest.goalModal, local: rest.localModal, img: flag[0].flag, title: flag[0]?.translations.br}).then((returnApi) => {
      setUpDateState(returnApi);
      setOpenEditModal(false);
    });
  };

  const handleOpenCardId = (id: number) => {
    setOpenEditModal(true);
    getCardId(id).then((data: CardDataProps[]) => {
      setDataForModal(data);
      reset({ goalModal: data[0].goal, localModal: data[0].local, countriesModal: data[0].title });
      setIsLoad(false);
    });
  };

  const handleDeleteCard = (id: number) => {
    deleteCardId(id).then((returnApi) => {
      setUpDateState(returnApi);
    });
  };

  const handleCloseEditModal = () => setOpenEditModal(false);

  return (
    <CountrieContext.Provider
      value={{
        data,
        cardData,
        setDataForModal,
        dataForModal,
        setUpDateState,
        setOpenEditModal,
        handleCloseEditModal,
        openEditModal,
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