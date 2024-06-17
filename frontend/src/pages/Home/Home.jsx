import { useState } from 'react';
import { Container} from '@mui/material';
import SearchBar from '../../components/SearchBar';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container className="home-container">
      <h1>¿Qué quieres encontrar?</h1>
      <SearchBar onSearchChange={setSearchTerm} />

      <h2>Nuevos Productos</h2>
       {/* Aquí podrías añadir tu lógica para mostrar productos */} 

      <h3>Sugerencias</h3>
      {/* Aquí podrías añadir la lógica para mostrar sugerencias */}

    </Container>
  );
}

export default Home;
