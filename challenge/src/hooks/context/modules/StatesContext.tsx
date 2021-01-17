import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ItemProps {
  id: string;
  flag: string;
  country: string;
  place: string;
  goal: string;
}

interface StatesContextData {
  toogleEdit(): void;
  modalEdit?: boolean;
  places: ItemProps[];
  setPlaces: any;
}

interface ProviderProps {
  children?: ReactNode;
}

const StatesContext = createContext<StatesContextData>({} as StatesContextData);

const StatesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [places, setPlaces] = useState([]);

  const [modalEdit, setModalEdit] = useState(false);

  const toogleEdit = () => {
    setModalEdit(!modalEdit);
  };

  return (
    <StatesContext.Provider
      value={{ toogleEdit, modalEdit, places, setPlaces }}
    >
      {children}
    </StatesContext.Provider>
  );
};

function useStateContext(): StatesContextData {
  const context = useContext(StatesContext);

  if (!context) {
    throw new Error('useStateContext must be used within an StatesProvider');
  }
  return context;
}
export { StatesProvider, useStateContext };
