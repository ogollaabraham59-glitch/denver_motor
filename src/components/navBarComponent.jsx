import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const NavBarComponent = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/signin");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">

            <div className="container-fluid">

                {/* BRAND */}
                <Link className="navbar-brand fw-bold text-warning" to="/">
                    🚗 DENVER MOTORS
                </Link>

                {/* TOGGLER (mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* NAV ITEMS */}
                <div className="collapse navbar-collapse" id="mainNavbar">

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/cars">
                                Cars
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/search">
                                Search
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        {/* ADMIN ONLY LINKS */}
                        {user?.role === "admin" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning" to="/addproduct">
                                        Add Motors
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-warning" to="/admindashboard">
                                        Admin Dashboard
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* AUTH SECTION */}
                        {!user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-success" to="/signin">
                                        Sign In
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-info" to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button
                                    onClick={logout}
                                    className="btn btn-danger btn-sm ms-2"
                                >
                                    Logout
                                </button>
                            </li>
                        )}

                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default NavBarComponent;