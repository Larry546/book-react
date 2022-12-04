import {useEffect, useState} from "react";

import {getBookInfo} from "../../services/book-service";

const BookListItem = ({isbn}) => {
    const [info, setInfo] = useState({});
    useEffect( () => {
        const fetchInfo = async () => {
            let bookInfo = await getBookInfo(isbn);
            setInfo(bookInfo);

        }
        fetchInfo().catch(e => console.log(e));
    }, [isbn])

    return(
        <div className="col-6 d-flex flex-row">
            <img className="rounded" height={200} src={info.image} alt={"cover"}/>
            <div className="d-flex flex-column">
                <p className="fw-bold m-3">{info.title}</p>
                <p className="ms-3">{info.subtitle}</p>
                <p className="ms-3">Authors: {info.authors}</p>
                <p className="mt-auto ms-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="ms-2">4.0</span>
                </p>
            </div>
        </div>
    );
};
export default BookListItem;