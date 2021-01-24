import { createContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";

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
  places: Places[];
  setPlaces: React.Dispatch<React.SetStateAction<Places[]>>;
}

export const GetAllPlacesContext = createContext<Context>({
  places: [],
  setPlaces: () => {},
});

const GetAllPlacesProvider: React.FC = ({ children }) => {
  const [places, setPlaces] = useState<Places[]>([]);

  useEffect(() => {
    const getDataPlaces = async () => {
      try {
        const { docs } = await db.collection("Contries").get();
        const countriesMap: any = docs.map((place: any) => ({
          id: place.id,
          ...place.data(),
        }));
        setPlaces(countriesMap);
      } catch (error) {
        console.log(error);
      }
    };

    getDataPlaces();
  }, []);
  return (
    <GetAllPlacesContext.Provider value={{ places, setPlaces }}>
      {children}
    </GetAllPlacesContext.Provider>
  );
};

export default GetAllPlacesProvider;
