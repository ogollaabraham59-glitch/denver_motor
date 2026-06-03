import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminDashboardComponent = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    // 🔐 ADMIN AUTH CHECK
    useEffect(() => {
        if (!user) {
            navigate("/signin");
            return;
        }

        if (user.role !== "admin") {
            alert("Access Denied. Admins Only.");
            navigate("/");
            return;
        }

        loadProducts();
    }, []);

    // 📦 GET ALL PRODUCTS
    const loadProducts = async () => {
        setLoading("Loading products...");
        setError("");

        try {
            const res = await axios.get(
                "https://abraham59.alwaysdata.net/api/get_products"
            );

            setProducts(res.data);
            setLoading("");

        } catch (err) {
            setLoading("");
            setError("Failed to load products");
        }
    };

    // 🗑 DELETE PRODUCT
    const deleteProduct = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            await axios.delete(
                `https://abraham59.alwaysdata.net/api/delete_product/${id}`
            );

            // refresh list after delete
            setProducts(products.filter((item) => item.id !== id));

        } catch (err) {
            alert("Failed to delete product");
        }
    };

    if (!user || user.role !== "admin") return null;

    return (
        <div className="container py-5">

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold text-primary">
                        Admin Dashboard
                    </h2>

                    <p className="text-muted">
                        Welcome, {user.username}
                    </p>
                </div>

                <Link to="/addproduct" className="btn btn-success">
                    + Add Vehicle
                </Link>

            </div>

            {/* STATUS */}
            {loading && (
                <p className="text-info">{loading}</p>
            )}

            {error && (
                <p className="text-danger">{error}</p>
            )}

            {/* PRODUCTS */}
            <div className="row">

                {products.length === 0 && (
                    <div className="text-center text-danger">
                        🚫 No products available in inventory
                    </div>
                )}

                {products.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>

                        <div className="card shadow h-100">

                            <img
                                src={
                                    "https://abraham59.alwaysdata.net/static/images/" +
                                    item.product_image
                                }
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                                alt={item.product_name}
                            />

                            <div className="card-body">

                                <h5>{item.product_name}</h5>

                                <p className="text-muted">
                                    {item.product_description?.substring(0, 60)}...
                                </p>

                                <h6 className="text-success">
                                    Ksh {item.product_cost}
                                </h6>

                            </div>

                            <div className="card-footer bg-white border-0">

                                <button
                                    className="btn btn-danger w-100"
                                    onClick={() => deleteProduct(item.id)}
                                >
                                    Delete Product
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default AdminDashboardComponent;