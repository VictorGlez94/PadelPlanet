import { useState } from 'react';
import { Container, Typography} from '@mui/material';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList/ProductList';
import productsData from '/home/victor/code/final-project/PadelPlanet/frontend/src/assets/db/products.json';
import './Home.css';
import CategoryList from '../../components/CategoryList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (categoryName) => {
    console.log(`Filtrar productos por la categoría: ${categoryName}`);
  };

  return (
    <Container className="home-container">
      
      <Typography variant='h3' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>¿Qué quieres encontrar?</Typography>
      <SearchBar onSearchChange={setSearchTerm} />
      <CategoryList onCategoryClick={handleCategoryClick} />
      <Typography variant='h4' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>Productos a la venta</Typography>
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
