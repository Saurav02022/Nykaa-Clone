import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Navbar from "../Components/Navbar/index";
import { Footer } from "../Components/Footer/footer.jsx";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routers