import {
  CardContentStyles,
  CardStyles,
  CloseIconStyles,
  ContentBody,
  ContentHeader,
  ContentImage,
  DividerStyles,
  Icons,
  ModeEditIconStyles,
} from "./styles";

export function Card() {
  return (
    <CardStyles>
      <CardContentStyles>
        <ContentHeader>
          <ContentImage>
            <img src="#" alt="countries" />
            <span>brasil</span>
          </ContentImage>
          <Icons>
            <ModeEditIconStyles />
            <CloseIconStyles />
          </Icons>
        </ContentHeader>
        <DividerStyles />
        <ContentBody>
          <span>Local: Balneario Camboriu</span>
          <span>Meta: 04/2022</span>
        </ContentBody>
      </CardContentStyles>
    </CardStyles>
  );
}
