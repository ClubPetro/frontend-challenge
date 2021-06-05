import Card from "components/Card";
import * as S from "./styles";
import { useDestination } from "hooks/useDestination";

interface Props {
  onOpenEditModalDestination: () => void;
}

export default function Dashboard({ onOpenEditModalDestination }: Props) {
  return (
    <S.Container>
      {/* <Card onOpenModalEditDestination={onOpenEditModalDestination} />
      <Card onOpenModalEditDestination={onOpenEditModalDestination} />
      <Card onOpenModalEditDestination={onOpenEditModalDestination} />
      <Card onOpenModalEditDestination={onOpenEditModalDestination} />
      <Card onOpenModalEditDestination={onOpenEditModalDestination} />
      <Card onOpenModalEditDestination={onOpenEditModalDestination} />
      <Card onOpenModalEditDestination={onOpenEditModalDestination} /> */}
    </S.Container>
  );
}
