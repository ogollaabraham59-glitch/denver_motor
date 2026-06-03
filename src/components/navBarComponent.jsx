import { Link } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NavBarComponent() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

            <div className="container-fluid">

                {/* LOGO */}
                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    SARAFINA DRESSINGS
                </Link>

                {/* TOGGLER BUTTON */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                {/* COLLAPSIBLE NAVBAR */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/"
                            >
                                Home
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/home"
                            >
                                Products
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/signup"
                            >
                                Sign Up
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/signin"
                            >
                                Sign In
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/addproduct"
                            >
                                Add Product
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/AboutUs"
                            >
                                About Us
                            </Link>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default NavBarComponent;