import GetAllPlacesProvider from "./context/GetAllPlacesContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetAllPlacesProvider>
      <Home />
    </GetAllPlacesProvider>
  );
};

export default App;
