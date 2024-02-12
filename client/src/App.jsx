import  {lazy, Suspense } from "react";
import {  } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Loader from './components/loader/Loader.jsx';
import ScrollToAnchor from './hooks/ScrollToAnchor.js';
import "./app.scss";
export const Home = lazy(() => import("./pages/Home"));
export const ServicePage = lazy(() => import("./pages/ServicePage"));
export const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
export const NotFound = lazy(() => import("./pages/NotFound"));
export const UpdateService = lazy(() => import("./components/dashboard/updateService/UpdateService"));
export const PasswordReset = lazy(() => import("./components/authorization/passwordReset/PasswordReset"));
export const Admin = lazy(() => import("./pages/admin/Admin"));
export const Signup = lazy(() => import("./components/authorization/signup/Signup"));

import RequireAuth from "./components/authorization/RequireAuth";


const App = () => {

  return (
    <Router fallbackElement={<Loader/>}>
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
          <Route path="/admin" element={<Suspense fallback={<div className="loader-container"><Loader /></div>}><Admin /></Suspense>} />
          <Route path="/admin/reset" element={<Suspense fallback={<div className="loader-container"><Loader /></div>}><PasswordReset /></Suspense>} />
          <Route 
            path="/admin/signup" 
            element={<Suspense fallback={<div className="loader-container"><Loader /></div>}><RequireAuth><Signup /></RequireAuth></Suspense>} 
          />
          <Route 
            path="/admin/dashboard" 
            element={ <Suspense fallback={<div className="loader-container"><Loader /></div>}><RequireAuth><Dashboard /></RequireAuth></Suspense>}/>
          <Route 
            path="/admin/update/:id" 
            element={<Suspense fallback={<div className="loader-container"><Loader /></div>}><RequireAuth><UpdateService /></RequireAuth></Suspense>} 
          />
      </Routes>
    
    </Router>
  );
}; 

export default App;


