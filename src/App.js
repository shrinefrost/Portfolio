import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GlobalStyled from "./components/GlobalStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
