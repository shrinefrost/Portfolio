import styled from "styled-components";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <NavBar>
      <div className="logo">
        <div>
          <Link id="logo" to="/">
            S
          </Link>
        </div>
        <span>Suraj</span>
      </div>
      <div className="Page-link">
        <Link id="home" to="/">
          Home
        </Link>
        <Link id="about" to="/about">
          About
        </Link>
        <Link id="project" to="/projects">
          Projects
        </Link>
      </div>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 100%;
  padding: 1.1rem 6.5rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background: #1b1b1b;
  backdrop-filter: blur(10px);
  z-index: 999;
  border-bottom: 1px solid #e6e6e6;
  min-height: 10vh;
  .logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.4rem;
    font-weight: 100;
    div {
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #23d997;
      color: #fff;
      border-radius: 50%;
      font-size: 1.1rem;
      font-weight: 700;
    }

    span {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .Page-link {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    a {
      text-decoration: none;
      font-size: 1rem;
      color: white;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        color: white;
        transform: translateY(-2px);
        transform: scale(1.2);
      }
    }
  }
`;

export default Nav;
