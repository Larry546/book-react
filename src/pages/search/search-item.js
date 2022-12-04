import {Link} from "react-router-dom";

const SearchItem = (
    item = {
        title:"Node.js, MongoDB and Angular Web Development, 2nd Edition",
        subtitle:"The definitive guide to using the MEAN stack to build web applications",
        isbn13:"9780134655536",
        price:"$33.16",
        image:"https://itbook.store/img/books/9780134655536.png",
        url:"https://itbook.store/books/9780134655536"
    }
) => {
    return(
        <div className="col-lg-6 col-md-12">
          <Link to="/book" className="d-flex flex-row text-decoration-none text-dark">
            <img className="rounded" height={200} src={item.item.image} alt={"cover"}/>
            <div className="d-flex flex-column">
              <p className="fw-bold m-3">{item.item.title}</p>
              <p className="ms-3">{item.item.subtitle}</p>
              <p className="mt-auto ms-3">
                <i className="bi bi-star-fill text-warning"></i>
                <span className="ms-2">4.0</span>
              </p>
            </div>
          </Link>

        </div>
    );
};
export default SearchItem;