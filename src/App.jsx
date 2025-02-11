import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Qualifications from "./pages/Qualifications";
import Contact from "./pages/Contact";
import Rdv from "./pages/Rdv";

const App = () => (
  <Suspense fallback={<div>Loading translations...</div>}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rdv" element={<Rdv />} />
      </Routes>
      <Footer />
    </Router>
  </Suspense>
);

export default App;
