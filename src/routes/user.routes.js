import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar/index";
import Footer from "../Components/Footer/footer.jsx";
import HomePage from "../Pages/HomePage";
import FaceProductPage from "../Pages/FaceProductPage";
import SkinProductPage from "../Pages/SkinProductPage";
import UserLogin from "../Pages/Authentication/Login";
import UserSignUp from "../Pages/Authentication/SignUp";
import CartPage from "../Pages/CartPage";
import Address from "../Pages/AddressPage/Address";
import PaymentPage from "../Pages/PaymentPage";
import SingleProduct from "../Pages/SingleProductPage/SingleProduct";

import ErrorPage from "../Pages/CartPage/Components/NotFound";

import { Box } from "@chakra-ui/layout";

import PrivateRoute from "../PrivateRoutes/PrivateRoute.jsx";

const UserRoutes = () => {
  var url = window.location.href;
  var path = url.match(/\/([^\/]+)/g)[1];
  return (
    <>
      <Box display={path === "/admin" ? "none" : "block"}>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/face" element={<FaceProductPage />} />
        <Route path="/skin" element={<SkinProductPage />} />
        <Route path="/user/signup" element={<UserSignUp />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path = "/error" element={<ErrorPage />} />
        <Route
          path="/singleproduct"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Box display={path === "/admin" ? "none" : "block"}>
        <Footer />
      </Box>
    </>
  );
};

export default UserRoutes;
