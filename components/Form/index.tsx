import * as Styled from "../Styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";
import { useState, useEffect, useRef } from "react";
import { LocalDB } from "../../pages/api/fetchers";
import { useToast } from "../../contexts/ToastContext";

type Props = {
  visible: boolean;
  setReload: any;
  setVisible: any;
};
type Countries = {
  name: string;
  flag: string;
};

function Form({ visible, setVisible, setReload }: Props) {
  const [place, setPlace] = useState("");
  const [meta, setMeta] = useState("");
  const [countries, setCountries] = useState<Countries[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<number | undefined>();
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v2/all`);
      const data = await response.json();
      const filteredInfos: Countries[] = [];
      data.map((country: any) => {
        filteredInfos.push({
          name: country?.translations?.br,
          flag: country.flags.svg,
        });
      });
      setCountries(filteredInfos);
      setIsLoading(false);
    };
    fetchCountries();
  }, []);

  const resetForm = () => {
    setSelectedCountry(undefined);
    setReload((prev: boolean) => !prev);
    setMeta("");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {
      ...countries[Number(selectedCountry)],
      place: place,
      meta: meta,
    };
    const create = await LocalDB.CREATE(values);
    if (create.status === 201) {
      setVisible(false);
      toast("Local adicionado a agenda", "success");
      formRef.current?.reset();
      resetForm();
    } else toast("Erro ao adicionar local", "error");
  };

  return (
    <>
      <Styled.FormContainer visible={visible}>
        <form onSubmit={handleSubmit} ref={formRef}>
          <FormControl variant="outlined">
            <label className="custom-label">Países</label>
            <Select
              required
              native
              disabled={isLoading ?? false}
              displayEmpty
              value={selectedCountry}
              onChange={(event) => {
                setSelectedCountry(event.target.value as number);
              }}
            >
              <option value={undefined}>Selecione</option>
              {countries.map((item, index) => (
                <option value={index} key={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <label className="custom-label">Local</label>
            <TextField
              disabled={!selectedCountry}
              id="outlined-size-small"
              placeholder="Digite o local que deseja conhecer"
              size="small"
              onBlur={(event) => setPlace(event.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <label className="custom-label">Meta</label>
            <InputMask
              mask="99/9999"
              maskChar={null}
              required
              disabled={!selectedCountry}
              id="outlined-size-small"
              placeholder="mês/ano"
              value={meta}
              onChange={(event) => setMeta(event.target.value)}
            >
              {(inputProps: any) => <TextField size="small" {...inputProps} />}
            </InputMask>
          </FormControl>

          <Styled.Btn type="submit" variant="contained">
            Adicionar
          </Styled.Btn>
        </form>
      </Styled.FormContainer>
    </>
  );
}

export default Form;
