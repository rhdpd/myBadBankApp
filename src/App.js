//import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/navbar';
import {Outlet} from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <br></br>
      <div className="centered">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
