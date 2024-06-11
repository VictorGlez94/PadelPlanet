import { useState } from 'react';
import { Container } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container className="home-container">
        <h1>¿Qué estás buscando?</h1>
        <SearchBar onSearchChange={setSearchTerm} />
    </Container>
  );
}

export default Home;
