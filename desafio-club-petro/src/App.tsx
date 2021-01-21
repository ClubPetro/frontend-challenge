import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/editar" component={Edit} exact />
      </Switch>
    </Router>
  );
};

export default App;
