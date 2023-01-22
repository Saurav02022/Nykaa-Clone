import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.AuthenticationReducer);
  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/user/login"} replace={true} />;
  }
};

export default PrivateRoute;
