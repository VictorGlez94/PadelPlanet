/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { api } from "../../services/config";
import { useAuth } from "../../context/AuthContext";
import ProductList from '../../components/ProductList/ProductList';

function Favorites() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const { userId } = useAuth();

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [likesResponse, productsResponse, usersResponse] = await Promise.all([
          api.get("like/", { headers }),
          api.get("product/", { headers }),
          api.get("user/", { headers }),
        ]);

        setLikes(likesResponse.data);
        const filteredFavorites = likesResponse.data.filter((like) => like.user_id === userId);
        setUserFavorites(filteredFavorites);
        setProducts(productsResponse.data);
        setUsers(usersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Ha habido un error buscando los productos favoritos", error);
        setError("Ha habido un error buscando los productos favoritos");
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const getFavoriteProductsDetails = () => {
    const favoriteProducts = userFavorites.map((favorite) => {
      const product = products.find((p) => p.id === favorite.product_id);
      return product;
    });

    return favoriteProducts;
  };

  const joinDataForSales = (favoriteProducts, users) => {
    return favoriteProducts.map((product) => {
      const user = users.find((user) => user.id === product.seller_id);
      return {
        ...product,
        sellerName: user ? user.username : "Desconocido",
      };
    });
  };

  const favoriteProducts = getFavoriteProductsDetails();
  const favoriteProductsJoined = joinDataForSales(favoriteProducts, users);

  console.log(favoriteProductsJoined)

  return (
    <Box sx={{ flexGrow: 1, ml: "80px", mr: "80px", mb: "40px" }}>
      {likes.length === 0 ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">No tienes productos favoritos</Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#04233A",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#1565C0" },
            }}
          >
            Ver Productos
          </Button>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Tus productos favoritos:</Typography>
          <ProductList products={favoriteProductsJoined} />
        </Box>
      )}
    </Box>
  );
}

export default Favorites;
