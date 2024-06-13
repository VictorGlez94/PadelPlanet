import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel, InputAdornment } from "@mui/material";
import UploadWidget from "../../components/UploadWidget";

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
  const [estado, setEstado] = useState("");

  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
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
        <UploadWidget/>
        <TextFieldStyled
          name="nombre"
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <TextFieldStyled
          name="marca"
          label="Marca"
          variant="outlined"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
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
            <MenuItem value="palas">Palas</MenuItem>
            <MenuItem value="zapatillas">Zapatillas</MenuItem>
            <MenuItem value="camisetas">Camisetas</MenuItem>
            <MenuItem value="pantalones">Pantalones</MenuItem>
            <MenuItem value="mochilas">Mochilas</MenuItem>
            <MenuItem value="accesorios">Accesorios</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="estado-label">Estado del producto</InputLabel>
          <Select
            labelId="estado-label"
            id="estado"
            value={estado}
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
          name="descripcion"
          label="Descripción del producto"
          multiline
          rows={4}
          variant="outlined"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <TextFieldStyled
          name="precio"
          label="Precio"
          variant="outlined"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
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
