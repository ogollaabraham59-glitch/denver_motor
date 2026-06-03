import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const SignUpComponent = () => {
    let [username, updateUserName] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")

    //loading state variable

    let [loading, updateLoading] = useState("")
    let [success, updateSuccess] = useState("")
    let [error, updateError] = useState("")
    //



    let handlesubmit = async (e) => {

        //prevent form from reloading page
        e.preventDefault();


        //alert user loading 
        updateError("");
        updateSuccess("");
        updateLoading("Submiting Data.Pleas wait...")

        //confirm user data
        console.log(username, email, phone, password)
        // try send data to server

        try {
            const user_data = new FormData()
            user_data.append("username", username)
            user_data.append("email", email)
            user_data.append("phone", phone)
            user_data.append("password", password)

            //use axios to send data to server
            const response = await axios.post("https://abraham59.alwaysdata.net/api/signup",
                user_data);
            console.log(response);
            if (response.status === 200) {

                // save user data to local storage
                localStorage.setItem("user", JSON.stringify(response.data.user))
                localStorage.setItem("isLoggedIn", "true");



                updateSuccess(response.data.message)
                updateLoading("");
                updateUserName("");
                updateEmail("");
                updatePhone("");
                updatePassword("");

            }

        } catch (error) {
            console.log(error);
            updateLoading("");
            updateError(error.message);

        }



    }
    localStorage.setItem("isLoggedIn", "true");





    return (
        <div className="row justify-content-center mt-4">

            <div className="col-md-6 card shadow p-4">
                <h2>signup</h2>

                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handlesubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder=" Enter Name"
                        required
                        value={username}
                        onChange={(e) => { updateUserName(e.target.value) }}
                    />


                    <br />
                    <input type="enter email"
                        className="form-control"
                        placeholder=" Enter Email"
                        required
                        value={email}
                        onChange={(e) => { updateEmail(e.target.value) }}
                    />

                    <br />
                    <input type="enter phone"
                        className="form-control"
                        placeholder=" Enter Phone"
                        required
                        value={phone}
                        onChange={(e) => { updatePhone(e.target.value) }}
                    />
                    <br />
                    <input type="password"
                        className="form-control"
                        placeholder=" Enter Password"
                        required
                        value={password}
                        onChange={(e) => { updatePassword(e.target.value) }}
                    />

                    <br />
                    <button className="btn btn-dark">
                        sign up
                    </button>
                    <br />
                    <Link to="/signin">Already have an account ? signin</Link>
                </form>
            </div>

        </div>
    )
}
export default SignUpComponent;