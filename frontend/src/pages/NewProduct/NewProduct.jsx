import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel, InputAdornment } from "@mui/material";
import UploadWidget from "../../components/UploadWidget";
import { api } from "../../services/config";
import { Navigate } from "react-router-dom";

const Form = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "400px",
  margin: "auto",
}));

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));

const NewProduct = () => {
  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);

  const [sellerId, setSellerId] = useState("");

    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };

  useEffect(() => {
    const fetchCategoriesAndStatuses = async () => {
      try {
        const [categoriesResponse, statusesResponse] = await Promise.all([
          await api.get("productcategory/", { headers: headers }),
          await api.get("productstatus/", { headers: headers }),
        ]);
        setCategories(categoriesResponse.data);
        setStatuses(statusesResponse.data);
      } catch (error) {
        console.error("Error fetching categories and statuses:", error);
      }
    };
    fetchCategoriesAndStatuses();
    
    const userId = localStorage.getItem("userId"); 
    
    setSellerId(userId);
  }, []);
  
  console.log(1 , categories, statuses)

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const categoryId = categories.find((cat) => cat.name === categoria)?.id;
      const statusId = statuses.find((stat) => stat.status === status)?.id;

      console.log(2, statuses, statusId, status)
      const formData = {
        name,
        brand,
        description,
        price,
        category_id: categoryId,
        product_status_id: statusId
      };

      const response = await api.post("post/createPostWithProduct", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      console.log("Producto creado:", response.data);
      alert('Producto creado correctamente');
      Navigate('/');
    } catch (error) {
      console.error("Error al crear el producto", error);
      alert('Error al crear el producto');
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>¿Qué producto quieres vender?</h1>
      <Form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <UploadWidget />
        <TextFieldStyled
          name="name"
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextFieldStyled
          name="brand"
          label="Marca"
          variant="outlined"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="categoria-label">Categoría</InputLabel>
          <Select
            labelId="categoria-label"
            id="categoria"
            value={categoria}
            onChange={handleCategoriaChange}
            label="Categoría"
            required
          >
            <MenuItem value="Palas">Palas</MenuItem>
            <MenuItem value="Zapatillas">Zapatillas</MenuItem>
            <MenuItem value="Camisetas">Camisetas</MenuItem>
            <MenuItem value="Pantalones">Pantalones</MenuItem>
            <MenuItem value="Mochilas">Mochilas</MenuItem>
            <MenuItem value="Accesorios">Accesorios</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="estado-label">Estado del producto</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={status}
            onChange={handleEstadoChange}
            label="Estado del producto"
            required
          >
            <MenuItem value="Nuevo">Nuevo</MenuItem>
            <MenuItem value="Poco usado">Poco usado</MenuItem>
            <MenuItem value="Muy usado">Muy usado</MenuItem>
          </Select>
        </FormControl>
        <TextFieldStyled
          name="description"
          label="Descripción del producto"
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextFieldStyled
          name="price"
          label="Precio"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            alignSelf: "center",
            backgroundColor: "#04233A",
            marginTop: "20px",
          }}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default NewProduct;
