// import itemArray from "./items.json";   //https://api.itbook.store/1.0/search/mongodb?page=2
import SearchItem from "./search-item";
import React, {useState} from "react";
import HomeButton from "../header/home-button";
import UserButton from "../header/user-button";
import {searchBook} from "../../services/book-service";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const handleSearch = async () => {
    const res = await searchBook(keyword);
    setSearchResult(res);
  }
  const handleNextPages = async () => {
    const res = await searchBook(keyword, parseInt(searchResult.page) + 1);
    setSearchResult(res);
  }

  const handlePrePages = async () => {
    const res = await searchBook(keyword, parseInt(searchResult.page) - 1);
    setSearchResult(res);
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <HomeButton/>
          </div>

          <div className="col-7">
            <div className="input-group mt-4">
              <input
                  className="form-control rounded-0 rounded-start"
                  placeholder="Search"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary rounded-0 rounded-end"
                        type="button"
                        onClick={handleSearch}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="float-end">
              <UserButton/>
            </div>
          </div>
        </div>

        {searchResult && searchResult.books && searchResult.books.length > 0 ?
            <div>
              <div className="mt-4 wd-bg-blue rounded">
                <p className="fw-bold ps-3 pt-3">Found {searchResult.total} results</p>
                <div className="d-flex flex-wrap">
                  {searchResult.books.map(
                      element => <SearchItem key={element.isbn13}
                                             item={element}/>)}
                </div>
              </div>

              <div align="middle" className="my-3">
                <button className="btn rounded-pill" onClick={handlePrePages}>← Previous</button>
                {/*page1: class="invisible"*/}
                <span
                    className="align-middle fw-bold"> Page {searchResult.page}
                </span>
                <button className="btn rounded-pill" onClick={handleNextPages}>Next →</button>
              </div>
            </div> :
            <div
                className="d-flex justify-content-center align-items-center mt-5 fw-bolder">
              No result
            </div>}

      </div>
  );
}
export default Search;