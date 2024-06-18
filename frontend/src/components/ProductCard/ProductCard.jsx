/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader sx={{textAlign: 'center', backgroundColor: '#446a84'}}
        avatar={<Avatar sx={{ bgcolor: "#04233A" }}>{product.name.charAt(0)}</Avatar>}
        title={product.seller_id}
        subheader={product.created_at}
      />
      <CardMedia
        component="img"
        image={product.image_url}
        alt={product.name}
        sx={{ maxHeight: '100%', maxWidth: '100%',  objectFit: 'cover' }}
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: 'rgba(204, 255, 0, 0.5)' }}>
        <Typography variant="body1" color="#04233A" fontWeight='bold' textAlign= 'center'>
          {product.name}
        </Typography>
      </CardContent>
      <CardContent sx={{ textAlign: 'center', backgroundColor: 'rgba(204, 255, 0, 0.2)' }}>
        <Typography variant="body2" color="#04233A" fontWeight='bold' textAlign= 'center' >
          {`${product.price.toFixed(2)} €`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
          <Typography variant="body2" color="#04233A" fontWeight='bold'>
            Añadir a lista de favoritos
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
