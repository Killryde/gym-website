import { Link } from "react-router-dom";

export const Nav = ({ logout, loggedIn, customer, staff }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Highstreet Gym 
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {customer ? (
                        <>
                            <li>
                                <Link to="/classes">Classes</Link>
                            </li>
                            <li>
                                <Link to="/bookings">Bookings</Link>
                            </li>
                            <li>
                                <Link to="/account">Account</Link>
                            </li>
                        </>
                    ) : (
                        <></>
                    )}
                    {staff ? (
                        <>
                            <li>
                                <Link to="/admin/customers">Customers</Link>
                            </li>
                            <li>
                                <Link to="/admin/bookings">Customers Bookings</Link>
                            </li>
                            <li>
                                <Link to="/admin/cruises">Cruises</Link>
                            </li>
                            <li>
                                <Link to="/admin/ports">Ports</Link>
                            </li>
                            <li>
                                <Link to="/admin/staff">Staff</Link>
                            </li>
                        </>
                    ) : (
                        <></>
                    )}
                    {loggedIn ? (
                        <li>
                            <a
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </a>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to="/sign-up">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};
