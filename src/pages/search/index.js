import itemArray from "./items.json";   //https://api.itbook.store/1.0/search/mongodb?page=2
import SearchItem from "./search-item";

const Search = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-4">
                    <a href="/" className="ps-2 wd-link">Back to Home Page</a>
                </div>

                <div className="col-7">
                    <div className="input-group mt-4">
                        <input className="form-control rounded-0 rounded-start" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary rounded-0 rounded-end" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <a href="/login">
                        <button className="btn btn-secondary rounded-pill float-end m-3 mt-4">
                            Log In</button></a>
                </div>
            </div>

            <div className="mt-4 wd-bg-blue rounded">
                <p className="fw-bold ps-3 pt-3">Found {itemArray.total} results</p>
                <div className="d-flex flex-wrap">
                    {itemArray.books.map(element => <SearchItem key={element.isbn13} item={element}/>)}
                </div>
            </div>


            <div align="middle" className="my-3">
                <button className="btn rounded-pill">← Previous</button>  {/*page1: class="invisible"*/}
                <span className="align-middle fw-bold"> Page {itemArray.page} </span>
                <button className="btn rounded-pill">Next →</button>
            </div>
        </div>
    );
}
export default Search;