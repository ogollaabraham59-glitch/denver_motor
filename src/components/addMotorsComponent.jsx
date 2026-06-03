import axios from "axios";
import { useState } from "react"

const AddProductComponent = () => {

    let [product_name, setProductName] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_category, setProductCategory] = useState("");
    let [product_description, setProductDescription] = useState("");
    let [product_image, setProductimage] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSucces] = useState("");
    let [error, setError] = useState("");
    const handleSubmit = async (e) => {

        e.preventDefault()

        setLoading("please wait...")
        setError("")
        setSucces("")
        console.log(product_name, product_cost, product_category, product_description, product_image)
        try {
            const product_data = new FormData()
            product_data.append("product_name", product_name)
            product_data.append("product_cost", product_cost)
            product_data.append("product_category", product_category)
            product_data.append("product_description", product_description)
            product_data.append("product_image", product_image)

            const response = await axios.post("https://abraham59.alwaysdata.net/api/add_product", product_data)
            console.log(response)
            if (response.status === 200) {
                setSucces(response.data.message)
                setLoading("")
                setError("")
            }

        } catch (error) {
            console.log(error.message);
            setLoading("")
            setError(error.message)
        }


    }



    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card-shadow p-4">
                <h2>add product</h2>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                <h5 className="text-warning">{loading}</h5>
                <form onSubmit={handleSubmit} >
                    <input type="text"
                        className="form-control"
                        placeholder="Name"
                        value={product_name}
                        onChange={(e) => { setProductName(e.target.value) }}
                    />
                    <br />
                    <input type="number"
                        className="form-control"
                        placeholder="Cost"
                        value={product_cost}
                        onChange={(e) => { setProductCost(e.target.value) }} />
                    <br />
                    <select
                        className="form-select"
                        value={product_category}
                        onChange={(e) => { setProductCategory(e.target.value) }}>


                        <option value="">Select category</option>
                        <option value="shoes">shoes</option>
                        <option value="suits">suits</option>
                        <option value="dress">dress</option>
                        <option value="rubber">normal rubber</option>
                        <option value="officials ">officials for ladys</option>
                        <option value="officials">officials for men</option>
                        <option value="wedding suits">suits for wedding</option>

                    </select>
                    <br />


                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter product description"
                        value={product_description}
                        onChange={(e) => { setProductDescription(e.target.value) }}
                    ></textarea>
                    <br />

                    <label htmlFor=""
                        className="form-label">
                        product image
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => { setProductimage(e.target.files[0]) }} />
                    <br />
                    <button className="btn btn-outline-info">submit</button>
                </form>
            </div>


        </div>
    )



}
export default AddProductComponent