import { Container, LabelStyles, InputStyles } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  titleLabel?: string;
  placeholderText?: string;
  register?: UseFormRegisterReturn;
  isBorder?: boolean | undefined;
  isVisible?: boolean | undefined;
}
export function Input({
  titleLabel,
  placeholderText,
  register,
  isBorder,
  isVisible,
}: Props) {
  return (
    <Container>
      <LabelStyles isVisible={isVisible}>{titleLabel}</LabelStyles>
      <InputStyles
        type="text"
        placeholder={placeholderText}
        {...register}
        isBorder={isBorder}
      />
    </Container>
  );
}
