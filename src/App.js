import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch }
  from "react-router-dom";
  import Navbar from "../src/Components/navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
