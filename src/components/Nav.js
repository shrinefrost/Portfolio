import styled from "styled-components";
function Nav() {
  return (
    <NavBar>
      <div className="logo">
        <div>S</div>
        <span>Suraj</span>
      </div>
      <div className="Page-link">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background-color: #1b1b1b;
  color: white;
`;

export default Nav;
