import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import { Box } from '@mui/material';

function Root() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Root;