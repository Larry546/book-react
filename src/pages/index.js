import {Routes, Route} from "react-router";
import Home from "./home";
import Login from "./login";
import Search from "./search";
import BookList from "./booklist";
import Profile from "./profile/own";
import ProfileOther from "./profile/other";
import EditProfile from "./profile/edit-profile";
import Book from "./book";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer";
import {Provider} from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

function MyApp() {
  return (
      <Provider store={store}>
        <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="booklist" element={<BookList/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="profile-other" element={<ProfileOther/>}/>
            <Route path="edit-profile" element={<EditProfile/>}/>
            <Route path="book" element={<Book/>}/>
          </Routes>
        </div>
      </Provider>

  );
}

export default MyApp