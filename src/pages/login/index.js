import {Link} from "react-router-dom";
import React from "react";

const Login = () => {
    return (
        <div className="container">
          <div className="row">
              <div className="col-5">
                  <div className="position-absolute top-0 end-20">
                      <Link to="/">
                          <button className="btn btn-secondary rounded-pill float-start m-3">
                              <i className="bi bi-house me-2"></i>Home
                          </button>
                      </Link>
                  </div>
                  <img className="col-12" src="/images/bookship.jpeg" alt="illustration"/>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-center">
                  <div>
                      <h1 className="text-center">Welcome Back</h1>
                      <label htmlFor="UsernameInput" className="col-form-label">Username</label>
                      <input className="form-control" id="UsernameInput"></input>
                      <label htmlFor="PasswdInput" className="col-form-label">Password</label>
                      <input type="password" className="form-control" id="PasswdInput"></input>
                      <button className="btn btn-warning rounded w-100 mt-5">Log In</button>
                      <p className="text-center mt-3">Don't have an account?
                          <span>
                              {/*todo signup*/}
                              <Link to="/" className="btn btn-link align-baseline">Sign up</Link>
                          </span>
                      </p>
                  </div>
              </div>
          </div>
        </div>
    );
}
export default Login;