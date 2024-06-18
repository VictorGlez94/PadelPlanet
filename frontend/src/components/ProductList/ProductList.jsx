/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ProductCard from "../ProductCard/ProductCard";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function ProductList({ products }) {
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;

