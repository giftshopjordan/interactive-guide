import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RequireAuth;
