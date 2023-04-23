import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const toast = useToast();
  const { isAuth } = useSelector((state) => state.AuthenticationReducer);
  if (isAuth) {
    return children;
  } else {
    toast({
      description: "Please Login",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    return <Navigate to={"/user/login"} replace={true} />;
  }
};

export default PrivateRoute;
