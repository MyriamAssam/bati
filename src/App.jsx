import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  <Suspense fallback={<div>Loading translations...</div>}>
    {/* ✅ Ajout du Header et Footer */}
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </Suspense>
);

export default App;
