import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Qualifications from "./pages/Qualifications";
import Contact from "./pages/Contact";
import Rdv from "./pages/Rdv";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }; return (
    <Router>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%"
      }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rdv" element={<Rdv />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
