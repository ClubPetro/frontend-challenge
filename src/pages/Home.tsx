import FormAddPlace from "../components/FormAddPlace";
import GridCardPlaces from "../components/GridCardPlaces";
import Header from "../components/Home";

const Home = () => {
  return (
    <>
      <Header />
      <FormAddPlace />
      <GridCardPlaces />
    </>
  );
};

export default Home;
