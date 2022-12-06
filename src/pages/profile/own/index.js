import React from "react";
// import "./index.css";
import CreatedBooklistItem from "./created-booklist-item";
import LikedBooklistItem from "./liked-booklist-item";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../../services/user/user-thunks";
import HomeButton from "../../header/home-button";
import SearchButton from "../../header/search-button";

const Profile = () => {
    const {currentUser} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!currentUser) {
        return <Navigate to='/login'/>
    }

    const handleLogout = () => {
        dispatch(logoutThunk());
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="clearfix">
                    <div className="float-end">
                        <SearchButton/>
                    </div>

                    <div className="float-start me-3">
                        <HomeButton/>
                    </div>

                    <button
                        className="btn btn-secondary rounded-pill float-start mt-4"
                        onClick={handleLogout}
                    >
                        logout
                    </button>


                    {/* todo add link */}
                    {/*<Link to="">*/}
                    {/*    <button className="btn btn-secondary rounded-pill float-start mt-4">Create</button>*/}
                    {/*</Link>*/}
                </div>
            </div>

            <div className="text-center mt-5">
                <h4 className="fw-bold">{currentUser.fullname || "Full Name"}</h4>
                <div>
                    <span className="text-secondary">@{currentUser.username || "username"}</span>
                </div>
                <span className="text-secondary ps-4">{currentUser.location || "location"}</span>
                <span className="text-secondary ps-4">{currentUser.website || "website"}</span>
                <span className="text-secondary ps-4">{currentUser.email || "email"}</span>
                <span className="text-secondary ps-4">{(currentUser.dob && currentUser.dob.split(
                    'T')[0]) || "date of birth"}</span>
                <p>{currentUser.bio || "bio"}</p>
                <Link to="/following" className="text-decoration-none">
                    <span className="fw-bolder">10</span>
                    <span className="text-danger"> Following</span>
                </Link>
                <Link to="/follower" className="text-decoration-none">
                    <span className="fw-bolder ps-4">7</span>
                    <span className="text-primary"> Follower</span>
                </Link>
            </div>
            <div className="text-center mt-3">
                <Link to="/edit-profile">
                    <button className="btn btn-primary rounded-pill">Edit Profile</button>
                </Link>
            </div>
            <div className="mt-4 wd-bg-blue">
                {currentUser && currentUser.role === "creator" &&
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item wd-bg-blue w-25">
                            <h4 className="fw-bold m-3">Created<br></br>BOOKLISTS</h4>
                        </li>
                        <CreatedBooklistItem/>
                        <CreatedBooklistItem/>
                        <CreatedBooklistItem/>
                        <CreatedBooklistItem/>
                    </ul>}

                <ul className="list-group list-group-horizontal row">
                    <li className="list-group-item wd-bg-blue col-4">
                        <h4 className="fw-bold m-3">Liked<br></br>BOOK</h4>
                    </li>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                </ul>

                <ul className="list-group list-group-horizontal row">
                    <li className="list-group-item wd-bg-blue col-2">
                        <h4 className="fw-bold m-3">Liked<br></br>BOOKLISTS</h4>
                    </li>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                    <div className="col-2">
                        <LikedBooklistItem/>
                    </div>
                </ul>

            </div>
        </div>
    );
};
export default Profile;