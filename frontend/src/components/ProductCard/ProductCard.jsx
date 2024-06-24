/* eslint-disable react/prop-types */
// ProductCard.jsx
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

const ProductCard = ({ product, category }) => {
  const timeAgo = formatDistanceToNowStrict(new Date(product.created_at), {
    addSuffix: true,
    locale: es,
  });
  const { addToCart, toggleFavorite, favorites } = useCart();
  const [isFavorite, setIsFavorite] = useState(() =>
    favorites.some((item) => item.id === product.id)
  );

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.id === product.id));
  }, [favorites, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite(product);
  };

  const formatProductName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  if (category && product.category !== category) {
    return null;
  }

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
      <Link to={`/producto/${formatProductName(product.name)}`} style={{ textDecoration: "none" }}>
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
          {`${product.price.toFixed(2)} €`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "55px" }}>
          <IconButton
            aria-label="añadir a favoritos"
            onClick={handleToggleFavorite}
          >
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "red", bgcolor: "transparent" }} />
            ) : (
              <FavoriteBorderOutlinedIcon
                sx={{ color: "red", bgcolor: "transparent" }}
              />
            )}
          </IconButton>
          <IconButton aria-label="añadir al carrito" onClick={handleAddToCart}>
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
          <Avatar sx={{ bgcolor: "#04233A" }}>{product.name.charAt(0)}</Avatar>
        }
        title={
          <Typography variant="body2" fontWeight="bold" noWrap>
            {`Publicado ${timeAgo}`}
          </Typography>
        }
        subheader={
          <Typography variant="body2" noWrap>
            {`por ${product.seller_id}`}
          </Typography>
        }
      />
    </Card>
  );
};

export default ProductCard;
