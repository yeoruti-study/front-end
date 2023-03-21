import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserProfileGet } from "../../hooks/react_query_hooks/useUser";
import { PublicRouteType } from "./types/Route";

const PublicRoute = ({ restricted, children }: PublicRouteType) => {
  const { status } = useUserProfileGet();
  if (status === "success" && restricted) {
    return <Navigate to={"/home"} replace />;
  }
  return children ? children : <Outlet />;
};

export default PublicRoute;
