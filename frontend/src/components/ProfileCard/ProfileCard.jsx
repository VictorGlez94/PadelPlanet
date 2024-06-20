import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import UploadWidget from "../UploadWidget";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const generoOptions = [
  { value: "Hombre", label: "Hombre" },
  { value: "Mujer", label: "Mujer" },
];

function ProfileCard({ data, onSave }) {
  const {
    usuario,
    nombre,
    fechaNacimiento,
    telefono,
    direccion,
    genero,
    foto,
    email,
    cardnumber,
  } = data;
  const [uploadedFoto, setUploadedFoto] = useState(foto);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    nombre: nombre || "",
    direccion: direccion || "",
    telefono: telefono || "",
    genero: genero || "",
    email: email || "",
    cardnumber: cardnumber || "",
  });

  const handleUploadComplete = (url) => {
    setUploadedFoto(url);
    setEditedData({ ...editedData, foto: url });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedData({
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      genero: genero,
      email: email,
      cardnumber: cardnumber,
    });
  };

  const handleSave = () => {
    console.log("Datos actualizados:", editedData);
    onSave({ ...editedData, foto: uploadedFoto });
    setEditMode(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleGeneroChange = (event) => {
    setEditedData({ ...editedData, genero: event.target.value });
  };

  return (
    <Card sx={{ minWidth: 275, marginBottom: 20 }}>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          Perfil de usuario
        </Typography>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            fontSize: 40,
            bgcolor: "#04233A",
            margin: "30px auto 10px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        {uploadedFoto ? (
            <img
              src={uploadedFoto}
              alt="Foto de perfil"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <Typography
              variant="h4"
              component="span"
              sx={{ fontSize: "inherit", color: "#fff" }}
            >
              {nombre ? nombre.charAt(0).toUpperCase() : ""}
            </Typography>
          )}
        </Avatar>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <UploadWidget onUploadComplete={handleUploadComplete} />
        </div>

        {editMode ? (
          <>
            <TextField
              name="nombre"
              label="Nombre"
              value={editedData.nombre}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              inputProps={{ style: { fontSize: 16 } }}
            />
            <TextField
              name="direccion"
              label="Dirección"
              value={editedData.direccion}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              inputProps={{ style: { fontSize: 16 } }}
            />
            <TextField
              name="telefono"
              label="Teléfono"
              value={editedData.telefono}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              inputProps={{ style: { fontSize: 16 } }}
            />
            <TextField
              select
              name="genero"
              label="Género"
              value={editedData.genero}
              onChange={handleGeneroChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              inputProps={{ style: { fontSize: 16 } }}
            >
              {generoOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="email"
              label="E-mail"
              value={editedData.email}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              inputProps={{ style: { fontSize: 16 } }}
            />
            <TextField
              name="cardnumber"
              label="Número de Tarjeta"
              value={editedData.cardnumber}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              inputProps={{ style: { fontSize: 16 } }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ marginRight: 2, bgcolor: "#04233A", marginBottom: 2 }}
            >
              Guardar
            </Button>
            <Button
              variant="contained"
              onClick={handleCancelEdit}
              sx={{ bgcolor: "#04233A", marginBottom: 2 }}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Usuario:</strong> {usuario}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Nombre:</strong> {nombre}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Fecha de Nacimiento:</strong> {fechaNacimiento}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Teléfono:</strong> {telefono}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Dirección:</strong> {direccion}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Género:</strong> {genero}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>E-mail:</strong> {email}
            </Typography>
            <Typography
              variant="body1"
              color="#04233A"
              sx={{ marginBottom: 1 }}
            >
              <strong>Número de Tarjeta:</strong> {cardnumber}
            </Typography>
            <Button
              variant="contained"
              onClick={handleEdit}
              sx={{ marginTop: 2, bgcolor: "#04233A" }}
            >
              Editar
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

ProfileCard.propTypes = {
  data: PropTypes.shape({
    usuario: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cardnumber: PropTypes.string,
    foto: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProfileCard;