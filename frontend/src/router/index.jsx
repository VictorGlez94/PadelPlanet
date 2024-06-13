import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import Favorites from "../pages/Favorites/Favorites";
import Sales from "../pages/Sales/Sales";
import PrivacyPolicy from "../pages/Privacy/Privacy";
import CookiesPolicy from "../pages/Cookies/Cookies";
import Legal from "../pages/Legal/Legal";
import NewProduct from "../pages/NewProduct/NewProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/sobre-nosotros",
        element: <About />,
      },
      {
        path: '/contacto',
        element: <Contact />
      },
      {
        path: '/privacidad',
        element: <PrivacyPolicy />
      },
      {
        path: '/cookies',
        element: <CookiesPolicy />
      },
      {
        path: '/aviso-legal',
        element: <Legal />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registro',
        element: <Signup />
      },
      {
        path: '/perfil',
        element: <Profile /> 
      },
      {
        path: '/perfil/favoritos',
        element: < Favorites /> 
      },
      {
        path: '/perfil/ventas',
        element: < Sales /> 
      },
      {
        path: '/perfil/nuevo-producto',
        element: < NewProduct /> 
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

export default router