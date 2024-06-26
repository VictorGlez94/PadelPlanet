import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList/ProductList';
import CategoryList from '../../components/CategoryList';
import { api } from '../../services/config';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, usersResponse] = await Promise.all([
          await api.get("product/",{headers: headers}),
          await api.get("user/",{headers: headers}),
        ]);
        console.log(1, productsResponse, usersResponse, productsResponse.data)
        setProducts(productsResponse.data);
        setUsers(usersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Ha habido un error buscando los productos", error);
        setError("Ha habido un error buscando los productos");
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  console.log(2, users, products)
  const joinData = () => {
    return products.map((product) => {
      const user = users.find((user) => user.id === product.seller_id);
      return {
        ...product,
        sellerName: user ? user.name : "Desconocido",
      };
    });
  };

  const filteredProducts = joinData().filter((product) =>
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
        <Typography
          variant="h3"
          color="black"
          textAlign="center"
          marginTop={"30px"}
          marginBottom={"30px"}
        >
          Cargando...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="home-container">
        <Typography
          variant="h3"
          color="black"
          textAlign="center"
          marginTop={"30px"}
          marginBottom={"30px"}
        >
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="home-container">
      <Typography
        variant="h3"
        color="black"
        textAlign="center"
        marginTop={"30px"}
        marginBottom={"30px"}
      >
        ¿Qué quieres encontrar?
      </Typography>
      <SearchBar onSearchChange={setSearchTerm} />
      <CategoryList />
      <Typography
        variant="h4"
        color="black"
        textAlign="center"
        marginTop={"30px"}
        marginBottom={"30px"}
      >
        Productos a la venta
      </Typography>
      <ProductList products={sortedProducts} />
    </Container>
  );
}

export default Home;
