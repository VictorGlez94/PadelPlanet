import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import categoriesData from "../assets/db/categories.json";

const CategoryList = () => {
  return (
    <Grid container spacing={2} marginTop='20px' marginBottom='60px'>
      {categoriesData.map((category) => (
        <Grid item key={category.id} xs={6} sm={4} md={2}>
          <Card sx={{ boxShadow: 'none', "&:hover": {
          transform: "scale(1.05)",
        }, }}>
            <Link to={`/categoria/${category.name.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardActionArea
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              >
                <CardMedia
                  component="img"
                  height="35px"
                  sx={{ width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                  image={category.image}
                  alt={category.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" textAlign="center">
                    {category.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
