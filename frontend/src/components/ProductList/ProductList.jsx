import ProductCard from "../ProductCard/ProductCard";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function ProductList() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductList;

