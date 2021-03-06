import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { HomeScreen } from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SingleProduct } from "./screens/SingleProduct";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { ProfileScreen } from "./screens/ProfileScreen";
import { CartScreen } from "./screens/CartScreen";
import { ShippingScreen } from "./screens/ShippingScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { PlaceOrderScreen } from "./screens/PlaceOrderScreen";
import { OrderScreen } from "./screens/OrderScreen";
import { NotFound } from "./screens/NotFound";
// import { Loading } from "./components/LoadingComps/Loading";
// import { Toast } from "./components/LoadingComps/Toast";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/Profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order" component={OrderScreen} />
        <Route path="*" component={NotFound} />
        {/* <Route path="/loading" component={Loading} /> */}
        {/* <Route path="/toast" component={Toast} /> */}
      </Switch>
    </Router>
  );
}

export default App;
