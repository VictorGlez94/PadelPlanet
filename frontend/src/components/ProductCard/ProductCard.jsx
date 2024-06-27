/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatDistanceToNowStrict } from "date-fns";
import { es } from "date-fns/locale";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/config"; 

const ProductCard = ({ product, category }) => {
  const timeAgo = formatDistanceToNowStrict(new Date(product.created_at), {
    addSuffix: true,
    locale: es,
  });
  const { addToCart, toggleFavorite, favorites } = useCart();
  const { isAuthenticated, user } = useAuth(); 

  const [isFavorite, setIsFavorite] = useState(() =>
    favorites.some((item) => item.id === product.id)
  );

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.id === product.id));
  }, [favorites, product.id]);

  const handleAddToCart = () => {
    if (!isOwner) {
      addToCart(product);
    }
  };

  const handleToggleFavorite = () => {
    if (isAuthenticated) {
      setIsFavorite(!isFavorite);
      sendLikeRequest(product.id, user.id);
      toggleFavorite(product);
    } else {
      console.log("Debe iniciar sesión para dar like.");
    }
  };

  const sendLikeRequest = async (productId, userId) => {
    try {
      const response = await api.post(
        "/like",
        { product_id: productId, user_id: userId },
        { headers: headers }
      );
      console.log("Like enviado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al enviar el like:", error);
    }
  };

  if (category && product.category !== category) {
    return null;
  }

  const isOwner = isAuthenticated && product.seller_id === user.id;
  console.log(isAuthenticated, product.seller_id)
  console.log(isOwner)
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 550,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(204, 255, 0, 0.7)",
        }}
      >
        <Typography
          variant="body1"
          color="#04233A"
          fontWeight="bold"
          textAlign="center"
          maxHeight="25px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {product.name}
        </Typography>
      </CardContent>
      <Link to={`/producto/${product.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          image={product.image_url}
          alt={product.name}
          sx={{
            maxHeight: '250px',
            width: "auto",
            marginTop: "8px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: "pointer",
          }}
        />
      </Link>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          color="#04233A"
          fontWeight="bold"
          textAlign="center"
          backgroundColor="rgba(204, 255, 0, 0.3)"
          padding="6px"
          borderRadius="15px"
        >
          {`${product.price} €`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "55px" }}>
          <IconButton
            aria-label="añadir a favoritos"
            onClick={handleToggleFavorite}
            disabled={isOwner}
          >
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "red", bgcolor: "transparent" }} />
            ) : (
              <FavoriteBorderOutlinedIcon
                sx={{ color: "red", bgcolor: "transparent" }}
              />
            )}
          </IconButton>
          <IconButton
            aria-label="añadir al carrito"
            onClick={handleAddToCart}
            disabled={isOwner}
          >
            <ShoppingCartIcon sx={{ color: "#04233A" }} />
          </IconButton>
        </Box>
      </CardActions>
      <CardHeader
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(4, 35, 58, 0.3)",
          maxHeight: 40,
        }}
        avatar={
          <Avatar sx={{ bgcolor: "#04233A" }}>{product.sellerName.charAt(0).toUpperCase()}</Avatar>
        }
        title={
          <Typography variant="body2" fontWeight="bold" noWrap>
            {`Publicado ${timeAgo}`}
          </Typography>
        }
        subheader={
          <Typography variant="body2" noWrap>
            {`por ${product.sellerName}`}
          </Typography>
        }
      />
    </Card>
  );
};

export default ProductCard;
