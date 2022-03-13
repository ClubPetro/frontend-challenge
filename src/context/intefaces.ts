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
  checkboxPais: string;
  img: string;
  local: string;
  meta: string;
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
  meta: string;
  localModal: string;
  metaModal: string;
}

export interface PropsCountrie {
  setSelectCountrie: Function;
  selectCountrie: any;
  setSelectedCountrie: Function;
  selectedCountrie: any;
  data: DataProps[];
  cardData: CardDataProps[];
  setDataForModal: Function;
  dataForModal: CardDataProps[];
  setUpDateState: Function;
  setOpenEditModal: Function;
  openEditModal: boolean;
  setItemCardDelete: Function;
  itemCardDelete: ItemCardDeleteProps | undefined;
  setOpenModaConfirmeDeleteCard: Function;
  openModaConfirmeDeleteCard: boolean;
  setIsLoad: Function;
  isLoad: boolean;
  onSubmitPostCard: SubmitHandler<any>;
  onSubmitEditCard: SubmitHandler<any>;
  handleOpenCardId: Function;
  handleDeleteCard: MouseEventHandler<HTMLButtonElement>;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
}
