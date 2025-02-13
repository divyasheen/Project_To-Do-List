import './App.css'
import InspoPhrase from './components/InspoPhrase'
import "./App.css";
import Add from "./components/Add";
import { Routes, Route, NavLink } from "react-router-dom";
import Display from "./components/Display";

function App() {
  return (
    <>
      <InspoPhrase/>
    <Routes>
      <Route index element = {<Display />}/>
      <Route path = "/" element = {<Display />}/>
      <Route path = "/add" element = {<Add />}/>
    </Routes>

    <NavLink to = "/add">Add</NavLink>
    
    </>
  );
}

export default App;
