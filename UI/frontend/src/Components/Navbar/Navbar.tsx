import logo from './logo.png';
import {Link} from "react-router-dom";
import {useAuth} from "../../Context/useAuth.tsx";


const Navbar = () => {
    const {isLoggedIn, user, logout} = useAuth()
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to="/">
                        <img
                            src={logo}
                            alt=""
                            className="w-[250px] h-auto"
                        />
                    </Link>
                    <div className="hidden font-bold lg:flex">
                        <Link
                            to="/search"
                            className="text-black hover:text-darkBlue"
                        >
                            Search
                        </Link>
                    </div>
                </div>
                {isLoggedIn() ? (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <div className="hover:text-darkBlue">Welcome, {user?.username}</div>
                        <a
                            onClick={logout}
                            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                        >
                            Logout
                        </a>
                    </div>
                ) : (
                    <Link to="/login" className="hidden lg:flex items-center space-x-6 text-back">
                        <div className="hover:text-darkBlue">Login</div>
                        <Link
                            to="/register"
                            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                        >
                            Signup
                        </Link>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
