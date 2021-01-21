import { createContext, useState } from "react";

export const EditPlaceContext = createContext<any>([]);

const EditPlaceProvider: React.FC = ({ children }) => {
  const [dataPlaceEdit, setDataPlaceEdit] = useState<any>({});
  return (
    <EditPlaceContext.Provider value={{ dataPlaceEdit, setDataPlaceEdit}}>
      {children}
    </EditPlaceContext.Provider>
  );
};

export default EditPlaceProvider;
