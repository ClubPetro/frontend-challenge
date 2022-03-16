import { PropsCardLocale } from '../CardLocale/CardLocale.interface';

export interface ModalEditProps extends PropsCardLocale {
  open: boolean;
  onClose: () => void;
}
