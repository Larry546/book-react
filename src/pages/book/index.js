import React from "react";
import Header from "../header";

const Book = () => {
    return (
        <div className="container">
            <Header/>
            <div className="row">
                <div className="card mt-3 col-4 wd-bg-sameblue">
                    <div className="card-header">BOOK</div>
                    <div className="card-img text-center">
                        <img className="rounded-bottom col-12"
                             src="/images/bookship.jpeg" alt={"BOOK"}/>
                    </div>
                </div>
                <div className="card mt-3 col-8 wd-bg-sameblue">
                    <div className="card-header">Book Details</div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <h5>Book name: </h5>
                                <span className="text-secondary">book 1</span>
                            </div>
                            <div className="mb-3">
                                <h5>Book author: </h5>
                                <span className="text-secondary"> Jose</span>
                            </div>
                            <div className="mb-3">
                                <h5>Book price: </h5>
                                <span className="text-secondary"> $1000</span>
                            </div>
                            <div className="mb-3">
                                <h5>Publish Year: </h5>
                                <span className="text-secondary"> 2018</span>
                            </div>
                            <div className="mb-3">
                                <h5>Publisher: </h5>
                                <span className="text-secondary"> Manning</span>
                            </div>
                            <div className="mb-3">
                                <h5>Description: </h5>
                                <span className="text-secondary"> An application running in the cloud can benefit from incredible efficiencies,
                                    but they come with unique security threats too. A DevOps team's highest priority is understanding those
                                    risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...
                                </span>
                            </div>
                            <div className="mb-3">
                                <h5>More details: </h5>
                                <span className="text-secondary"> https://itbook.store/books/9781617294136</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card mt-3 col-8 offset-4 wd-bg-sameblue">
                    <div className="card-header">Comments for this book</div>
                    <div className="card-body list-group wd-bg-sameblue">
                        <li className="list-group-item wd-bg-sameblue">
                            <button className="btn btn-primary w-25 float-end">Comment</button>
                            <input placeholder="Please input the comment" className="form-control w-75"/>
                        </li>
                        <li className="list-group-item border wd-bg-sameblue">
                            <button className="btn btn-danger float-end ms-2">Delete</button>
                            <p className="m-1" ><span className="fs-5 text-secondary">1234:</span> Good books</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Book;