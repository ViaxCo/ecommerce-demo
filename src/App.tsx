import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context/GlobalState";
import Saved from "./pages/Saved";
import loadable from "@loadable/component";
import ProgressLine from "./components/Loading/ProgressLine";
import Container from "./components/Container";
import Header from "./components/Header";

const Home = loadable(
  () => import("./pages/Home" /* webpackChunkName: "home" */),
  {
    fallback: <ProgressLine />,
  }
);
const Login = loadable(
  () => import("./pages/Login" /* webpackChunkName: "login" */),
  {
    fallback: <ProgressLine />,
  }
);
const Product = loadable(
  () => import("./pages/Product" /* webpackChunkName: "product" */),
  {
    fallback: <ProgressLine />,
  }
);
const Register = loadable(
  () => import("./pages/Register" /* webpackChunkName: "register" */),
  {
    fallback: <ProgressLine />,
  }
);
const Cart = loadable(
  () => import("./pages/Cart" /* webpackChunkName: "cart" */),
  {
    fallback: <ProgressLine />,
  }
);
const SearchResults = loadable(
  () =>
    import("./pages/SearchResults" /* webpackChunkName: "search-results" */),
  {
    fallback: <ProgressLine />,
  }
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider>
          <Container>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/search/:name">
              <SearchResults />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Container>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
        </Provider>
      </Switch>
    </Router>
  );
};

export default App;
