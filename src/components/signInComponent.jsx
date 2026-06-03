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

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            const response = await axios.post(
                "https://abraham59.alwaysdata.net/api/signin",
                formData
            );

            if (response.data.user) {
                setSuccess(response.data.message);

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to sign in. Please try again."
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
                background:
                    "linear-gradient(to right, #f8fafc, #e2e8f0)"
            }}
        >
            <div className="col-md-5 col-lg-4">
                <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body p-4">
                        <h2 className="text-center fw-bold mb-4">
                            Welcome Back
                        </h2>

                        {loading && (
                            <div className="alert alert-info text-center">
                                Signing in...
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
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

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
                                    className="text-decoration-none fw-bold"
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