
import "./app.scss";
import  {lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from './components/loader/Loader.jsx';
import ScrollToAnchor from './hooks/ScrollToAnchor.js';
import RequireAuth from "./components/authorization/RequireAuth";
export const Home = lazy(() => import("./pages/Home"));
export const ServicePage = lazy(() => import("./pages/ServicePage"));
/* export const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
export const UpdateService = lazy(() => import("./components/dashboard/updateService/UpdateService")); 
export const PasswordReset = lazy(() => import("./components/authorization/passwordReset/PasswordReset"));
export const Admin = lazy(() => import(""));
export const Signup = lazy(() => import("./components/authorization/signup/Signup"));*/

import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import UpdateService from "./components/dashboard/updateService/UpdateService";
import PasswordReset from "./components/authorization/passwordReset/PasswordReset";
import Admin from "./pages/admin/Admin";
import Signup from "./components/authorization/signup/Signup";



const App = () => {

  return (
    <Router  basename="/" fallbackElement={<Loader/>}>
          <ScrollToAnchor/>
      <Routes >
          <Route path="/" element={
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
              <Home />
            </Suspense> }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/service/:serviceId" element={
            <Suspense fallback={<div className="loader-container"><Loader /></div>}>
              <ServicePage />
            </Suspense> }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/reset" element={<PasswordReset />} />
          <Route 
            path="/admin/signup" 
            element={<RequireAuth><Signup /></RequireAuth>} 
          />
          <Route 
            path="/admin/dashboard" 
            element={<RequireAuth><Dashboard /></RequireAuth>}/>
          <Route 
            path="/admin/update/:id" 
            element={<RequireAuth><UpdateService /></RequireAuth>} 
          />
      </Routes>
    
    </Router>
  );
}; 

export default App;


