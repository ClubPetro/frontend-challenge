import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetPlacesProvider from "./context/GetPlacesContext";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetPlacesProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/editar" component={Edit} exact />
        </Switch>
      </Router>
    </GetPlacesProvider>
  );
};

export default App;
