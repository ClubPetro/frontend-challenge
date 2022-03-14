import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import React from "react";
import { componentsTheme } from "../../theme/materialStyles";
import InputMask from "react-input-mask";
import MultipleSelect from "../MultipleSelect";

import {
  AddButton,
  Col,
  Container,
  InputRow,
  LocalInput,
  MetaInput,
} from "./styles";

const Search: React.FC = () => {
  return (
    <Container>
      <InputRow>
        <Grid justifyContent="center" container spacing={5}>
          <Grid item xs={2}>
            <MultipleSelect />
          </Grid>
          <Grid item xs={4}>
            <Col>
              <span>Local</span>
              <LocalInput placeholder="Digite o local que deseja conhecer" />
            </Col>
          </Grid>
          <Grid item xs={2}>
            <Col>
              <span>Meta</span>
              <MetaInput placeholder="mês/ano" />
            </Col>
          </Grid>
          <Grid item xs={2}>
            <AddButton>Adicionar</AddButton>
          </Grid>
        </Grid>
      </InputRow>
    </Container>
  );
};

export default Search;
