import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/search">Search</Link> |
            <Link to="/booklist">Booklist</Link> |
            <Link to="/profile">Profile</Link> |
            <Link to="/profile-other">ProfileOther</Link> |
            <Link to="/edit-profile">EditProfile</Link> |
            <Link to="/book">Book</Link> |
        </div>
    )
}

export default Nav;