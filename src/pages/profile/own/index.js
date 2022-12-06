import React from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../../services/user/user-thunks";
import HomeButton from "../../common/header/home-button";
import SearchButton from "../../common/header/search-button";
import ListComponent from "../../common/list-component/list-component";

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
                    <span className="fw-bolder text-secondary">10</span>
                    <span className="text-danger"> Following</span>
                </Link>
                <Link to="/follower" className="text-decoration-none">
                    <span className="fw-bolder ps-4 text-secondary">7</span>
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
                    <ListComponent title="CREATED BOOKLISTS" isList={true}/>}
                <ListComponent title="LIKED BOOKS"/>
                <ListComponent title="LIKED BOOKLISTS"/>
            </div>
        </div>
    );
};
export default Profile;