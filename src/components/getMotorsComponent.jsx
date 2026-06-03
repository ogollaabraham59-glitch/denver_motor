import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetCarsComponent = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minSpeed, setMinSpeed] = useState("");

    const navigate = useNavigate();

    const img_url = "https://abraham59.alwaysdata.net/static/images/";

    // FETCH CARS
    const getCars = async () => {
        setLoading("Loading cars...");
        setError("");

        try {
            const response = await axios.get(
                "https://abraham59.alwaysdata.net/api/get_products"
            );

            setCars(response.data);
            setLoading("");
        } catch (err) {
            setLoading("");
            setError("Failed to load cars");
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    // FILTER LOGIC
    const filteredCars = cars.filter((car) => {
        const name = (car.product_name || "").toLowerCase();

        const price = Number(car.product_cost || 0);
        const speed = Number(car.top_speed || 0); // IMPORTANT: backend must include this field

        const matchSearch = name.includes(search.toLowerCase());

        const matchPrice =
            (!minPrice || price >= Number(minPrice)) &&
            (!maxPrice || price <= Number(maxPrice));

        const matchSpeed =
            !minSpeed || speed >= Number(minSpeed);

        return matchSearch && matchPrice && matchSpeed;
    });

    return (
        <div className="container py-4">

            <h2 className="text-center text-primary mb-4">
                Available Cars
            </h2>

            {/* FILTERS */}
            <div className="row mb-4 g-2">

                <div className="col-md-3">
                    <input
                        className="form-control"
                        placeholder="Search car..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Min Speed (km/h)"
                        value={minSpeed}
                        onChange={(e) => setMinSpeed(e.target.value)}
                    />
                </div>

            </div>

            {/* STATUS */}
            {loading && (
                <p className="text-info text-center">{loading}</p>
            )}

            {error && (
                <p className="text-danger text-center">{error}</p>
            )}

            {/* CAR LIST */}
            <div className="row">

                {filteredCars.map((car) => (
                    <div className="col-md-4 mb-4" key={car.product_id}>

                        <div className="card shadow border-0 h-100">

                            <img
                                src={img_url + car.product_image}
                                alt={car.product_name}
                                style={{
                                    height: "220px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body">

                                <h5 className="text-primary">
                                    {car.product_name}
                                </h5>

                                <p className="text-muted">
                                    {car.product_description?.substring(0, 80)}...
                                </p>

                                <h5 className="text-success">
                                    Ksh {car.product_cost}
                                </h5>

                                <p>
                                    🚀 Speed: {car.top_speed || "N/A"} km/h
                                </p>

                            </div>

                            <div className="card-footer bg-white border-0">

                                <button
                                    className="btn btn-dark w-100"
                                    onClick={() =>
                                        navigate(`/cardetails/${car.product_id}`)
                                    }
                                >
                                    View Details
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

                {filteredCars.length === 0 && (
                    <p className="text-danger text-center">
                        No cars found matching filters
                    </p>
                )}

            </div>

        </div>
    );
};

export default GetCarsComponent;