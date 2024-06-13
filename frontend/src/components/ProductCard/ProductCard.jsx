import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#04233A" }}>J</Avatar>}
        title="Julinho"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2" color="#04233A" fontWeight='bold'>
            Product Name
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
        <IconButton aria-label="delete">
          <DeleteIcon sx={{ color: "#04233A" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
