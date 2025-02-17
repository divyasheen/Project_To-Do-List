import "./App.css";
import Display from "./components/Display";
import Add from "./components/Add";
import { Routes, Route } from "react-router-dom";
import InspoPhrase from "./components/InspoPhrase";
import Logo from "./components/Logo";

function App() {
  return (
    <>
    <Logo />
      <InspoPhrase />
      {/* JB: This div should be in Display.jsx. There it should contain <Filter /> as well.
      But don't want to interfer with Divya =D */}

      <Routes>
        <Route index element={<Display />} />
        <Route path="/" element={<Display />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;