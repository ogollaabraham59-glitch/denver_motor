import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CarListComponent = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState("Loading vehicles...");
    const [error, setError] = useState("");

    const getCars = async () => {
        try {
            const response = await axios.get(
                "https://abraham59.alwaysdata.net/api/getproducts"
            );

            setCars(response.data);
            setLoading("");
        } catch (err) {
            setLoading("");
            setError("Failed to load vehicles.");
            console.log(err);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <div className="container py-5">

            <h1 className="text-center mb-4 text-primary">
                Available Vehicles
            </h1>

            {loading && (
                <h4 className="text-center text-info">
                    {loading}
                </h4>
            )}

            {error && (
                <h4 className="text-center text-danger">
                    {error}
                </h4>
            )}

            <div className="row">

                {cars.map((car) => (
                    <div
                        className="col-md-4 mb-4"
                        key={car.product_id}
                    >
                        <div className="card shadow h-100">

                            <img
                                src={car.product_photo}
                                alt={car.product_name}
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body">

                                <h5 className="card-title">
                                    {car.product_name}
                                </h5>

                                <h4 className="text-success">
                                    Ksh {car.product_cost}
                                </h4>

                                <p className="card-text">
                                    {car.product_description?.substring(0, 100)}...
                                </p>

                            </div>

                            <div className="card-footer bg-white border-0">

                                <Link
                                    to={`/cardetails/${car.product_id}`}
                                    className="btn btn-primary w-100"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default CarListComponent;