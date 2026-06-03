import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpComponent = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const payload = {
                username,
                email,
                phone,
                location,
                password,
            };

            const response = await axios.post(
                "https://abraham59.alwaysdata.net/api/signup",
                payload
            );

            const data = response.data;

            if (data?.user) {
                setSuccess(data.message || "Account created successfully!");

                // save user
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("isLoggedIn", "true");

                // clear form
                setUsername("");
                setEmail("");
                setPhone("");
                setLocation("");
                setPassword("");

                // redirect
                setTimeout(() => {
                    navigate("/signin");
                }, 1200);

            } else {
                setError(data?.message || "Signup failed");
            }

        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.message ||
                "Server error. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center py-5">

            <div className="col-md-6 col-lg-5">

                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-body p-4">

                        <h2 className="text-center fw-bold mb-4">
                            Create Account
                        </h2>

                        {/* STATUS */}
                        {loading && (
                            <div className="alert alert-info text-center">
                                Creating account...
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="alert alert-success">
                                {success}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            <input
                                className="form-control mb-3"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />

                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Location (e.g Nairobi, Westlands)"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                className="btn btn-dark w-100"
                                disabled={loading}
                            >
                                {loading ? "Signing up..." : "Sign Up"}
                            </button>

                            <div className="text-center mt-3">
                                <Link to="/signin">
                                    Already have an account? Sign In
                                </Link>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignUpComponent;