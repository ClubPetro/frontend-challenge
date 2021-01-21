import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditPlaceProvider from "./context/EditPlaceContext";
import GetPlacesProvider from "./context/GetPlacesContext";

import Edit from "./pages/Edit";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetPlacesProvider>
      <EditPlaceProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/editar" component={Edit} exact />
          </Switch>
        </Router>
      </EditPlaceProvider>
    </GetPlacesProvider>
  );
};

export default App;
