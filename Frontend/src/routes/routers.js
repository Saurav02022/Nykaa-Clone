import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Navbar from "../Components/Navbar/index";
import { Footer } from "../Components/Footer/footer.jsx";
import CartPage from "../Pages/CartPage";
import FaceProductPage from "../Pages/FaceProductPage";
import SkinProductPage from "../Pages/SkinProductPage";
import Login from "../AdminFE/Pages/Login";
import Panel from "../AdminFE/Pages/Panel";
import Products from "../AdminFE/Pages/Products";
import Users from "../AdminFE/Pages/Users";
const Routers = () => {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/panel" element={<Panel />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/face" element={<FaceProductPage/>} />
        <Route path="/skin" element={<SkinProductPage />}/>
      </Routes>
    
    </>
  );
};

export default Routers