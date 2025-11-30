import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import GlobalStyled from "./components/GlobalStyled";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyled />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
