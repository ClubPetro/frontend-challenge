import { Home } from "./Container/Home";
import { CountrieContextProvider } from "./context/CountrieContext";

function App() {
  return (
    <CountrieContextProvider>
      <Home />
    </CountrieContextProvider>
  );
}

export default App;
