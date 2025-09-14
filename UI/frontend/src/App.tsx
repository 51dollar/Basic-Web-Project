import './App.css'
import Navbar from "./Components/Navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    );
}

export default App;
