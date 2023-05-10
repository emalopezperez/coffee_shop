import "../../../styles/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navLinks">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            Pages
          </Link>
          <Link className="link" to="/">
            Shop
          </Link>
          <Link className="link" to="/">
            Contact
          </Link>
        </ul>
      </nav>

      <ul className="navButton">
        <Link to="/">
          <button className="button" type="submit">
            Carta
          </button>
        </Link>
      </ul>
    </header>
  );
};

export default Nav;
