/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  List,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CheckBox }  from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/config";

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart, toggleFavorite, favorites } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productResponse] = await Promise.all([
          await api.get(`product/${productId}`, {headers: headers}),
        ]);
        setProductInfo(productResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Ha habido un error buscando el producto", error);
        setError("Ha habido un error buscando el producto");
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...productInfo });

  if (!productInfo) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">Producto no encontrado</Typography>
      </Box>
    );
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const [isFavorite, setIsFavorite] = useState(() =>
    favorites.some((item) => item.id === productInfo.id)
  );

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite(productInfo);
  };

  const handleAddToCart = () => {
    addToCart(productInfo);
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
    )}&text=${encodeURIComponent(productInfo.name)}`;
    window.open(url, "_blank");
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${productInfo.name} - ${window.location.href}`
    )}`;
    window.open(url, "_blank");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isOwner = isAuthenticated && user.id === productInfo.seller_id;

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
            image={productInfo.image_url}
            alt={productInfo.name}
            sx={{ maxHeight: "400px", maxWidth: "400px" }}
          />
          <CardContent sx={{ width: "400px" }}>
            <Typography variant="h4" color="#04233A">
              <strong>Vendido por:</strong> {productInfo.seller_id}
            </Typography>
            <Typography variant="body1" color="#04233A">
              <strong>Fecha de Publicación:</strong> {formatDate(productInfo.created_at)}
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
            <Typography variant="body1" color="#04233A" marginBottom="8px">
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
              <IconButton aria-label="favorito" onClick={handleToggleFavorite} disabled={isOwner}>
                {isFavorite ? (
                  <FavoriteIcon sx={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                )}
              </IconButton>
              <IconButton
                aria-label="añadir al carrito"
                onClick={handleAddToCart}
                disabled={isOwner}
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
              backgroundColor: "rgba(204, 255, 0, 0.15)",
              padding: "4px",
              width: "72vw",
              marginBottom: "15px",
              textAlign: "center",
              color: "#04233A",
            }}
          >
            {productInfo.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              padding: "5px 30px",
              textAlign: "center",
              borderRadius: "30px",
              bgcolor: "rgba(4, 35, 58, 0.2)",
              color: "#04233A",
            }}
          >
            <strong>{productInfo.price} €</strong>
          </Typography>
          <CardContent>
            <Box
              sx={{
                padding: "10px 30px",
                marginBottom: "30px",
                color: "#04233A",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <CheckBox />
                <Typography variant="h6">
                  <strong>Marca:</strong> {productInfo.brand}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <CheckBox />
                <Typography variant="h6">
                  <strong>Categoría:</strong> {productInfo.category}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <CheckBox />
                <Typography variant="h6">
                  <strong>Estado del producto:</strong>{" "}
                  {productInfo.product_status_id}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px dotted #04233A",
                padding: "45px 30px",
                textAlign: "center",
                color: "#04233A",
                width: "70vw",
                position: "relative",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "25px",
                  background: "rgba(204, 255, 0, 1)",
                  padding: "0 20px",
                  color: "#04233A",
                }}
              >
                <strong>Descripción</strong>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#04233A",
                }}
              >
                {productInfo.description}
              </Typography>
            </Box>
          </CardContent>
          {isAuthenticated && user.id === productInfo.seller_id && (
              <Button
                variant="contained"
                sx={{
                  display: 'flex',
                  margin: '20px',
                  alignItems: 'center',
                  bgcolor: "#04233A",
                  color: "white",
                  gap: '8px',
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                  },
                }}
                onClick={handleEditClick}
              >
              <EditIcon/>  Editar
              </Button>
            )}
            {isEditing && (
              <Box component="form">
                <TextField
                  name="name"
                  label="Nombre del producto"
                  value={editedProduct.name}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="price"
                  label="Precio"
                  type="number"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                                <TextField
                  name="brand"
                  label="Marca"
                  value={editedProduct.brand}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                                <TextField
                  name="category"
                  label="Categoría"
                  value={editedProduct.category}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                                <TextField
                  name="product_status"
                  label="Estado del producto"
                  value={editedProduct.product_status_id}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="description"
                  label="Descripción"
                  value={editedProduct.description}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={10}
                />
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
                  onClick={handleSaveClick}
                >
                  Guardar
                </Button>
              </Box>
            )}
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
