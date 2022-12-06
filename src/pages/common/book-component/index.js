import {Link} from "react-router-dom";

const BookComponent = ({info}) => {
  return (
      <div className="col-lg-6 col-md-12">
        <Link to={`/book/${info.isbn}`} className="text-decoration-none text-black d-flex flex-row">
          <img className="rounded" height={200} src={info.image} alt={"cover"}/>
          <div className="d-flex flex-column">
            <p className="fw-bold m-3">{info.title}</p>
            <p className="ms-3">{info.subtitle}</p>
            {info.authors && <p className="ms-3">Authors: {info.authors}</p>}
            <p className="mt-auto ms-3">
              <i className="bi bi-star-fill text-warning"></i>
              <span className="ms-2">4.0</span>
            </p>
          </div>
        </Link>
      </div>
  );
}

export default BookComponent;