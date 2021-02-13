import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import { Provider } from "./context/GlobalState";

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/search/:name">
            <SearchResults />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Provider>
      </Switch>
    </Router>
  );
};

export default App;
