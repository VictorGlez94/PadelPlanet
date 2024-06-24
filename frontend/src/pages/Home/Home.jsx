import { useState } from 'react';
import { Container, Typography} from '@mui/material';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList/ProductList';
import productsData from "../../assets/db/products.json";

import './Home.css';
import CategoryList from '../../components/CategoryList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="home-container">
      
      <Typography variant='h3' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>¿Qué quieres encontrar?</Typography>
      <SearchBar onSearchChange={setSearchTerm} />
      <CategoryList/>
      <Typography variant='h4' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>Productos a la venta</Typography>
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
