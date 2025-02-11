import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next"; // ✅ Importer le Provider
import i18n from "./i18n"; // ✅ Assurer l'importation de i18n

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Qualifications from "./pages/Qualifications";
import Contact from "./pages/Contact";
import Rdv from "./pages/Rdv";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/qualifications", element: <Qualifications /> },
  { path: "/contact", element: <Contact /> },
  { path: "/rdv", element: <Rdv /> },
]);

const App = () => (
  <I18nextProvider i18n={i18n}> {/* ✅ Ajout du provider */}
    <Suspense fallback={<div>Loading translations...</div>}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Suspense>
  </I18nextProvider>
);

export default App;
