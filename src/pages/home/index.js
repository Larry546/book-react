import LatestBooklistItem from "./latest-booklist-item";
import LatestBookItem from "./latest-book-item";
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div className="container">
        <div className="clearfix">
          <Link to="/login">
            <button className="btn btn-secondary rounded-pill float-end m-3">Log
              In
            </button>
          </Link>
          <Link to="/search">
            <button className="btn btn-secondary rounded-pill float-end m-3">
              <i className="bi bi-search me-2"></i>Search
            </button>
          </Link>
          <img height={50} src="/images/logo2.png" className="float-start me-4"
               alt="logo"/>
          <h1 className="fw-bold m-3 mt-4">WELCOME TO BOOKLY</h1>
        </div>

        <div className="mt-4">
          <ul className="list-group list-group-horizontal wd-bg-blue">
            <li className="list-group-item wd-bg-blue col-4">
              <h4 className="fw-bold m-3">LATEST <br/>BOOKLISTS</h4>
            </li>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBooklistItem/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBooklistItem/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBooklistItem/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBooklistItem/>
              </div>
            </div>

          </ul>

          <ul className="list-group list-group-horizontal mt-4 wd-bg-blue">
            <li className="list-group-item wd-bg-blue col-4">
              <h4 className="fw-bold m-3">LATEST <br/>BOOKS</h4>
            </li>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBookItem/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBookItem/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBookItem/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <LatestBookItem/>
              </div>
            </div>

          </ul>
        </div>
      </div>
  );
}
export default Home;