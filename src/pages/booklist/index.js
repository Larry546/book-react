import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../common/header";
import {useParams} from "react-router";
import {getBookList} from "../../services/booklist/booklist-service";
import BookComponent from "../common/book-component";

const BookList = () => {
  const {lid} = useParams();
  const [list, setList] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await getBookList(lid);
      setList(res);
    };

    getData().catch(err => console.log(err));
  }, [lid])

  return (
      <div className="container">
        <Header/>
        <h1 className="ps-3 pt-3">{list && list.title}</h1>
        <span className="fw-bold ps-3 pt-3">
          Created by
                <Link to={`/profile/${list && list.creator ? list.creator._id
                    : "#"}`} className="wd-link"> {list && list.creator
                    && list.creator.fullname}
                </Link>
        </span>
        <p className="ps-3 pt-3">{list && list.intro}</p>
        <div className="my-4 wd-bg-blue rounded">
          <div className="d-flex flex-wrap">
            {list && list.books && list.books.map(
                (ele, idx) => <BookComponent key={idx} info={ele}/>)}
          </div>
        </div>
      </div>
  );
}
export default BookList;