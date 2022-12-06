import UserButton from "../common/header/user-button";
import SearchButton from "../common/header/search-button";
import ListComponent from "../common/list-component/list-component";

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
          <ListComponent title="LIKED BOOKS"/>
          <ListComponent title="LATEST BOOKLISTS" isList={true}/>
        </div>
      </div>
  );
}
export default Home;