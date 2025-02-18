import "./App.css";
import Display from "./components/Display";
import Add from "./components/Add";
import { Routes, Route } from "react-router-dom";
import InspoPhrase from "./components/InspoPhrase";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;