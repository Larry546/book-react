import Nav from "../temp-nav";
import {Routes, Route} from "react-router";
import Home from "./home";
import Login from "./login";

function MyApp() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default MyApp