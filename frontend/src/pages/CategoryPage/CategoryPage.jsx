/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList';
import productsData from '../../assets/db/products.json'; 
import BreadcrumbsComponent from '../../components/Breadcrumbs';
import SearchBar from '../../components/SearchBar';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSearch = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const filteredProducts = filteredSearch.filter(product => product.category === capitalizeFirstLetter(categoryName));

  return (
    <>
      <BreadcrumbsComponent />
    <Container>
      <Typography variant="h4" color='black' textAlign="center" marginTop="30px" marginBottom="30px">
        {capitalizeFirstLetter(categoryName)} a la venta
      </Typography>
      <SearchBar onSearchChange={setSearchTerm}/>
      <ProductList products={filteredProducts} />
    </Container>
    </>
  );
};

export default CategoryPage;
