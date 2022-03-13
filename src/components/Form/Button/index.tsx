import { ButtonStyles } from "./styles";
interface Props {
  titleButton: string;
  type: "button" | "submit" | "reset" | undefined;
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  typebgcolor?: "default" | "cancel";
}
export function Button({
  titleButton,
  type,
  handleClick,
  typebgcolor = "default",
}: Props) {
  return (
    <ButtonStyles
      variant="contained"
      type={type}
      onClick={handleClick}
      typebgcolor={typebgcolor}
    >
      {titleButton}
    </ButtonStyles>
  );
}
