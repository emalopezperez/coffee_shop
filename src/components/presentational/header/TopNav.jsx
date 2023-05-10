import "../../../styles/top-nav.css";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="topNav">
      <ul className="">
        <a>
          <Link className="linkTopNav" to="/">
            10:00 a 9:00 am
          </Link>
        </a>
        <a>
          <Link className="linkTopNav logo" to="/">
            Benodit
          </Link>
        </a>
        <a>
          <Link className="linkTopNav" to="/">
            Montevideo, 1213 Artigas
          </Link>
        </a>
      </ul>
    </nav>
  );
};

export default TopNav;
