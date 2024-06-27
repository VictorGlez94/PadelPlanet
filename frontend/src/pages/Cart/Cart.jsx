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

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Función para calcular el total teniendo en cuenta la cantidad de cada producto
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  // Manejar clic en el botón para eliminar un producto del carrito
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Manejar clic en el botón para vaciar completamente el carrito
  const handleClearCart = () => {
    clearCart();
  };

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
                  sx={{ width: 150, maxHeight: 150 }}
                  image={item.image_url}
                  alt={item.name}
                />
                <Box sx={{ marginLeft: 2 }}>
                  <CardContent>
                    <Typography variant="h5" width="250px">
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {`${item.price} €`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Box>
                <Box
                  sx={{
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mt: 1,
                        maxHeight: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
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
              Total (impuestos inc.): {calculateTotal().toFixed(2)} €
            </Typography>
            <Button
              onClick={handleClearCart}
              variant="contained"
              sx={{
                width: "100%",
                marginTop: 2,
                backgroundColor: "#CCFF00",
                color: "#04233A",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#e9ff60" },
              }}
            >
              Vaciar Carrito
            </Button>
            <Button
              component={Link}
              to="/finalizar-compra"
              variant="contained"
              sx={{
                width: "100%",
                marginTop: 2,
                backgroundColor: "#CCFF00",
                color: "#04233A",
                fontWeight: "bold",
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
