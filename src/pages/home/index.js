import LatestBooklistItem from "./latest-booklist-item";
import LatestBookItem from "./latest-book-item";
import UserButton from "../header/user-button";
import SearchButton from "../header/search-button";

const Home = () => {
  return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img height={50} src="/images/logo2.png" className="me-4"
                 alt="logo"/>
            <h1 className="fw-bold m-3 mt-4">WELCOME TO BOOKLY</h1>
          </div>
          <div className="d-flex">
            <div className="me-3">
              <SearchButton/>
            </div>
            <div>
              <UserButton/>
            </div>
          </div>
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