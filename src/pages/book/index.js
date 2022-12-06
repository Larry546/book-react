import React, {useEffect, useState} from "react";
import Header from "../header";
import {useParams} from "react-router";
import {getBookInfo} from "../../services/book-service";
import CommentLitsItem from "./comment-lits-item";

const Book = () => {
    const {isbn} = useParams();
    const [bookInfo, setBookInfo] = useState({});
    useEffect(() => {
        const fetchInfo = async () => {
            let res = await getBookInfo(isbn);
            setBookInfo(res);
        }
        fetchInfo().catch(e => console.log(e));
    }, [isbn])
    return (
        <div className="container">
            <Header/>
            <div className="row">
                <div className="card mt-3 col-4 wd-bg-sameblue">
                    {/*<div className="card-header">{bookInfo.title}</div>*/}
                    <div className="card-img col-12">
                        <img className="rounded-bottom"
                             src={bookInfo.image} alt={"BOOK"} width="100%"/>
                    </div>
                    <div className="card-body text-center">
                        {/*<i className="bi bi-heart-fill fw-bolder fs-2 text-danger"></i>*/}
                        <i className="bi bi-heart fw-bolder fs-2 text-secondary"></i>
                    </div>
                </div>
                <div className="card mt-3 col-8 wd-bg-sameblue">
                    <div className="card-header">Book Details</div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <h5>Book name: </h5>
                                <span className="text-secondary">{bookInfo.title}</span>
                            </div>
                            <div className="mb-3">
                                <h5>Book author: </h5>
                                <span className="text-secondary">{bookInfo.authors}</span>
                            </div>
                            <div className="mb-3">
                                <h5>Book price: </h5>
                                <span className="text-secondary">{bookInfo.price}</span>
                            </div>
                            <div className="mb-3">
                                <h5>Publish Year: </h5>
                                <span className="text-secondary">{bookInfo.year}</span>
                            </div>
                            <div className="mb-3">
                                <h5>Publisher: </h5>
                                <span className="text-secondary">{bookInfo.publisher}</span>
                            </div>
                            <div className="mb-3">
                                <h5>Description: </h5>
                                <span className="text-secondary">{bookInfo.desc}</span>
                            </div>
                            <div className="mb-3">
                                <h5>More details: </h5>
                                <span className="text-secondary">{bookInfo.url}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card mt-3 col-8 offset-4 wd-bg-sameblue">
                    <div className="card-header fs-5 text-dark">Comments for this book</div>
                    <div className="card-body list-group wd-bg-sameblue">
                        <li className="list-group-item border-bottom wd-bg-sameblue">
                            <button className="btn btn-primary w-25 float-end">Comment</button>
                            <input placeholder="Please input the comment" className="form-control w-75"/>
                        </li>
                        <CommentLitsItem/>
                        <CommentLitsItem/>
                        <CommentLitsItem/>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Book;