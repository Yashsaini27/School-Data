import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Desktop223 = React.lazy(() => import("pages/Desktop223"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        
          <Route path="/" element={<Desktop223 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
