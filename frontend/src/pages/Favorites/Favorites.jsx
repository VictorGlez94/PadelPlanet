/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { api } from "../../services/config";
import { useAuth } from "../../context/AuthContext";

function Favorites() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  const { userId } = useAuth();

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [likesResponse] = await Promise.all([
          await api.get("like/", { headers: headers }),
        ]);
        setLikes(likesResponse.data);
        console.log(likes)
        const filteredFavorites = likes.filter((like) => like.user_id === 8);
        setUserFavorites(filteredFavorites);
        console.log(filteredFavorites)
        setLoading(false);

      } catch (error) {
        console.error("Ha habido un error buscando los productos favoritos", error);
        setError("Ha habido un error buscando los productos favoritos");
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  

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
        <ProductList products={userFavorites} />
        </Box>
      )}
    </Box>
  );
}

export default Favorites;
