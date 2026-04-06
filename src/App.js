import './App.css';
import Highlights from './Components/Highlights';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Featured from './Components/Featured';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;