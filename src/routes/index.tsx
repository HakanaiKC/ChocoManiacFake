import { lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Cart from "../pages/cart";
const LayoutPage = lazy(() => import("../pages/layout"));
const ErrorPage = lazy(() => import("../pages/404/404"));
const Homepage = lazy(() => import("../pages/hompage"));
const AboutUs = lazy(() => import("../pages/aboutUs"));
const ProductDetail = lazy(() => import("../pages/shop/productDetail"));
const Gallery = lazy(() => import("../pages/gallery"));
const Contact = lazy(() => import("../pages/contact"));
const MyAccount = lazy(() => import("../pages/myAccount"));
const Menu = lazy(() => import("../pages/menu"));
const ForgotPassword = lazy(() => import("../pages/auth/forgotPassword"));
const Login = lazy(() => import("../pages/auth/login"));
const Logout = lazy(() => import("../pages/auth/logout"));
const Register = lazy(() => import("../pages/auth/register"));
const Policy = lazy(() => import("../pages/terms/policy"));
const Service = lazy(() => import("../pages/terms/service"));

const routesList: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <ProductDetail />,
      },
      {
        path: "/product/:accountId",
        element: <ProductDetail />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/account",
        element: <MyAccount />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms-of-policy",
        element: <Policy />,
      },
      {
        path: "/terms-of-service",
        element: <Service />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

const RenderRoute = () => {
  const element = useRoutes(routesList);
  return element;
};

export default RenderRoute;
