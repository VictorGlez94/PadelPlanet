import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import BreadcrumbsComponent from "../components/Breadcrumbs";
import router from "../router";

function Root() {
  const location = useLocation();

  const definedRoutes = router.routes.flatMap(route =>
    route.children ? route.children.map(child => child.path) : [route.path]
  );

  const isRouteDefined = definedRoutes.includes(location.pathname);
  const isHomeRoute = location.pathname === '/';
  const showBreadcrumbs = isRouteDefined && !isHomeRoute;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1}>
        {showBreadcrumbs && <BreadcrumbsComponent />}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Root;
