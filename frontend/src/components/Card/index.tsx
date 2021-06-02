import * as S from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

import IconButton from "@material-ui/core/IconButton";

export default function Card() {
  return (
    <S.Container>
      <S.Presentation>
        <S.Row>
          <S.Flag src="https://restcountries.eu/data/afg.svg" alt="country" />
          <S.ContainerIcons>
            <IconButton color="primary" size="small">
              <EditIcon />
            </IconButton>
            <IconButton color="primary" size="small">
              <CloseIcon />
            </IconButton>
          </S.ContainerIcons>
        </S.Row>
        <S.Row>
          <S.Text>BRASIL</S.Text>
        </S.Row>
      </S.Presentation>
      <S.Content>
        <S.Description>Local: Racho meu Xodó</S.Description>
        <S.Description>Meta: 07/2021</S.Description>
      </S.Content>
    </S.Container>
  );
}
