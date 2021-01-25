import { createContext, useState } from "react";

export interface Places {
  id: string;
  country: {
    flag: string;
    name: string;
  };
  meta: string;
  place: string;
}

interface Context {
  dataPlaceEdit: Places;
  setDataPlaceEdit: React.Dispatch<React.SetStateAction<Places>>;
}

const initialState = {
  id: "",
  country: {
    flag: "",
    name: "",
  },
  meta: "",
  place: "",
};

export const EditPlaceContext = createContext<Context>({
  dataPlaceEdit: initialState,
  setDataPlaceEdit: () => {},
});

const EditPlaceProvider: React.FC = ({ children }) => {
  const [dataPlaceEdit, setDataPlaceEdit] = useState<Places>(initialState);
  return (
    <EditPlaceContext.Provider value={{ dataPlaceEdit, setDataPlaceEdit }}>
      {children}
    </EditPlaceContext.Provider>
  );
};

export default EditPlaceProvider;
