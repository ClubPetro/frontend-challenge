import ButtonForm from "components/Button";
import SelectCountry from "components/SelectCountry";
import SelectDate from "components/SelectDate";
import SelectPlace from "components/SelectPlace";
// import AlarmIcon from "@material-ui/icons/Edit";
// import IconButton from "@material-ui/core/IconButton";
import * as S from "./styles";

export default function Menu() {
  return (
    <S.Container>
      <S.Content>
        <SelectCountry />
        <SelectPlace />
        <SelectDate />
        <ButtonForm />
        {/* <IconButton color="primary" size="small">
          <AlarmIcon />
        </IconButton> */}
      </S.Content>
    </S.Container>
  );
}
