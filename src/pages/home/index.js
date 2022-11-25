import LatestBooklistItem from "./latest-booklist-item";
import LatestBookItem from "./latest-book-item";

const Home = () => {
    return (
        <div className="container">
            <div className="clearfix">
                <button className="btn btn-secondary rounded-pill float-end m-3">Log In</button>
                <button className="btn btn-secondary rounded-pill float-end m-3">
                    <i className="bi bi-search me-2"></i>Search</button>
                <img height={50} src="/images/logo2.png" className="float-start me-4" alt="logo"/>
                <h1 className="fw-bold m-3 mt-4">WELCOME TO BOOKLY</h1>
            </div>

            <div className="mt-4">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item wd-bg-blue w-25">
                        <h4 className="fw-bold m-3">LATEST <br></br>BOOKLISTS</h4>
                    </li>
                    <LatestBooklistItem/>
                    <LatestBooklistItem/>
                    <LatestBooklistItem/>
                    <LatestBooklistItem/>
                </ul>

                <ul className="list-group list-group-horizontal mt-4">
                    <li className="list-group-item wd-bg-blue w-25">
                        <h4 className="fw-bold m-3">LATEST <br></br>BOOKS</h4>
                    </li>
                    <LatestBookItem/>
                    <LatestBookItem/>
                    <LatestBookItem/>
                    <LatestBookItem/>
                </ul>
            </div>
        </div>
    );
}
export default Home;