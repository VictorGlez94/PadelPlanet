import { useParams } from "react-router-dom";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import productsData from "../../assets/db/products.json";
import BreadcrumbsComponent from "../../components/Breadcrumbs";

const ProductPage = () => {
    const { productName } = useParams();

    const formatProductName = (name) => {
        return name.toLowerCase().replace(/\s+/g, "-");
      };
    
    const product = productsData.find((p) => formatProductName(p.name) === productName);

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">Producto no encontrado</Typography>
      </Box>
    );
  }

  return (
    <>
    <BreadcrumbsComponent />
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h3" gutterBottom>
          {product.name}
        </Typography>
      </Box>
      <Box sx={{
        mt: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        
          <CardMedia
            component="img"
            height="400"
            image={product.image_url}
            alt={product.name}
          />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <strong>Marca:</strong> {product.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Categoría:</strong> {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Descripción:</strong> {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Precio:</strong> {product.price.toFixed(2)} €
          </Typography>
        </CardContent>
      </Box>
    </Box>
    </>
  );
};

export default ProductPage;
