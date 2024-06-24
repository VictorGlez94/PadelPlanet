import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/Privacy/Privacy";
import CookiesPolicy from "../pages/Cookies/Cookies";
import Legal from "../pages/Legal/Legal";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import Favorites from "../pages/Favorites/Favorites";
import Sales from "../pages/Sales/Sales";
import NewProduct from "../pages/NewProduct/NewProduct";
import PaymentMethods from "../pages/PayMethods/PayMethods";
import Shipping from "../pages/Shipping/Shipping";
import Cart from "../pages/Cart/Cart";
import Payment from "../pages/FinalPayment/Payment";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Completion from "../pages/FinalPayment/Completion";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ProductPage from "../pages/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre-nosotros",
        element: <About />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
        path: "/privacidad",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookies",
        element: <CookiesPolicy />,
      },
      {
        path: "/aviso-legal",
        element: <Legal />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Signup />,
      },
      {
        path: "/perfil",
        element: <Profile />,
      },
      {
        path: "/perfil/favoritos",
        element: <Favorites />,
      },
      {
        path: "/perfil/productos-en-venta",
        element: <Sales />,
      },
      {
        path: "/perfil/nuevo-producto",
        element: <NewProduct />,
      },
      {
        path: "/metodos-pago",
        element: <PaymentMethods />,
      },
      {
        path: "/envios",
        element: <Shipping />,
      },
      {
        path: "/perfil/carrito",
        element: <Cart />,
      },
      {
        path: "/finalizar-compra",
        element: <Payment />,
      },
      {
        path: "/completado",
        element: <Completion />,
      },
      {
        path: "/categoria/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/producto/:productName",
        element: <ProductPage />,
      },
      { path: '/cambiar-password', 
        element: <ResetPassword />
       },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
