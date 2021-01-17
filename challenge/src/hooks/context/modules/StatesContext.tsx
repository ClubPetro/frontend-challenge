import React, { createContext, useState, useContext, ReactNode } from 'react';

interface StatesContextData {
  toogleEdit(): void;
  modalEdit?: boolean;
}

interface ProviderProps {
  children?: ReactNode;
}

const StatesContext = createContext<StatesContextData>({} as StatesContextData);

const StatesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [modalEdit, setModalEdit] = useState(false);

  const toogleEdit = () => {
    setModalEdit(!modalEdit);
  };

  return (
    <StatesContext.Provider value={{ toogleEdit, modalEdit }}>
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
