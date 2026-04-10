import './App.css';
import Highlights from './Components/Highlights';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Featured from './Components/Featured';
import Discounted from './Components/Discounted';
import Explore from './Components/Explore';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;