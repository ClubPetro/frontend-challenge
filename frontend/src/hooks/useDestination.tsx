import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

import axios from "axios";

interface APIData {
  name: string;
  flag: string;
}

// ----------------------------------------------
interface TransactionsProps {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  type: string;
  value: number;
}

type TransactionInput = Omit<TransactionsProps, "id" | "createdAt">;

interface DestinationProviderProps {
  children: ReactNode;
}

interface TransactionsData {
  transactions: TransactionsProps[];
  CreateTransaction: (transaction: TransactionInput) => Promise<void>;
  countries: APIData[];
}

const TransactionContext = createContext<TransactionsData>(
  {} as TransactionsData
);

// Usado na raiz dos componente no App, apenas!
export function DestinationProvider({ children }: DestinationProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
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
      setCountries(filteredValues);
    };

    loadData();
  }, []);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const CreateTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, CreateTransaction, countries }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useDestination() {
  const context = useContext(TransactionContext);

  return context;
}
