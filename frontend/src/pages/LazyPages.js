import { lazy } from "react";


export const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
export const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));


export const HomePage = lazy(() => import("@/pages/user/HomePage"));
export const TransportPage = lazy(() => import("@/pages/user/transport/TransportPage"));
export const UserProfilePage = lazy(() => import("@/pages/user/profile/UserProfilePage"));
export const UserSecurityPage = lazy(() => import("@/pages/user/profile/UserSecurityPage"));

export const HotelDetailPage = lazy(() => import('@/pages/user/detail/HotelDetailPage'))
export const TourDetailPage = lazy(() => import("@/pages/user/detail/TourDetailPage"));
export const TransportDetailPage = lazy(() => import('@/pages/user/detail/TransportDetailPage'));
export const CheckoutPage = lazy(() => import("@/pages/user/CheckoutPage"))

export const CartPage = lazy(() => import("@/pages/user/profile/CartPage"));
export const FavouritePage = lazy(() => import("@/pages/user/profile/FavouritePage"))


export const ProviderHomePage = lazy(() => import("@/pages/provider/ProviderHomePage"));
export const ProviderServicesPage = lazy(() => import("@/pages/provider/ProviderServicesPage"))
export const ProviderHotelDetailPage = lazy(() => import("@/pages/provider/services/ProviderHotelDetailPage"));
export const ProviderTransportDetailPage = lazy(() => import("@/pages/provider/services/ProviderTransportDetailPage"));
export const ProviderTourDetailPage = lazy(() => import("@/pages/provider/services/ProviderTourDetailPage"));


export const AdminHomePage = lazy(() => import("@/pages/admin/AdminHomePage"));


