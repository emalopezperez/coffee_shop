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

        <ul className="navButoon">
          <Link to="/">
            <button type="submit">Book</button>
          </Link>
          <Link to="/">
            <button type="submit">Book</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
