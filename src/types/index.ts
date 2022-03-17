export interface Country{
  name:{
    common: string;
    official:string;
  }
  flags:{
    png: string;
    svg: string;
  }
  translations:{
    por:{
      official: string;
      common: string;
    }
  }
}

export interface CountriesResponse{
  name: string,
  id: number,
	local: string,
	meta: string,
  flag: string,
}

export interface ConfirmationModalProps{
  onClose: () => void;
  onDelete: () => void;
  open: boolean;
}

export interface CardProps{
  countryId: number;
  onUpdate: () => void;
}

export interface EditModalProps{
  onClose: () => void;
  onUpdate: () => void;
  open: boolean;
  countryId: number;
}

export interface SelectProps {
  countries: Country[],
  onSelect: (e: string) => void;
  value: string;
}