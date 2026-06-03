import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GetProductComponent = () => {

    let [products, setproducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [search_input, setsearch_input] = useState("");
    let [categoriseItem, setcategorise_item] = useState("");

    const img_url = "https://abraham59.alwaysdata.net/static/images/";

    let navigate = useNavigate();
    let location = useLocation();

    // GET CATEGORY FROM URL
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category") || "";

    const getproducts = async () => {
        setError("");
        setLoading("fetching product.please wait...");

        try {
            const response = await axios.get(
                "https://abraham59.alwaysdata.net/api/get_products"
            );

            if (response.status === 200) {
                setLoading("");
                setproducts(response.data);
            }

        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    // FILTER PRODUCTS
    const filteredProducts = products.filter((product) => {

        const name = (product.product_name || "").toLowerCase();
        const category = (product.categorise_Item || "").toLowerCase();

        const search = search_input.toLowerCase();
        const selectedCategory = categoriseItem.toLowerCase();
        const urlCategory = categoryFromUrl.toLowerCase();

        return (
            name.includes(search) &&
            category.includes(selectedCategory) &&
            category.includes(urlCategory)
        );
    });

    return (
        <div className="row text-center">

            <h3 className="text-center text-dark">
                PRODUCT FOUND
            </h3>

            <center className="text-dark">

                <div className="col-md-2 mb-3">

                    {/* SEARCH */}
                    <input
                        type="search"
                        placeholder="search products...."
                        className="px-4 form-control"
                        value={search_input}
                        onChange={(e) =>
                            setsearch_input(e.currentTarget.value)
                        }
                    />

                    {/* CATEGORY FILTER */}
                    <select
                        className="form-control mt-2"
                        value={categoriseItem}
                        onChange={(e) =>
                            setcategorise_item(e.target.value)
                        }
                    >

                        <option value="">
                            All Categories
                        </option>

                        <option value="shoes">Shoes</option>
                        <option value="suits">Suits</option>
                        <option value="dress">Dress</option>
                        <option value="officials">Officials</option>
                        <option value="wedding suits">Wedding Suits</option>

                    </select>

                </div>

            </center>

            <h6 className="text-warning">{loading}</h6>
            <h6 className="text-danger">{error}</h6>

            {/* PRODUCTS */}
            <div className="row justify-content-center mt-4">

                {filteredProducts.length === 0 && (
                    <p className="text-danger">
                        No products found
                    </p>
                )}

                {filteredProducts.map((product) => (

                    <div className="col-md-3 mb-4" key={product.id}>

                        <div className="card shadow">

                            <h5 className="text-primary mt-2">
                                {product.categorise_Item}
                            </h5>

                            <img
                                src={img_url + product.product_image}
                                alt=""
                                className="product_img mt-3"
                            />

                            <div className="card-body">

                                <h5>{product.product_name}</h5>

                                <p className="text-muted">
                                    {product.product_description}
                                </p>

                                <h4 className="text-warning">
                                    Ksh {product.product_cost}
                                </h4>

                                <button

                                    className="btn btn-dark w-100"
                                    onClick={() => {

                                        // CHECK IF USER IS LOGGED IN
                                        const isLoggedIn =
                                            localStorage.getItem("isLoggedIn");

                                        // IF USER HAS ACCOUNT AND IS LOGGED IN
                                        if (isLoggedIn === "true") {

                                            // ALLOW PURCHASE
                                            navigate("/makepayment", {
                                                state: { product }
                                            });

                                        } else {

                                            // BLOCK PURCHASE
                                            alert(
                                                "You must login first before purchasing an item"
                                            );

                                            navigate("/signin");
                                        }
                                    }}
                                >
                                    Purchase Now
                                </button>


                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div >
    );
};

export default GetProductComponent;