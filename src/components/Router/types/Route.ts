import { ReactNode } from "react";

interface RouteType {
  children: ReactNode;
}

export interface PublicRouteType extends RouteType {
  restricted: boolean;
}
export interface PrivateRouteType extends RouteType {}
