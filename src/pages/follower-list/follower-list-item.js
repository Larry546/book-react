import React from "react";
const FollowerListItem = () => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-8">
                    <div className="fw-bold ms-1">username</div>
                    <div className="text-secondary ms-1">@handle</div>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default FollowerListItem;
