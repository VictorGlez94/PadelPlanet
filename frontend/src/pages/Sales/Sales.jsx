/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from '../../services/config';
import ProductList from '../../components/ProductList/ProductList';

function Sales() {
  const { isAuthenticated, userId } = useAuth();
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userProductsForSale, setUserProductsForSale] = useState([]);
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
          api.get("product/", { headers }),
          api.get("user/",{headers: headers}),
        ]);
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

  const joinDataForSales = (userProducts, users) => {
    return userProducts.map((product) => {
      const user = users.find((user) => user.id === product.seller_id);
      return {
        ...product,
        sellerName: user ? user.username : "Desconocido",
      };
    });
  };

  useEffect(() => {
    if (products.length > 0) {
      const filteredUserProductsForSale = products.filter(
        (product) => isAuthenticated && product.seller_id === userId
      );
      const updatedUserProductsForSale = joinDataForSales(filteredUserProductsForSale, users);
      setUserProductsForSale(updatedUserProductsForSale);
    }
  }, [products, isAuthenticated, userId]);

  return (
    <Box sx={{ flexGrow: 1, ml: "80px", mr: "80px", mb: "40px" }}>
      {userProductsForSale.length === 0 ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">No tienes productos en venta</Typography>
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
          <Typography variant="h4">Tus productos en venta:</Typography>
          <ProductList products={userProductsForSale} />
        </Box>
      )}
    </Box>
  );
}

export default Sales;
