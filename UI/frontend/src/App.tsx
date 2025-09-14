import './App.css'
import Navbar from "./Components/Navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {UserProvader} from "./Context/useAuth.tsx";

function App() {
    return (
        <>
            <UserProvader>
                <Navbar />
                <Outlet />
                <ToastContainer />
            </UserProvader>
        </>
    );
}

export default App;
