import { Link, useLocation } from "react-router-dom";

const HomeComponent = () => {

    const location = useLocation();

    // optional: detect search query from URL
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q");

    return (
        <div className="container-fluid p-0">

            {/* HERO SECTION */}
            <section
                className="d-flex flex-column justify-content-center align-items-center text-center text-light vh-100"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* MOVING WELCOME TEXT */}
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollAmount="12"
                    className="bg-dark p-3 w-100"
                >
                    <h4 className="m-0">
                        🚗 Welcome to Denver Motors |
                        Quality Cars |
                        Affordable Prices |
                        Trusted Dealer in Kenya |
                        Easy Financing Available 🚗
                    </h4>
                </marquee>

                <div className="bg-dark bg-opacity-50 p-5 rounded-4 mt-4">

                    <h1 className="display-4 fw-bold">
                        Welcome To Denver Motors
                    </h1>

                    <p className="lead">
                        Find your dream car with confidence — quality, speed & trust.
                    </p>

                    {searchQuery && (
                        <p className="text-warning">
                            Searching for: <strong>{searchQuery}</strong>
                        </p>
                    )}

                    {/* BUTTONS */}
                    <div className="mt-4">

                        <Link to="/cars">
                            <button className="btn btn-primary btn-lg mx-2">
                                View Cars
                            </button>
                        </Link>

                        <Link to="/signup">
                            <button className="btn btn-warning btn-lg mx-2">
                                Sign Up
                            </button>
                        </Link>

                    </div>

                </div>

            </section>

            {/* FEATURED CARS SECTION */}
            <section className="container py-5">

                <h2 className="text-center mb-5 fw-bold">
                    Featured Cars
                </h2>

                <div className="row g-4">

                    {/* CAR 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0 h-100">

                            <img
                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                                className="card-img-top"
                                style={{ height: "250px", objectFit: "cover" }}
                                alt="Toyota"
                            />

                            <div className="card-body text-center">
                                <h4>Toyota Land Cruiser</h4>
                                <p className="text-muted">
                                    Powerful SUV for all terrains
                                </p>

                                <Link to="/cardetails/1">
                                    <button className="btn btn-dark">
                                        View More
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* CAR 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0 h-100">

                            <img
                                src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
                                className="card-img-top"
                                style={{ height: "250px", objectFit: "cover" }}
                                alt="BMW"
                            />

                            <div className="card-body text-center">
                                <h4>BMW X5</h4>
                                <p className="text-muted">
                                    Luxury and performance combined
                                </p>

                                <Link to="/cardetails/2">
                                    <button className="btn btn-dark">
                                        View More
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* CAR 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0 h-100">

                            <img
                                src="https://images.unsplash.com/photo-1511910849309-0dffb8781f2a"
                                className="card-img-top"
                                style={{ height: "250px", objectFit: "cover" }}
                                alt="Audi"
                            />

                            <div className="card-body text-center">
                                <h4>Audi Q7</h4>
                                <p className="text-muted">
                                    Modern luxury SUV
                                </p>

                                <Link to="/cardetails/3">
                                    <button className="btn btn-dark">
                                        View More
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

                {/* VIEW ALL CARS BUTTON */}
                <div className="text-center mt-5">

                    <Link to="/cars">
                        <button className="btn btn-primary btn-lg">
                            View All Cars
                        </button>
                    </Link>

                </div>

            </section>

        </div>
    );
};

export default HomeComponent;