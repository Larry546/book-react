import booklist from "./booklist.json";
import BookListItem from "./booklistitem";

const BookList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-4">
                    <a href="/" className="ps-2 wd-link">Back to Home Page</a>
                </div>
                <div className="col-3 mt-4">
                    <a href="/search" className="ps-2 wd-link">Back to Search Page</a>
                </div>
                <div className="col-4"></div>
                <div className="col-2">
                    <a href="/login">
                        <button className="btn btn-secondary rounded-pill float-end m-3 mt-4">
                            Log In</button></a>
                </div>
            </div>

            <h1 className="ps-3 pt-3">{booklist.title}</h1>
            <span className="fw-bold ps-3 pt-3">Created by
                <a href="#" className="wd-link"> {booklist.creator}</a></span>
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