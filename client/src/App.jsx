import { Route, Routes } from "react-router-dom";

import "./app.scss";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/service/:serviceId" element={<ServicePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};



export default App;
