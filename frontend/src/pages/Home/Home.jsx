import { useState } from 'react';
import { Container, Typography} from '@mui/material';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList/ProductList'; // Importa ProductList
import productsData from '/home/victor/code/final-project/PadelPlanet/frontend/src/assets/db/products.json'; // Importa tus datos de productos
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar productos según el término de búsqueda
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="home-container">
      
      <Typography variant='h3' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>¿Qué quieres encontrar?</Typography>
      <SearchBar onSearchChange={setSearchTerm} />

      <Typography variant='h4' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>Productos a la venta</Typography>
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
