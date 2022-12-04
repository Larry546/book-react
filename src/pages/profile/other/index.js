import React from "react";
// import "./index.css";
import LikedBooklistItem from "../own/liked-booklist-item";
import CreatedBooklistItem from "../own/created-booklist-item";
const ProfileOther = () => {
    return(
        <div className="container">
            <div className="clearfix">
                {/*<img className="rounded-circle float-end m-3" width="35"
                     src={"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="avatar-1">
                </img>*/}
                <button className="btn btn-secondary rounded-pill float-end m-3">
                    <i className="bi bi-search me-2"></i>Search</button>
                <button className="btn btn-secondary rounded-pill float-start m-3">
                    <i className="bi bi-house me-2"></i>Home</button>
            </div>
            <div className="text-center mt-5">
                {/*<img className="rounded-circle align-items-center" width="150"
                     src={"https://bootdey.com/img/Content/avatar/avatar6.png"} alt="avatar-2">
                </img>*/}
                <h4 className="fw-bold">Other name</h4>
                <p className="mt-2 text-secondary">@handle-other</p>
                <p className="mt-2 text-dark ">Happy Boy is always happy</p>
                <span className="fw-bolder">2</span>
                <span className="text-secondary"> Following</span>
                <span className="fw-bolder ps-4">4</span>
                <span className="text-secondary"> Follower</span>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-danger rounded-pill">Follow</button>
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
export default ProfileOther;