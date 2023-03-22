import React from "react";
import {
  Navigate,
  Outlet,
  redirect,
  Route,
  RouteProps,
  useLocation,
} from "react-router-dom";
import { useUserProfileGet } from "../../hooks/react_query_hooks/useUser";
import { PrivateRouteType } from "./types/Route";

const PrivateRoute = ({ children }: PrivateRouteType & RouteProps) => {
  const location = useLocation();
  const { status } = useUserProfileGet();
  if (status === "error") {
    return <Navigate to="/" replace state={{ from: location }} />;
  } else if (status === "success") {
    return children ? children : <Outlet />;
  }
};

export default PrivateRoute;
