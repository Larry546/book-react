import {Link} from "react-router-dom";
import React from "react";

const Header = ({search = true, home = true, user = true}) => {
  return (
      <div className="row">
        <div>
          {search &&
              <Link to="/search">
                <button
                    className="btn btn-secondary rounded-pill float-start mt-4 me-3">
                  <i className="bi bi-search me-2"></i>Search
                </button>
              </Link>}
          {home &&
              <Link to="/">
                <button
                    className="btn btn-secondary rounded-pill float-start mt-4">
                  <i className="bi bi-house me-2"></i>Home
                </button>
              </Link>
          }
          {user &&
              <Link to="/login">
                <button
                    className="btn btn-secondary rounded-pill float-end mt-4">
                  Log In
                </button>
              </Link>}
        </div>
      </div>
  );
}

export default Header;