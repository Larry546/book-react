import booklist from "./booklist.json";
import BookListItem from "./booklistitem";
import {Link} from "react-router-dom";
import React from "react";
import Header from "../header";

const BookList = () => {
    return (
        <div className="container">
            <Header/>
            <h1 className="ps-3 pt-3">{booklist.title}</h1>
            <span className="fw-bold ps-3 pt-3">Created by
                <Link to="#" className="wd-link"> {booklist.creator}</Link>
            </span>
            <p className="ps-3 pt-3">{booklist.description}</p>
            <div className="my-4 wd-bg-blue rounded">
                <div className="d-flex flex-wrap">
                    {booklist.books.map(element => <BookListItem key={element.isbn13} isbn={element.isbn13}/>)}
                </div>
            </div>
        </div>
    );
}
export default BookList;