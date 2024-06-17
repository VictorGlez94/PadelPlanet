import { useState } from 'react';
import { Container, Slider, Button } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const handleClearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handleCheckout = () => {
    alert('Proceeding to payment...');
    // Aquí podrías redirigir a la página de pago o procesar el pago
  };

  return (
    <Container className="home-container">
      <h1>¿Qué quieres encontrar?</h1>
      <SearchBar onSearchChange={setSearchTerm} />

      <h2>Nuevos Productos</h2>
      <Slider> {/* Aquí podrías añadir tu lógica para mostrar productos */} </Slider>

      <h3>Sugerencias</h3>
      {/* Aquí podrías añadir la lógica para mostrar sugerencias */}

      <aside className="carrito">
        <h2>Carrito</h2>
        <div id="carrito-lista">
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.price}€</p>
            </div>
          ))}
        </div>
        <p>Total: <span id="total">{total}</span>€</p>
        <Button onClick={handleClearCart} variant="contained" color="secondary">
          Vaciar Carrito
        </Button>
        <Button onClick={handleCheckout} variant="contained" color="primary">
          Pagar
        </Button>
      </aside>
    </Container>
  );
}

export default Home;
