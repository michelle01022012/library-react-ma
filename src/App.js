import './App.css';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";


function App() {
  return (
   <Router>
    <div className="App">
      <Nav />
       <Route path="/" exact Component={Home} />
       <Route path="/books" Component={Books} />
      <Home />     
      <Footer />
    </div>
  </Router>
  );
}

export default App;