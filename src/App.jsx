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
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%"
      }}>
        <Header />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rdv" element={<Rdv />} />
          </Routes>
        </main>
        <Footer /> { }
      </div>
    </Router>
  </Suspense>
);



export default App;