import React from "react";
// import "./index.css";
import CreatedBooklistItem from "./created-booklist-item";
import LikedBooklistItem from "./liked-booklist-item";
import {Link} from "react-router-dom";

const Profile = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="clearfix">
                    <Link to="/search">
                        <button className="btn btn-secondary rounded-pill float-end mt-4">
                            <i className="bi bi-search me-2"></i>Search
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="btn btn-secondary rounded-pill float-start mt-4 me-3">
                            <i className="bi bi-house me-2"></i>Home
                        </button>
                    </Link>
                    {/* todo add link */}
                    <Link to="">
                        <button className="btn btn-secondary rounded-pill float-start mt-4">Create</button>
                    </Link>
                </div>
            </div>

            <div className="text-center mt-5">
                <h4 className="fw-bold">My name</h4>
                <p className="text-secondary">@handle</p>
                <span className="fw-bolder">10</span>
                <span className="text-secondary"> Following</span>
                <span className="fw-bolder ps-4">7</span>
                <span className="text-secondary"> Follower</span>
            </div>
            <div className="text-center mt-3">
                <Link to="/edit-profile">
                    <button className="btn btn-primary rounded-pill">Edit Profile</button>
                </Link>
            </div>
            <div className="mt-4">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item wd-bg-blue w-25">
                        <h4 className="fw-bold m-3">Created<br></br>BOOKLISTS</h4>
                    </li>
                    <CreatedBooklistItem/>
                    <CreatedBooklistItem/>
                    <CreatedBooklistItem/>
                    <CreatedBooklistItem/>
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item wd-bg-blue w-25">
                        <h4 className="fw-bold m-3">Liked<br></br>BOOKLISTS</h4>
                    </li>
                    <LikedBooklistItem/>
                    <LikedBooklistItem/>
                    <LikedBooklistItem/>
                    <LikedBooklistItem/>
                </ul>
            </div>
        </div>
    );
};
export default Profile;