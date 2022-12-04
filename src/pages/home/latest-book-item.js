import {Link} from "react-router-dom";

const LatestBookItem = () => {
    return(
        <Link to="/book" className="text-decoration-none">
          <li className="list-group-item wd-bg-blue px-4">
            <img className="rounded m-2 col-12" src="/images/bookship.jpeg" alt={"book cover"}/>
            <p className="m-2">BOOK TITLE</p>
          </li>
        </Link>
    );
};
export default LatestBookItem;