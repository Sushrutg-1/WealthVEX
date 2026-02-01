import "./App.css";
import HomePage from "./landing-page/home/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./landing-page/signup/SignupPage.jsx";
import AboutPage from "./landing-page/about/AboutPage.jsx";
import ProductPage from "./landing-page/product/ProductPage.jsx";
import PricingPage from "./landing-page/pricing/PricingPage.jsx";
import SupportPage from "./landing-page/support/SupportPage.jsx";
import Navbar from "./landing-page/Navbar.jsx";
import Footer from "./landing-page/Footer.jsx";
import PageNotFound from "./landing-page/PageNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
