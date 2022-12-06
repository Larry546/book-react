import React, {useEffect, useState} from "react";
import Header from "../common/header";
import {useParams} from "react-router";
import {getBookInfo} from "../../services/book/book-service";
import {useSelector} from "react-redux";
import {
  createReview,
  getReviewByBook
} from "../../services/review/review-service";
import {
  findUserLikeBook,
  likebook,
  unlikebook
} from "../../services/like-book/like-book-service";

const Book = () => {
  const {isbn} = useParams();
  const [bookInfo, setBookInfo] = useState({});
  const {currentUser} = useSelector(state => state.user);
  const [comments, setComments] = useState([]);
  const [curComment, setCurComment] = useState("");
  const [like, setLike] = useState("");

  useEffect(() => {
    const fetchInfo = async () => {
      let res = await getBookInfo(isbn);
      let reviewRes = await getReviewByBook(isbn);
      if (currentUser) {
        let likeRes = await findUserLikeBook(currentUser._id, isbn);
        if (likeRes.length && likeRes[0]._id) {
          setLike(likeRes[0]._id);
        }
      }
      setBookInfo(res);
      setComments(reviewRes);
    }
    fetchInfo().catch(e => console.log(e));
  }, [isbn, currentUser])

  const handleComment = async () => {
    const review = {user: currentUser._id, book: isbn, content: curComment};
    const res = await createReview(review);
    setComments([...res, ...comments]);
  }

  const handleLike = async () => {
    if (!currentUser) {
      return;
    }
    if (!like.length) {
      const likeinfo = {user: currentUser._id, book: isbn};
      const res = await likebook(likeinfo);
      if (res && res._id) {
        setLike(res._id);
      }
    } else {
      const res = await unlikebook(like);
      if (res && res.acknowledged) {
        setLike("");
      }
    }
  }

  return (
      <div className="container">
        <Header/>
        <div className="row">
          <div className="card mt-3 col-4 wd-bg-sameblue">
            <div className="card-img col-12">
              <img className="rounded-bottom"
                   src={bookInfo.image} alt={"BOOK"} width="100%"/>
            </div>
            <div className="d-flex justify-content-center p-1" onClick={handleLike}>
              {like.length ?
                  <i className="bi bi-heart-fill fw-bolder fs-2 text-danger"></i>
                  :
                  <i className="bi bi-heart fw-bolder fs-2 text-secondary"></i>}

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
          <div className="card mt-2 col-8 offset-4 wd-bg-sameblue pb-5">
            <div className="card-header">Comments for this book</div>
            <div className=" list-group wd-bg-sameblue">
              {currentUser && <li
                  className="list-group-item m-0 wd-bg-sameblue d-flex justify-content-around align-items-center">
                <input placeholder="Please input the comment"
                       className="form-control"
                       value={curComment}
                       onChange={e => setCurComment(e.target.value)}
                />
                <button className="btn btn-primary float-end"
                        onClick={handleComment}
                >
                  Comment
                </button>
              </li>}
              {
                comments.length ? comments.map((c, idx) =>
                        <li
                            key={idx}
                            className="list-group-item border-bottom rounded-0 wd-bg-sameblue">
                          {currentUser && currentUser.role === "admin" &&
                              <div className="float-end">
                                <i className="bi bi-trash"></i>
                              </div>
                          }
                          <div className="m-1 row">
                            <div
                                className="text-secondary col-2"
                                onClick={() => {
                                  // todo Link to Profile
                                }}
                            >
                              {c.user.fullname} @{c.user.username}:
                            </div>
                            <div className="col-8">
                              {c.content}
                            </div>
                            <div className="col-2">
                              {c.createdAt.split('T')[0]}
                            </div>
                          </div>
                        </li>) :
                    <div className="d-flex justify-content-center">
                      No comment
                    </div>
              }
            </div>
          </div>
        </div>
      </div>
  );

};
export default Book;