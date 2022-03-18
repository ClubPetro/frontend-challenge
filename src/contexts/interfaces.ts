import { ReactNode, MouseEventHandler } from "react";
import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

export interface DataProps {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: [];
  area: number;
  borders: [];
  callingCodes: [];
  capital: string;
  cioc: string;
  currencies: object[];
  demonym: string;
  flag: string;
  flags: Object;
  independent: boolean;
  languages: object[];
  latlng: [];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: object[];
  subregion: string;
  timezones: [];
  topLevelDomain: [];
  translations: {
    br: string;
  };
}

export interface CardDataProps {
  id: number;
  title: string;
  checkboxPais: string;
  img: string;
  local: string;
  goal: string;
}

export interface Props {
  children: ReactNode;
}

export interface ItemCardDeleteProps {
  id: number;
  name: string;
}

export interface Inputs {
  local: string;
  goal: string;
  countries: string;
  localModal: string;
  metaModal: string;
}

export interface PropsCountrie {
  data: DataProps[];
  cardData: CardDataProps[];
  setDataForModal: Function;
  dataForModal: CardDataProps[];
  setUpDateState: Function;
  setOpenEditModal: Function;
  openEditModal: boolean;
  setIsLoad: Function;
  isLoad: boolean;
  onSubmitPostCard: SubmitHandler<any>;
  onSubmitEditCard: SubmitHandler<any>;
  handleOpenCardId: Function;
  handleDeleteCard: any;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
}