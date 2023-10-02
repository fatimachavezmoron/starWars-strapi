
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
  localStorage.setItem("user", data.user.username)
  localStorage.setItem("jwt", data.jwt)
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};