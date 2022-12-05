import {Link} from "react-router-dom";

const SearchItem = ({item}) => {
    return(
        <div className="col-lg-6 col-md-12">
          <Link to={`/book/${item.isbn13}`} className="d-flex flex-row text-decoration-none text-dark">
            <img className="rounded" height={200} src={item.image} alt={"cover"}/>
            <div className="d-flex flex-column">
              <p className="fw-bold m-3">{item.title}</p>
              <p className="ms-3">{item.subtitle}</p>
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