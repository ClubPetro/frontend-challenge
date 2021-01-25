import EditPlaceProvider from "./context/EditPlaceContext";
import GetAllPlacesProvider from "./context/GetAllPlacesContext";
import ModalEditProvider from "./context/ModalEditContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetAllPlacesProvider>
      <ModalEditProvider>
        <EditPlaceProvider>
          <Home />
        </EditPlaceProvider>
      </ModalEditProvider>
    </GetAllPlacesProvider>
  );
};

export default App;
