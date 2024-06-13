import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import BreadcrumbsComponent from "../components/Breadcrumbs";

function Root() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1}>
        <BreadcrumbsComponent />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Root;
