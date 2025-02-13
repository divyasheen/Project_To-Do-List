import './App.css'
import Category from './components/Category'
import Add from "./components/Add";
import { Routes, Route, NavLink } from "react-router-dom";
import Display from "./components/Display";
import InspoPhrase from './components/InspoPhrase'


function App() {
  return (
    <>
      <Category/>
    <Routes>
      <Route index element = {<Display />}/>
      <Route path = "/" element = {<Display />}/>
      <Route path = "/add" element = {<Add />}/>
    </Routes>

    <NavLink to = "/add">Add</NavLink>
      <InspoPhrase/>
    </>
  );
}

export default App;
