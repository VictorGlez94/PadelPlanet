/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import SearchBar from "../../components/SearchBar";
import { api } from "../../services/config";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, categoriesResponse, usersResponse] = await Promise.all([
          await api.get("product/", { headers }),
          await api.get("productcategory/", { headers }),
          await api.get("user/", { headers: headers }),
        ]);
        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data)
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



  const joinData = () => {

    return products.map((product) => {
      const category = product.category_id
      ? categories.find((category) => category.id === product.category_id)
      : null;
      const user = users.find((user) => user.id === product.seller_id);

      return {
        ...product,
        categoryName: category ? category.name : "Desconocido",
        sellerName: user ? user.name : "Desconocido",
      };
    });

  };

  const filteredSearch = joinData().filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const filteredProducts = filteredSearch.filter(
    (product) => product.categoryName === capitalizeFirstLetter(categoryName)
  );

  return (
    <>
      <BreadcrumbsComponent />
      <Container>
        <Typography
          variant="h4"
          color="black"
          textAlign="center"
          marginTop="30px"
          marginBottom="30px"
        >
          {capitalizeFirstLetter(categoryName)} a la venta
        </Typography>
        <SearchBar onSearchChange={setSearchTerm} />
        <ProductList products={filteredProducts} />
      </Container>
    </>
  );
};

export default CategoryPage;
