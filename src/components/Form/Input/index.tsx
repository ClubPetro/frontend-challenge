import { Container, LabelStyles, InputStyles, InputMaskStyles } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  titleLabel?: string;
  placeholderText?: string;
  register?: UseFormRegisterReturn;
  isVisible?: boolean | undefined;
  isMask?: boolean;
}
export function Input({
  titleLabel,
  placeholderText,
  register,

  isVisible,
  isMask = false,
}: Props) {
  return (
    <Container>
      <LabelStyles isVisible={isVisible}>{titleLabel}</LabelStyles>
      {isMask ? (
        <InputMaskStyles
          type="text"
          placeholder={placeholderText}
          {...register}
        />
      ) : (
        <InputStyles type="text" placeholder={placeholderText} {...register} />
      )}
    </Container>
  );
}
