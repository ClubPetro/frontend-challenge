import * as Styled from "../Styles";
import Logo from "/public/img/Logo.png";
import { Pivot as Hamburger } from "hamburger-react";
import Image from "next/image";

function TopBar({ isOpen, setIsOpen }: any) {
  return (
    <>
      <Styled.TopBar>
        <Image src={Logo} width="152px" alt="logo" />
        <Hamburger direction="right" toggled={isOpen} toggle={setIsOpen} />
      </Styled.TopBar>
    </>
  );
}

export default TopBar;
