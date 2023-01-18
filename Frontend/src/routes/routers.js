import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Navbar from "../Components/Navbar/index";
import { Footer } from "../Components/Footer/footer.jsx";
import CartPage from "../Pages/CartPage";
import FaceProductPage from "../Pages/FaceProductPage";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/face" element={<FaceProductPage/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routers