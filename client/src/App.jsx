import { Route, Routes } from "react-router-dom";

import "./app.scss";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Update from "./components/dashboard/update/Update";
import PasswordReset from "./components/authorization/passwordReset/PasswordReset";
import Admin from "./pages/admin/Admin";
import Signup from "./components/authorization/signup/Signup";
import RequireAuth from "./components/authorization/RequireAuth";

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/service/:serviceId" element={<ServicePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/reset" element={<PasswordReset />} />
      <Route 
        path="/admin/signup" 
        element={<RequireAuth>
                  <Signup />
                </RequireAuth>} 
      />
      <Route 
        path="/admin/dashboard" 
        element={ <RequireAuth>
                    <Dashboard />
                  </RequireAuth>} 
      />
      <Route 
        path="/admin/update/:id" 
        element={<RequireAuth>
                  <Update />
                </RequireAuth>} 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}; 

export default App;
