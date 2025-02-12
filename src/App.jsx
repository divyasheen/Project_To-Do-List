import "./App.css";
import Add from "./components/Add";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";

function App() {
  return (
    <>
    <Routes>
      <Route index element = {<Display />}/>
      <Route path = "/" element = {<Display />}/>
      <Route path = "/add" element = {<Add />}/>
    </Routes>
    
    </>
  );
}

export default App;
