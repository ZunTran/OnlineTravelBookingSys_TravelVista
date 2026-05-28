import { lazy } from "react";


export const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
export const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));


export const HomePage = lazy(() => import("@/pages/user/HomePage"));
export const TransportPage = lazy(() => import("@/pages/user/transport/TransportPage"));
export const UserProfilePage = lazy(() => import("@/pages/user/UserProfilePage"));
export const UserSecurityPage = lazy(() => import("@/pages/user/UserSecurityPage"));


export const ProviderHomePage = lazy(() => import("@/pages/provider/ProviderHomePage"));
export const ProviderServicesPage = lazy(() => import("@/pages/provider/ProviderSerVicesPage"))


export const AdminHomePage = lazy(() => import("@/pages/admin/AdminHomePage"));