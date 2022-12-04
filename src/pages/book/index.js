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
        </div>
    );

};
export default Book;