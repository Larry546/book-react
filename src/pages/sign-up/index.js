import {Link} from "react-router-dom";
import React from "react";
import HomeButton from "../common/header/home-button";

const SignUp = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="position-absolute top-0 end-20">
                        <HomeButton/>
                    </div>
                    <img className="col-12" src="/images/bookship.jpeg" alt="illustration"/>
                </div>
                <div className="col-6 offset-1 d-flex align-items-center justify-content-center mt-3">
                    <div>
                        <h2 className="text-center">Welcome to Sign Up an Account</h2>
                        <label htmlFor="UsernameInput" className="col-form-label">Username</label>
                        <input className="form-control" id="UsernameInput"/>

                        <label htmlFor="PasswdInput" className="col-form-label">Password</label>
                        <input type="password" className="form-control" id="PasswdInput"/>

                        <label htmlFor="FullNameInput" className="col-form-label">FullName</label>
                        <input className="form-control" id="FullNameInput"/>

                        <label htmlFor="EmailInput" className="col-form-label">Email</label>
                        <input type="email" className="form-control" id="EmailInput"/>

                        <label htmlFor="BirthdayInput" className="col-form-label">Date of
                            Birth</label>
                        <input className="form-control" id="BirthdayInput"/>

                        <label htmlFor="LocationInput" className="col-form-label">Location</label>
                        <input className="form-control" id="LocationInput"/>

                        <div className="form-check mt-3">
                            <label className="form-check-label" htmlFor="SignUpCheckBox">
                                Premium Membership
                            </label>
                            <input className="form-check-input" type="checkbox" id="SignUpCheckBox"/>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-5">
                                <button
                                    className="btn btn-warning rounded w-100 mt-5">Sign Up</button>
                            </div>
                            <div className="col-5 offset-1">
                                <Link to="/login"><button
                                    className="btn btn-secondary rounded w-100 mt-5 ms-1">Cancel</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;