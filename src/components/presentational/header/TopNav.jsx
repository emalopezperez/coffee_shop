import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="topNav">
      <ul className="">
        <a>
          <Link className="linkTopNav" to="/">
            direccion
          </Link>
        </a>
        <a>
          <Link className="linkTopNav logo" to="/">
            Logo
          </Link>
        </a>
        <a>
          <Link className="linkTopNav" to="/">
            direccion
          </Link>
        </a>
      </ul>
    </nav>
  );
};

export default TopNav;
