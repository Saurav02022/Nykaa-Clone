import { Routes, Route } from "react-router-dom";

import Login from "../AdminFE/Pages/Login";
import Panel from "../AdminFE/Pages/Panel";
import Products from "../AdminFE/Pages/Products";
import Users from "../AdminFE/Pages/Users";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/panel" element={<Panel />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/users" element={<Users />} />
    </Routes>
  );
};
export default AdminRoutes;
