import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="container-fluid p-0">

            {/* HERO SECTION */}
            <section
                className="d-flex flex-column justify-content-center align-items-center text-center text-light vh-100"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* MOVING TEXT */}
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollAmount="10"
                    className="bg-dark p-3 w-100"
                >
                    <h3>
                        🔥 Welcome to Abraham Fashion Store |
                        Trending Clothes |
                        Best Shoes |
                        Wedding Suits |
                        Official Wear And also great Design 🔥
                    </h3>
                </marquee>

                <div className="bg-dark bg-opacity-50 p-5 rounded-4 mt-4">

                    <h1 className="display-3 fw-bold">
                        Welcome To Our Store
                    </h1>

                    <p className="lead">
                        Discover amazing fashion designs and trending outfits at affordable prices.
                    </p>

                    {/* HERO BUTTONS */}
                    <div className="mt-4">

                        {/* ALL PRODUCTS */}
                        <Link to="/home">
                            <button className="btn btn-primary btn-lg mx-2">
                                View Products
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

            {/* TRENDING COLLECTIONS */}
            <section className="container py-5">

                <h2 className="text-center mb-5 text-dark fw-bold">
                    Trending Collections
                </h2>

                <div className="row">

                    {/* CARD 1 */}
                    <div className="col-md-4 mb-4">

                        <div className="card shadow-lg border-0 rounded-4 h-100">

                            <img
                                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop"
                                alt="fashion"
                                className="card-img-top"
                                height="350"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">
                                    Modern Fashion
                                </h4>

                                <p>
                                    Stylish clothes for all occasions.
                                </p>

                                {/* ALL PRODUCTS */}
                                <Link to="/home">
                                    <button className="btn btn-dark">
                                        Shop Now
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div className="col-md-4 mb-4">

                        <div className="card shadow-lg border-0 rounded-4 h-100">

                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1970&auto=format&fit=crop"
                                alt="shoes"
                                className="card-img-top"
                                height="350"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">
                                    Trending Shoes
                                </h4>

                                <p>
                                    Comfortable and classy shoes collection.
                                </p>

                                {/* SHOES ONLY */}
                                <Link to="/home?category=shoes">
                                    <button className="btn btn-primary">
                                        Explore
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* CARD 3 */}
                    <div className="col-md-4 mb-4">

                        <div className="card shadow-lg border-0 rounded-4 h-100">

                            <img
                                src="https://images.unsplash.com/photo-1593032465171-8bd3818e8d8d?q=80&w=1974&auto=format&fit=crop"
                                alt="suits"
                                className="card-img-top"
                                height="350"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">
                                    Official Suits
                                </h4>

                                <p>
                                    Elegant official and wedding suits.
                                </p>

                                {/* SUITS ONLY */}
                                <Link to="/home?category=suits">
                                    <button className="btn btn-success">
                                        View Collection
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default HomeComponent;