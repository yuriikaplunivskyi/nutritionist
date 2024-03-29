import { Navigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/toolkit/react";

function RequireAuth({ children }) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
      // Redirect to the /login page
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }
    
    return children;
}

export default RequireAuth;