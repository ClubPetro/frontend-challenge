import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";

const Container = styled.div`
  /* width: 100%; */

  /* background-color: greenyellow; */
`;

const Label = styled.p`
  color: white;
  margin-bottom: 5px;
`;

const SelectSC = styled(Select)<{ country: string }>`
  height: 50px;
  width: 300px;
  outline: "none";
  cursor: "pointer";
  text-align: "left";
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 1px solid ${grey[300]};
  background-color: white;
  border-radius: 0.25rem;
`;

export default function SelectCountry() {
  const useStyles = makeStyles((theme) => ({
    selectdisabled: {
      color: grey[500],
    },
    menuitem: {
      direction: "rtl",
    },
    menuitemhidden: {
      display: "none",
    },
  }));
  const classes = useStyles();
  const [country, setCountry] = useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState(country === "none");
  const handleChange = (event: any) => {
    setCountry(event.target.value);
  };
  return (
    <Container>
      <Label>País</Label>
      <FormControl>
        <SelectSC
          country={country}
          value={country}
          onChange={handleChange}
          input={<InputBase />}
          defaultValue="none"
          onFocus={() => setShowPlaceholder(false)}
          onClose={(e: any) => setShowPlaceholder(e.target.value === undefined)}
          className={clsx(
            ".root",
            country === "none" ? classes.selectdisabled : null
          )}
        >
          <MenuItem
            className={clsx(
              classes.menuitem,
              !showPlaceholder ? classes.menuitemhidden : null
            )}
            key="0"
            disabled
            value="none"
          >
            Selecione...
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectSC>
      </FormControl>
    </Container>
  );
}
