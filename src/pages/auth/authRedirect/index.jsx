// pages/auth/AuthRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("loginData");
    if (isLogin) {
      navigate("/landing");
    } else {
      navigate("/signup");
    }
  }, [navigate]);

  return null;
};

export default AuthRedirect;
