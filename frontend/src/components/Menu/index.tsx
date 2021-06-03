import ButtonForm from "components/Button";
import SelectCountry from "components/SelectCountry";
import SelectDate from "components/SelectDate";
import SelectPlace from "components/SelectPlace";

import * as S from "./styles";

export default function Menu() {
  // Trazer a verificação dos valores aqui para fora
  return (
    <>
      <S.ContainerHeader>
        <S.ContentHeader>
          <SelectCountry />
          <SelectPlace />
          <SelectDate />
          <ButtonForm />
        </S.ContentHeader>
      </S.ContainerHeader>
    </>
  );
}
