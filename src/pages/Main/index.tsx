import React from "react";
import Header from "../../components/Header";
import Listing from "../../components/Listing";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Listing />
    </Container>
  );
};

export default Main;
