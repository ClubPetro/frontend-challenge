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
  CountriesTitle,
} from "./styles";

interface Props {
  urlImage: string;
  altImage: string;
  countries: string;
  local: string;
  meta: string;
  handleEditCard?: React.MouseEventHandler<SVGSVGElement> | undefined;
  handleDeleteCard?: React.MouseEventHandler<SVGSVGElement> | undefined;
}

export function Card({
  urlImage,
  altImage,
  countries,
  local,
  meta,
  handleEditCard,
  handleDeleteCard,
}: Props) {
  return (
    <CardStyles>
      <CardContentStyles>
        <ContentHeader>
          <ContentImage>
            <img src={urlImage} alt={altImage} width={56} height={34} />
            <Icons>
              <ModeEditIconStyles onClick={handleEditCard} />
              <CloseIconStyles onClick={handleDeleteCard} />
            </Icons>
          </ContentImage>
          <CountriesTitle>
            <span>{countries}</span>
          </CountriesTitle>
        </ContentHeader>
        <DividerStyles />
        <ContentBody>
          <span>Local: {local}</span>
          <span>Meta: {meta}</span>
        </ContentBody>
      </CardContentStyles>
    </CardStyles>
  );
}
