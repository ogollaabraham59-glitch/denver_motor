import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SigninComponent = () => {
    const [email, setEmail] = useState("");
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
            // safer payload (FormData not required unless backend needs it)
            const payload = {
                email,
                password,
            };

            const response = await axios.post(
                "https://abraham59.alwaysdata.net/api/signin",
                payload
            );

            const data = response.data;

            // SAFETY CHECK (prevents undefined crash)
            if (data && data.user) {
                setSuccess(data.message || "Login successful");

                // store full user (including role if exists)
                localStorage.setItem("user", JSON.stringify(data.user));

                // optional login flag
                localStorage.setItem("isLoggedIn", "true");

                setTimeout(() => {
                    // redirect based on role
                    if (data.user.role === "admin") {
                        navigate("/admindashboard");
                    } else {
                        navigate("/");
                    }
                }, 1000);
            } else {
                setError(data?.message || "Invalid email or password");
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.message ||
                "Server error. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
            }}
        >
            <div className="col-md-5 col-lg-4">

                <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body p-4">

                        <h2 className="text-center fw-bold mb-4">
                            Welcome Back
                        </h2>

                        {/* LOADING */}
                        {loading && (
                            <div className="alert alert-info text-center">
                                Signing in...
                            </div>
                        )}

                        {/* ERROR */}
                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        {/* SUCCESS */}
                        {success && (
                            <div className="alert alert-success">
                                {success}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-100"
                                disabled={loading}
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>

                            <div className="text-center mt-4">
                                <span className="text-muted">
                                    Don't have an account?
                                </span>
                                <br />
                                <Link
                                    to="/signup"
                                    className="fw-bold text-decoration-none"
                                >
                                    Create Account
                                </Link>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SigninComponent;