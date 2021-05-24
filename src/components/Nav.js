import { NavLink, withRouter } from "react-router-dom";
import "../App.css";

const Nav = ({ history }) => {
  return (
    <nav className="Nav">
      <div className="container">
        <div className="">
          <a role="button" style={{ color: "lightgray" }}></a>
        </div>

        <div>
          <div className="nav-item">
            <NavLink to="/"></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
