import GetAllPlacesProvider from "./context/GetAllPlacesContext";
import ModalEditProvider from "./context/ModalEditContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetAllPlacesProvider>
      <ModalEditProvider>
        <Home />
      </ModalEditProvider>
    </GetAllPlacesProvider>
  );
};

export default App;
