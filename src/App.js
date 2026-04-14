import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { books } from "./data";
import Bookinfo from "./Components/Bookinfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        <Route
          path="/books"
          render={() => <Books books={books} />}/>
          <Route path="/books/:id" render={() => <Bookinfo books={books} />} />
        </Switch>
        {/* <Home /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;