import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear session storage or authentication data
        localStorage.removeItem("authToken"); // Example: Clearing auth token
        sessionStorage.clear(); // Clears session data

        // Redirect to login
        navigate("/login");
    }, [navigate]);

    return <p className="mt-10 text-center">Logging out...</p>;
};

export default Logout;
