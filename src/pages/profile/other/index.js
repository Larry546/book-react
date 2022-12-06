import React from "react";
import Header from "../../common/header";
import ListComponent from "../../common/list-component/list-component";

const ProfileOther = () => {
    return(
        <div className="container">
            <Header search={false}/>
            <div className="text-center mt-5">
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
                <ListComponent title="LIKED BOOKS"/>
                <ListComponent title="LIKED BOOKLISTS"/>
            </div>
        </div>
    );
};
export default ProfileOther;