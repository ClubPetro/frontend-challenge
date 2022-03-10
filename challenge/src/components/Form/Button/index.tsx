import { ButtonStyles } from "./styles";
interface Props {
  titleButton: string;
  type: "button" | "submit" | "reset" | undefined;
}
export function Button({ titleButton, type }: Props) {
  return (
    <ButtonStyles variant="contained" type={type}>
      {titleButton}
    </ButtonStyles>
  );
}
