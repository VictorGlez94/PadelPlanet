import { useState } from "react";
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
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./Cart.css";

const initialCart = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 10,
    cantidad: 1,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 20,
    cantidad: 1,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 20,
    cantidad: 1,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 20,
    cantidad: 1,
    imagen: "https://via.placeholder.com/150",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const removerCarrito = (productoId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productoId));
  };

  const subtotal = cart.reduce(
    (acumulado, item) => acumulado + item.cantidad * (item.precio || 0),
    0
  );
  const total = subtotal;

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
                    <IconButton onClick={() => removerCarrito(item.id)}>
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
            <Typography>Artículos: {cart.length} </Typography>
            <Typography>
              Total (impuestos inc.): {total.toFixed(2)} €
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                marginTop: 2,
                backgroundColor: "#04233A",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
            >
              Finalizar Compra
            </Button>
          </Card>
          <Box sx={{ marginTop: 2, display:'flex', justifyContent:'center', gap: '10px' }}>
            <Box>
              <CreditCardIcon />
            </Box>
            <Box>
              <Typography variant="caption">
                <strong>Pago seguro garantizado</strong>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 2, display:'flex', justifyContent:'center', gap: '10px' }}>
            <Box>
              <AccessTimeIcon />
            </Box>
            <Box>
              <Typography variant="caption">
                <strong>Envío en 24/72h</strong>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
