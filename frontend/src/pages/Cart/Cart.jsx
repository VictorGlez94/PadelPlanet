import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (cart.length === 0) {
    return (
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography variant="h4">Tu carrito está vacío</Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{
            marginTop: 2,
            backgroundColor: "#04233A",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#1565C0" },
          }}
        >
          Continuar Comprando
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, ml: "80px", mr: "80px", mb: "40px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Card sx={{ padding: 2, border: "1px solid #e0e0e0", boxShadow: 1 }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
              <strong>Productos añadidos</strong>
            </Typography>
            {cart.map((item, index) => (
              <Box key={index} sx={{ display: "flex", marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.imagen}
                  alt={item.nombre}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {item.nombre}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {`${item.precio.toFixed(2)} €`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Box>
              </Box>
            ))}
            <Button
              component={Link}
              to="/"
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                width: "100%",
                marginTop: 2,
                backgroundColor: "#04233A",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
            >
              Continuar Comprando
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ padding: 2, border: "1px solid #e0e0e0", boxShadow: 1 }}>
            <Typography variant="h6">
              <strong>Resumen del pedido:</strong>
            </Typography>
            <Typography>Artículos: {cart.length}</Typography>
            <Typography>
              Total (impuestos inc.): {total.toFixed(2)} €
            </Typography>
            <Button
              component={Link}
              to="/finalizar-compra"
              variant="contained"
              sx={{
                width: "100%",
                marginTop: 2,
                backgroundColor: "#CCFF00",
                color: "#04233A",
                fontWeight:'bold',
                "&:hover": { backgroundColor: "#e9ff60" },
              }}
            >
              Finalizar Compra
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
