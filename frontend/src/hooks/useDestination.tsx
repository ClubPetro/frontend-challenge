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
  place: string;
  goal: string;
  country: string;
  createdAt: string;
}

type DestiniesInput = Omit<DestiniesProps, "id" | "createdAt">;

interface DestinationProviderProps {
  children: ReactNode;
}

interface DestiniesData {
  destinies: DestiniesProps[];
  CreateDestinie: () => Promise<void>;
  countries: APIData[];
  goal: string;
  handleChangeGoal: (event: React.ChangeEvent<{ value: string }>) => void;
  place: string;
  handleChangePlace: (event: React.ChangeEvent<{ value: string }>) => void;
  country: string;
  handleChangeCountry: (event: any) => void;
}

const DestiniesContext = createContext<DestiniesData>({} as DestiniesData);

// Usado na raiz dos componente no App, apenas!
export function DestinationProvider({ children }: DestinationProviderProps) {
  const [destinies, setDestinies] = useState<DestiniesProps[]>([]);
  const [countries, setCountries] = useState<APIData[]>([]);

  const [goal, setGoal] = useState("");
  const handleChangeGoal = (event: React.ChangeEvent<{ value: string }>) => {
    setGoal(event.target.value);
  };

  const [place, setPlace] = useState("");
  const handleChangePlace = (event: React.ChangeEvent<{ value: string }>) => {
    setPlace(event.target.value);
  };

  const [country, setCountry] = useState("none");
  const handleChangeCountry = (event: any) => {
    setCountry(event.target.value);
  };

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
    api.get("/destinies").then((response) => setDestinies(response.data));
  }, []);

  const CreateDestinie = async () => {
    const response = await api.post("/destinies", {
      goal,
      place,
      country,
      createdAt: new Date(),
    });

    const destination = response.data as DestiniesProps;

    setDestinies([...destinies, destination]);

    setCountry("none");
    setPlace("");
    setGoal("");
  };

  return (
    <DestiniesContext.Provider
      value={{
        destinies,
        CreateDestinie,
        countries,
        country,
        goal,
        place,
        handleChangeCountry,
        handleChangeGoal,
        handleChangePlace,
      }}
    >
      {children}
    </DestiniesContext.Provider>
  );
}

export function useDestination() {
  const context = useContext(DestiniesContext);

  return context;
}
