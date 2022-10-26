import { ClassList } from "./ClassList";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import useLogin from "./../hooks/login_hook";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

// Change to daisyui for component library

export const App = () => {
    const { login, logout, loggedIn, customer, staff } = useLogin();

    return (
        <>
            <header>
                <Nav
                    logout={logout}
                    loggedIn={loggedIn}
                    customer={customer}
                    staff={staff}
                />
            </header>
            <Routes>
                <Route path="/" element={<h1>Hello World!</h1>} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route path="/cruises" element={<ClassList />} />
            </Routes>
            <footer>
                <span>Footer text</span>
            </footer>
        </>
    );
};
