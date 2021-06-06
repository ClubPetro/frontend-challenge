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
  flag: string;
  createdAt: string;
}

type DestiniesInputEdit = Omit<
  DestiniesProps,
  "country" | "createdAt" | "flag" | "id"
>;

interface DestinationProviderProps {
  children: ReactNode;
}

interface DestiniesData {
  destinies: DestiniesProps[];
  CreateDestinie: () => Promise<void>;
  EditDestinie: (data: DestiniesInputEdit) => Promise<void>;
  SetIdToEditAndDelete: (id: number) => void;
  DeleteDestinie: (id: number) => Promise<void>;
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
  const [idToEditAndDeleteDestinie, setIdToEditAndDeleteDestinie] =
    useState<number>(0);
  const [goal, setGoal] = useState("");

  const SetIdToEditAndDelete = (id: number) => {
    setIdToEditAndDeleteDestinie(id);
  };

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

  const loadDestinies = async () => {
    api.get("/destinies").then((response) => setDestinies(response.data));
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
    loadDestinies();
  }, []);

  const CreateDestinie = async (): Promise<void> => {
    const data = countries.find((elem) => elem.name === country);

    const response = await api.post("/destinies", {
      goal,
      place,
      country,
      flag: data !== undefined ? data.flag : undefined,
      createdAt: new Date(),
    });

    const destination = response.data as DestiniesProps;

    setDestinies([...destinies, destination]);

    setCountry("none");
    setPlace("");
    setGoal("");
  };

  const EditDestinie = async ({
    goal,
    place,
  }: DestiniesInputEdit): Promise<void> => {
    const destinie = await api.get(`/destinies/${idToEditAndDeleteDestinie}`);

    const editedDestinie = {
      ...destinie.data,
      goal,
      place,
    };

    await api.put(`/destinies/${idToEditAndDeleteDestinie}`, editedDestinie);

    loadDestinies();
  };

  const DeleteDestinie = async (id: number): Promise<void> => {
    await api.delete(`/destinies/${id}`);

    loadDestinies();
  };

  return (
    <DestiniesContext.Provider
      value={{
        destinies,
        CreateDestinie,
        EditDestinie,
        DeleteDestinie,
        SetIdToEditAndDelete,
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
