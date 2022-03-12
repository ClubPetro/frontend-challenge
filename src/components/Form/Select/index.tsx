import React from "react";
import { SelectStyles, MenuItemStyles, LabelStyles, Container } from "./styles";
import { SelectChangeEvent } from "@mui/material";

interface Props {
  titleLabel?: string;
  value: string;
  handleChangeSelect:
    | ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void)
    | undefined;
  contentMenuItem: object[];
  isVisible?: boolean | undefined;
}

const ITEM_HEIGHT = 80;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      borderRadius: 7,
    },
  },
};

export function Select({
  titleLabel,
  value,
  handleChangeSelect,
  contentMenuItem,
  isVisible,
}: Props) {
  function renderValue(option: string) {
    if (option === "") {
      return <span>Selecione...</span>;
    }

    return <span>{option}</span>;
  }

  return (
    <Container>
      <LabelStyles isVisible={isVisible}>{titleLabel}</LabelStyles>
      <SelectStyles
        displayEmpty
        value={value}
        onChange={handleChangeSelect}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
        renderValue={() => renderValue(value)}
      >
        {contentMenuItem &&
          contentMenuItem.map((item: any, key: number) => (
            <MenuItemStyles value={item.name} key={key}>
              {item.name}
            </MenuItemStyles>
          ))}
      </SelectStyles>
    </Container>
  );
}
