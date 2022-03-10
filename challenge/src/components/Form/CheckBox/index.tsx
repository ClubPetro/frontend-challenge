import React from "react";
import { SelectStyles, MenuItemStyles, LabelStyles, Container } from "./styles";
import { SelectChangeEvent } from "@mui/material";

interface Props {
  titleLabel?: string;
  value: string;
  handleChangeCheckbox:
    | ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void)
    | undefined;
  contentMenuItem: object[];
}
export function FildsCheckbox({
  titleLabel,
  value,
  handleChangeCheckbox,
  contentMenuItem,
}: Props) {
  return (
    <Container>
      <LabelStyles>{titleLabel}</LabelStyles>
      <SelectStyles
        value={value}
        onChange={handleChangeCheckbox}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItemStyles value="">Selecione...</MenuItemStyles>
        {contentMenuItem.map((item: any, key: number) => (
          <MenuItemStyles value={item.name} key={key}>
            {item.name}
          </MenuItemStyles>
        ))}
      </SelectStyles>
    </Container>
  );
}
