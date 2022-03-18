import "./App.css";
import "./responsive.css";
import { HomeScreen } from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SingleProduct } from "./screens/SingleProduct";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
