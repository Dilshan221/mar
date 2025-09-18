import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/aboutus";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Elements from "./pages/element";
import Gallery from "./pages/gallery";
import Menu from "./pages/menu";
import Services from "./pages/service";
import ComplaintPage from "./pages/Complaint";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/complaints" element={<ComplaintPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
