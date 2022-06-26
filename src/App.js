import './App.css';
import ReactDOM from 'react-dom'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/about';
import Scenarios from './pages/scenarios';
import Alphabet from './pages/alphabet';
import Read from './pages/read'
import AlanContainer from './AlanContainer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/about" exact element={<About></About>}></Route>
        <Route path="/scenarios" exact element={<Scenarios></Scenarios>}></Route>
        <Route path="/alphabet" exact element={<Alphabet></Alphabet>}></Route>
        <Route path="/start-reading" exact element={<Read></Read>}></Route>
      </Routes>
      <AlanContainer/>

    </Router>

  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
export default App;
