import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetailsComponent = () => {
    const { product_id } = useParams();

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState("Loading vehicle details...");
    const [error, setError] = useState("");

    const getCarDetails = async () => {
        try {
            const response = await axios.get(
                `https://abraham59.alwaysdata.net/api/getproduct/${product_id}`
            );

            setCar(response.data);
            setLoading("");
        } catch (err) {
            setLoading("");
            setError("Unable to load vehicle details.");
            console.log(err);
        }
    };

    useEffect(() => {
        getCarDetails();
    }, [product_id]);

    return (
        <div className="container py-5">

            {loading && (
                <h4 className="text-center text-primary">
                    {loading}
                </h4>
            )}

            {error && (
                <h4 className="text-center text-danger">
                    {error}
                </h4>
            )}

            {car && (
                <div className="card shadow-lg border-0">

                    <div className="row g-0">

                        <div className="col-md-6">
                            <img
                                src={car.product_photo}
                                alt={car.product_name}
                                className="img-fluid rounded-start"
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>

                        <div className="col-md-6">

                            <div className="card-body p-4">

                                <h2 className="fw-bold">
                                    {car.product_name}
                                </h2>

                                <h3 className="text-success mb-3">
                                    Ksh {car.product_cost}
                                </h3>

                                <hr />

                                <p>
                                    <strong>Brand:</strong>{" "}
                                    {car.brand}
                                </p>

                                <p>
                                    <strong>Model:</strong>{" "}
                                    {car.model}
                                </p>

                                <p>
                                    <strong>Year:</strong>{" "}
                                    {car.year}
                                </p>

                                <p>
                                    <strong>Fuel Type:</strong>{" "}
                                    {car.fuel_type}
                                </p>

                                <p>
                                    <strong>Transmission:</strong>{" "}
                                    {car.transmission}
                                </p>

                                <p>
                                    <strong>Color:</strong>{" "}
                                    {car.color}
                                </p>

                                <p>
                                    <strong>Mileage:</strong>{" "}
                                    {car.mileage} KM
                                </p>

                                <hr />

                                <h5>Description</h5>

                                <p>
                                    {car.product_description}
                                </p>

                                <button className="btn btn-primary btn-lg w-100">
                                    Contact Seller
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
};

export default CarDetailsComponent;