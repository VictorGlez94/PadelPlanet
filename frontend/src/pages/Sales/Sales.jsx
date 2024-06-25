// Sales.jsx
import ProductList from "../../components/ProductList/ProductList";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import productsData from '../../assets/db/products.json'; 

function Sales() {
  const { isAuthenticated, user } = useAuth();

  const userProductsForSale = productsData.filter(
    (product) => isAuthenticated && product.seller_id === user.id
  );

  return (
    <Box sx={{ flexGrow: 1, ml: "80px", mr: "80px", mb: "40px" }}>
      {userProductsForSale.length === 0 ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">No tienes productos en venta</Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#04233A",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#1565C0" },
            }}
          >
            Ver Productos
          </Button>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Tus productos en venta:</Typography>
          <ProductList products={userProductsForSale} />
        </Box>
      )}
    </Box>
  );
}

export default Sales;
