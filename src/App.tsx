import loadable from "@loadable/component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./components/Container";
import ProgressLine from "./components/Loading/ProgressLine";
import { Provider } from "./context/GlobalState";

const Home = loadable(() => import("./pages/Home"), {
  fallback: <ProgressLine />,
});
const Product = loadable(() => import("./pages/Product"), {
  fallback: <ProgressLine />,
});

const App = () => {
  return (
    <Provider>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
