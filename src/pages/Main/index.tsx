import React from "react";
import Header from "../../components/Header";
import Listing from "../../components/Listing";
import Search from "../../components/Search";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Search />
      <Listing />
    </Container>
  );
};

export default Main;
