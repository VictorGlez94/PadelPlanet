import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  List,
  Button,
  IconButton,
} from "@mui/material";
import productsData from "../../assets/db/products.json";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCart } from "../../context/CartContext";

const ProductPage = () => {
  const { productName } = useParams();
  const { addToCart, toggleFavorite, favorites } = useCart();

  const formatProductName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const product = productsData.find(
    (p) => formatProductName(p.name) === productName
  );

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">Producto no encontrado</Typography>
      </Box>
    );
  }

  const [isFavorite, setIsFavorite] = useState(() =>
    favorites.some((item) => item.id === product.id)
  );

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite); 
    toggleFavorite(product); 
  };


  const handleAddToCart = () => {
    addToCart(product); 
  };

  const handleShare = (network) => {
    switch (network) {
      case "facebook":
        shareOnFacebook();
        break;
      case "twitter":
        shareOnTwitter();
        break;
      case "whatsapp":
        shareOnWhatsApp();
        break;
      default:
        break;
    }
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(product.name)}`;
    window.open(url, "_blank");
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${product.name} - ${window.location.href}`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <BreadcrumbsComponent />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 10,
        }}
      >
        <Box
          sx={{
            mt: -3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "30px 50px 50px 50px",
            width: "80%",
            justifyContent: "space-evenly",
          }}
        >
          <CardMedia
            component="img"
            image={product.image_url}
            alt={product.name}
            sx={{ maxHeight: "400px", maxWidth: "400px" }}
          />
          <CardContent>
            <Typography variant="h4" color="text.secondary">
              <strong>Vendido por:</strong> {product.seller_id}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Fecha de Publicación:</strong> {product.created_at}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: "#CCFF00",
                  color: "#04233A",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#e9ff60",
                  },
                }}
                startIcon={<PhoneIcon />}
              >
                Llamar
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: "#CCFF00",
                  color: "#04233A",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#e9ff60",
                  },
                }}
                startIcon={<SmsIcon />}
              >
                Mensaje
              </Button>
            </Box>
            <Typography variant="body1" color="text.secondary" marginBottom='8px'>
              <strong>Comparte este anuncio:</strong>
            </Typography>
            <Box>
              <List sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <FacebookIcon onClick={() => handleShare("facebook")} />
                <TwitterIcon onClick={() => handleShare("twitter")} />
                <WhatsAppIcon onClick={() => handleShare("whatsapp")} />
              </List>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: "30px",
                bgcolor: "rgba(4, 35, 58, 0.2)",
                padding: "5px",
                borderRadius: "15px",
              }}
            >
              <IconButton aria-label="favorito" onClick={handleToggleFavorite}>
                {isFavorite ? (
                  <FavoriteIcon sx={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                )}
              </IconButton>
              <IconButton
                aria-label="añadir al carrito"
                onClick={handleAddToCart}
              >
                <ShoppingCartOutlinedIcon sx={{ color: "#04233A" }} />
              </IconButton>
            </Box>
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              backgroundColor: "rgba(204, 255, 0, 0.2)",
              padding: '4px',
              width: "70vw",
              marginBottom: "10px",
              textAlign: 'center'
            }}
          >
            {product.name}
          </Typography>
          <Typography variant="h4"             sx={{
              border: '1px solid green',
              padding: '12px',
              marginBottom: "10px",
              textAlign: 'center',
              borderRadius: '15px'
            }}>
          <strong>{product.price.toFixed(2)}€</strong>
            </Typography>
          <CardContent>
            <Typography variant="h4">
              <strong>Marca:</strong> {product.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Categoría:</strong> {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Estado del producto:</strong> {product.product_status_id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
