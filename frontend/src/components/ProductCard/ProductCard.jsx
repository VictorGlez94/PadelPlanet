/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { formatDistanceToNowStrict } from "date-fns";
import { es } from "date-fns/locale";

const ProductCard = ({ product, category }) => {
  const timeAgo = formatDistanceToNowStrict(new Date(product.created_at), { addSuffix: true, locale: es });

  if (category && product.category !== category) {
    return null; 
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ textAlign: 'center', backgroundColor: 'rgba(204, 255, 0, 0.7)' }}>
        <Typography variant="body1" color="#04233A" fontWeight='bold' textAlign='center'>
          {product.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={product.image_url}
        alt={product.name}
        sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="body1" color="#04233A" fontWeight='bold' textAlign='center' backgroundColor='rgba(204, 255, 0, 0.3)' padding='6px' borderRadius='15px'>
          {`${product.price.toFixed(2)} €`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '55px' }}>
          <IconButton aria-label="añadir a favoritos">
            <FavoriteBorderOutlinedIcon sx={{ color: "red", bgcolor: "transparent" }} />
          </IconButton>
          <IconButton aria-label="añadir al carrito">
            <ShoppingCartIcon sx={{ color: "#04233A" }} />
          </IconButton>
        </Box>
      </CardActions>
      <CardHeader
        sx={{ textAlign: 'center', backgroundColor: 'rgba(4, 35, 58, 0.3)' }}
        avatar={<Avatar sx={{ bgcolor: "#04233A" }}>{product.name.charAt(0)}</Avatar>}
        title={<Typography variant="body2" fontWeight="bold" noWrap>
          {`Publicado ${timeAgo}`}
        </Typography>}
        subheader={<Typography variant="body2" noWrap>
          {`por ${product.seller_id}`}
        </Typography>}
      />
    </Card>
  );
};

export default ProductCard;
