import { Container } from "./styles";

interface Props {
  image: string | undefined;
}

export function Header({ image }: Props) {
  return (
    <Container>
      <img src={image} alt="Lugares que eu quero conhecer" />
    </Container>
  );
}
