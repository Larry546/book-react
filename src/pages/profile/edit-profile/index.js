import React from "react";

const EditProfile = () => {
    return (
        <div className="container">
            {/*<div className="row">*/}
            {/* <div className="card mt-3 mb-4 col-4">
                    <div className="card-header">Profile Avatar</div>
                    <div className="card-body text-center">
                        <img className="rounded-circle mb-2"
                             src="https://bootdey.com/img/Content/avatar/avatar7.png" width="150" alt="edit-profile"/>
                        <div className="small text-muted mb-4">
                            <button className="btn btn-primary">Change Avatar</button>
                        </div>
                    </div>
                </div>*/}

            <div className="card mt-3 justify-content-center col-8 offset-2 {/*col-8*/} wd-bg-sameblue">
                <div className="card-header">Profile Details</div>
                <div className="card-body">
                    <form>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="userNameInput" className="form-label">User name</label>
                                <textarea className="form-control" id="userNameinput">My name</textarea>
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
                            <textarea className="form-control" id="locationInput">Boston,MA</textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="websiteInput" className="form-label">Website</label>
                            <textarea className="form-control" id="websiteInput">website</textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthInput" className="form-label">Date of Birth</label>
                            <textarea className="form-control" id="birthInput">01/10/1999</textarea>
                        </div>
                        <button className="btn btn-primary rounded-pill me-3">Save changes</button>
                        <button className="btn btn-secondary rounded-pill">Back</button>
                    </form>
                </div>
            </div>
            {/*</div>*/}
        </div>
    );

};
export default EditProfile;