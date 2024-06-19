// Favorites.jsx
import ProductList from "../../components/ProductList/ProductList";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Favorites() {
  const { favorites } = useCart();

  return (
    <Box sx={{ flexGrow: 1, ml: "80px", mr: "80px", mb: "40px" }}>
      {favorites.length === 0 ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">No tienes productos favoritos</Typography>
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
        <Typography variant="h4">Tus productos favoritos:</Typography>
        <ProductList products={favorites} />
        </Box>
      )}
    </Box>
  );
}

export default Favorites;
