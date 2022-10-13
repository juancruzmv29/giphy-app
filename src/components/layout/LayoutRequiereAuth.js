import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const LayoutRequiereAuth = () => {


   const { user } = useContext(UserContext)


   if(!user) {
    return <Navigate to="/login" />
   }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutRequiereAuth;
