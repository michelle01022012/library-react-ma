import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
   <Router>
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  </Router>
  );
}

export default App;