import {Link} from "react-router-dom";

const BookListItem = ({ele}) => {
  console.log(ele)
  return (
      <Link to="/booklist" className="text-decoration-none">
        <li className="list-group-item wd-bg-blue px-4">
          <img className="rounded m-2 col-12" src={ele.img}
               alt={"booklist cover"}/>
          <p className="m-2">{ele.title}</p>
        </li>
      </Link>

  );
};
export default BookListItem;