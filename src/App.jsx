import { Suspense } from "react"; // ✅ Import Suspense
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Qualifications from "./pages/Qualifications";
import Contact from "./pages/Contact";
import Rdv from "./pages/Rdv";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Suspense fallback={<div>Loading translations...</div>}> {/* ✅ Ajout du suspense */}
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
    </Suspense>
  );
};

export default App;
