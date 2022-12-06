import {useEffect, useState} from "react";

import {getBookInfo} from "../../services/book/book-service";
import BookComponent from "../common/book-component";

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
        <BookComponent info={info}/>
    );
};
export default BookListItem;