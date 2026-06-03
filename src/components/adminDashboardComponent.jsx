import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboardComponent = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // Not logged in
        if (!user) {
            navigate("/signin");
            return;
        }

        // Logged in but not admin
        if (user.role !== "admin") {
            alert("Access Denied. Admins Only.");
            navigate("/");
        }
    }, [navigate, user]);

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/signin");
    };

    if (!user || user.role !== "admin") {
        return null;
    }

    return (
        <div className="container-fluid bg-light min-vh-100 py-5">
            <div className="container">

                <div className="card shadow-lg border-0 mb-4">
                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h2 className="fw-bold text-primary">
                                    Admin Dashboard
                                </h2>

                                <p className="text-muted">
                                    Welcome {user.username}
                                </p>
                            </div>

                            <button
                                className="btn btn-danger"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </div>

                    </div>
                </div>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">

                                <h4>Add Product</h4>

                                <p>
                                    Add new vehicles to your inventory.
                                </p>

                                <Link
                                    to="/addproduct"
                                    className="btn btn-success w-100"
                                >
                                    Add Vehicle
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">

                                <h4>Manage Products</h4>

                                <p>
                                    View, edit and delete products.
                                </p>

                                <Link
                                    to="/manageproducts"
                                    className="btn btn-primary w-100"
                                >
                                    Manage Vehicles
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">

                                <h4>Orders</h4>

                                <p>
                                    View customer orders.
                                </p>

                                <Link
                                    to="/orders"
                                    className="btn btn-warning w-100"
                                >
                                    View Orders
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboardComponent;