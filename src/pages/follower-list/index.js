import React from "react";
import {Link} from "react-router-dom";
import FollowerListItem from "./follower-list-item";
import FollowingListItem from "../following-list/following-list-item";

const FollowingList = () => {
    return (
        <div className="container">
            <Link to="/profile">
                <button className="btn btn-secondary rounded-pill mt-4">
                    <i className="bi bi-arrow-left me-2"></i>Back</button>
            </Link>
            <div className="row">
                <div className="card mt-3 col-8 offset-2 wd-bg-sameblue">
                    <div className="card-header text-center">Follower List</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <FollowingListItem/>
                                    <FollowingListItem/>
                                    <FollowingListItem/>
                                </div>
                                <div className="col-5 offset-2">
                                    <FollowingListItem/>
                                    <FollowingListItem/>
                                    <FollowingListItem/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );

};

export default FollowingList;