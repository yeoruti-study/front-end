import React, { useEffect } from "react";
import { Outlet, RouteProps, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import userInfoAtom from "../../atoms/userInfo";
import { useUserProfileGet } from "../../hooks/react_query_hooks/useUser";
import { PrivateRouteType } from "./types/Route";

const PrivateRoute = ({ children }: PrivateRouteType & RouteProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const { status } = useUserProfileGet();
  useEffect(() => {
    if (status === "error") {
      // alert("회원정보를 조회할 수 없습니다");
      setUserInfo({
        id: "",
        username: "",
        roles: "",
        profileName: "",
        profileBirth: "",
        profileImagePath: "",
        alarmPermission: true,
        friendAcceptance: true,
      });
      navigate("/");
    }
  }, [status]);

  // if (status === "error") {
  //   return <Navigate to="/" replace state={{ from: location }} />;
  // } else if (status === "success") {
  //   return children ? children : <Outlet />;
  // }

  if (status === "success") {
    return children ? children : <Outlet />;
  }
};

export default PrivateRoute;
