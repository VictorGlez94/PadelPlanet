import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList/ProductList';
import CategoryList from '../../components/CategoryList';
import { api } from '../../services/config';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/product')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando productos:', error);
        setError('Ha habido un error cargando productos');
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  });

  if (loading) {
    return (
      <Container className="home-container">
        <Typography variant='h3' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>
          Cargando...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="home-container">
        <Typography variant='h3' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="home-container">
      <Typography variant='h3' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>
        ¿Qué quieres encontrar?
      </Typography>
      <SearchBar onSearchChange={setSearchTerm} />
      <CategoryList />
      <Typography variant='h4' color='black' textAlign="center" marginTop={'30px'} marginBottom={'30px'}>
        Productos a la venta
      </Typography>
      <ProductList products={sortedProducts} />
    </Container>
  );
}

export default Home;
