import { useContext } from "react";
import FormAddPlace from "../components/FormAddPlace";
import GridCardPlaces from "../components/GridCardPlaces";
import Header from "../components/Header";
import { ModalEditContext } from "../context/ModalEditContext";

const Home = () => {

  const { isModalVisible } = useContext(ModalEditContext);

  return (
    <>
      <Header />
      <FormAddPlace />
      <GridCardPlaces />
    </>
  );
};

export default Home;
