// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import PublicRoutes from "./routes/PublicRoutes"; // import PublicRoutes separately

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with template CSS */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Admin routes - clean, separate */}
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
