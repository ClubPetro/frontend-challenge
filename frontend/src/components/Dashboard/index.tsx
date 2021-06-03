import Card from "components/Card";
import * as S from "./styles";
interface Props {
  onOpenEditModalDestination: () => void;
}

export default function Dashboard({ onOpenEditModalDestination }: Props) {
  return (
    <S.Container>
      <Card onOpenModalEditDestination={onOpenEditModalDestination} />
    </S.Container>
  );
}
