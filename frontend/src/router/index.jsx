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
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

export default router