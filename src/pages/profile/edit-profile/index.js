import React from "react";
import Header from "../../header";

const EditProfile = () => {
    return (
        <div className="container">
            <Header/>
            <div className="card mt-3 justify-content-center col-8 offset-2 {/*col-8*/} wd-bg-sameblue">
                <div className="card-header">
                    Profile Details
                </div>
                <div className="card-body">
                    <form>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="userNameInput" className="form-label">Username</label>
                                <textarea className="form-control" id="userNameInput">My name</textarea>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <textarea className="form-control" id="passwordInput">123457</textarea>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bioInput" className="form-label">Bio</label>
                            <textarea className="form-control" id="bioInput" >I am very happy.</textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="locationInput" className="form-label">Location</label>
                            <input className="form-control" id="locationInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email</label>
                            <input className="form-control" id="emailInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="websiteInput" className="form-label">Website</label>
                            <input className="form-control" id="websiteInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthInput" className="form-label">Date of Birth</label>
                            <input className="form-control" type="date" />
                        </div>
                        <button className="btn btn-primary rounded-pill me-3">Save changes</button>
                        <button className="btn btn-secondary rounded-pill">Back</button>
                    </form>
                </div>
            </div>
        </div>
    );

};
export default EditProfile;