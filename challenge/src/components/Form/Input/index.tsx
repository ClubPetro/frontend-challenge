import { Container, LabelStyles, InputStyles } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  titleLabel?: string;
  placeholderText?: string;
  register?: UseFormRegisterReturn;
}
export function FildsTextInput({
  titleLabel,
  placeholderText,
  register,
}: Props) {
  return (
    <Container>
      <LabelStyles>{titleLabel}</LabelStyles>
      <InputStyles type="text" placeholder={placeholderText} {...register} />
    </Container>
  );
}
