import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";
import _ from "lodash";
import axios from "axios";

interface APIData {
  name: string;
  flag: string;
}

// ----------------------------------------------
interface DestiniesProps {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  type: string;
  value: number;
}

type DestiniesInput = Omit<DestiniesProps, "id" | "createdAt">;

interface DestinationProviderProps {
  children: ReactNode;
}

interface DestiniesData {
  destinies: DestiniesProps[];
  CreateTransaction: (transaction: DestiniesInput) => Promise<void>;
  countries: APIData[];
}

const DestiniesContext = createContext<DestiniesData>({} as DestiniesData);

// Usado na raiz dos componente no App, apenas!
export function DestinationProvider({ children }: DestinationProviderProps) {
  const [destinies, setdestinies] = useState<DestiniesProps[]>([]);
  const [countries, setCountries] = useState<APIData[]>([]);
  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const { data } = await axios.get(
        "https://restcountries.eu/rest/v2/all?fields=translations;flag"
      );
      const filteredValues = data.map((elem: any) => {
        return {
          name: elem.translations.br,
          flag: elem.flag,
        } as APIData;
      });
      const orderedCountriesByName = _.orderBy(
        filteredValues,
        ["name"],
        ["asc"]
      );
      setCountries(orderedCountriesByName);
    };

    loadData();
  }, []);

  useEffect(() => {
    api
      .get("/destinies")
      .then((response) => console.log("Oi: ", response.data.destinies));
    // api.get("/destinies").then((response) => setdestinies(response.data.destinies));
    console.log("Oi: ", countries);
  }, [countries]);

  const CreateTransaction = async (DestiniesInput: DestiniesInput) => {
    const response = await api.post("/destinies", {
      ...DestiniesInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setdestinies([...destinies, transaction]);
  };

  return (
    <DestiniesContext.Provider
      value={{ destinies, CreateTransaction, countries }}
    >
      {children}
    </DestiniesContext.Provider>
  );
}

export function useDestination() {
  const context = useContext(DestiniesContext);

  return context;
}
