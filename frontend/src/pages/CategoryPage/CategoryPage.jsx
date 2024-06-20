import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList';
import productsData from '../../assets/db/products.json'; 
import BreadcrumbsComponent from '../../components/Breadcrumbs';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const filteredProducts = productsData.filter(product => product.category === capitalizeFirstLetter(categoryName));

  return (
    <>
      <BreadcrumbsComponent />
    <Container>
      <Typography variant="h4" color='black' textAlign="center" marginTop="30px" marginBottom="30px">
        {capitalizeFirstLetter(categoryName)} a la venta
      </Typography>
      <ProductList products={filteredProducts} />
    </Container>
    </>
  );
};

export default CategoryPage;
