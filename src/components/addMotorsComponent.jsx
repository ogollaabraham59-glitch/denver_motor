import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductComponent = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    // 🔐 ADMIN CHECK
    useEffect(() => {
        if (!user || user.role !== "admin") {
            alert("Access denied. Admins only.");
            navigate("/signin");
        }
    }, []);

    const [product_name, setProductName] = useState("");
    const [product_cost, setProductCost] = useState("");
    const [product_category, setProductCategory] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_image, setProductimage] = useState("");

    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading("Uploading product...");
        setError("");
        setSuccess("");

        try {
            const product_data = new FormData();

            product_data.append("product_name", product_name);
            product_data.append("product_cost", product_cost);
            product_data.append("product_category", product_category);
            product_data.append("product_description", product_description);
            product_data.append("product_image", product_image);

            const response = await axios.post(
                "https://abraham59.alwaysdata.net/api/add_product",
                product_data
            );

            if (response.status === 200) {
                setSuccess(response.data.message || "Product added successfully");
                setLoading("");

                setProductName("");
                setProductCost("");
                setProductCategory("");
                setProductDescription("");
                setProductimage("");
            }

        } catch (err) {
            setLoading("");
            setError(err.response?.data?.message || err.message);
        }
    };

    return (
        <div className="container py-4">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <h3 className="text-center mb-3">
                            Add New Car / Motor
                        </h3>

                        {loading && <p className="text-warning">{loading}</p>}
                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}

                        <form onSubmit={handleSubmit}>

                            <input
                                className="form-control mb-2"
                                placeholder="Car Name"
                                value={product_name}
                                onChange={(e) => setProductName(e.target.value)}
                                required
                            />

                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Price"
                                value={product_cost}
                                onChange={(e) => setProductCost(e.target.value)}
                                required
                            />

                            <select
                                className="form-select mb-2"
                                value={product_category}
                                onChange={(e) => setProductCategory(e.target.value)}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="cars">Cars</option>
                                <option value="suv">SUV</option>
                                <option value="truck">Truck</option>
                                <option value="motorbike">Motorbike</option>
                            </select>

                            <textarea
                                className="form-control mb-2"
                                placeholder="Description"
                                value={product_description}
                                onChange={(e) => setProductDescription(e.target.value)}
                            />

                            <input
                                type="file"
                                className="form-control mb-3"
                                onChange={(e) => setProductimage(e.target.files[0])}
                                required
                            />

                            <button
                                className="btn btn-dark w-100"
                                disabled={loading}
                            >
                                {loading ? "Uploading..." : "Add Product"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AddProductComponent;