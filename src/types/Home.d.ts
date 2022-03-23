interface InputsRef {
  current: {
    country: {
      flag: string;
      name: string;
    };
    local: string;
    meta: string;
  };
}

interface Inputs {
  country: {
    flag: string;
    name: string;
  };
  local: string;
  meta: string;
}

interface State<T> {
  countries: any[] | null;
  user: {
    places: T[] | null;
  };
}

interface ModalProps {
  open: null | boolean;
  dataId: null | string;
}
