import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/config";

export default function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      name: data.get("name"),
      username: data.get("userName"),
      birthday: data.get("dateOfBirth"),
      gender: data.get("gender"),
      phone: data.get("phone"),
      address: data.get("address"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const confirmPassword = data.get("confirmPassword");
    const acceptPolicies = data.get("acceptPolicies");

    for (let key in userData) {
      if (!userData[key]) {
        alert("Por favor completa todos los campos");
        return;
      }
    }

    if (!confirmPassword) {
      alert("Por favor confirma tu contraseña");
      return;
    }

    if (userData.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!acceptPolicies) {
      alert("Por favor acepta la Política de Privacidad y la Política de Cookies");
      return;
    }

    console.log(userData)
    await api
      .post("auth/signup", userData)
      .then(async (response) => {
        console.log("User registered:", response);
        await login(userData.email, userData.password);
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#04233A" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Regístrate
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="userName"
                label="Usuario"
                name="userName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="dateOfBirth"
                label="Fecha de nacimiento"
                name="dateOfBirth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                required
                fullWidth
                id="gender"
                label="Género"
                name="gender"
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">Selecciona</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
                <option value="otro">Otro</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Teléfono"
                name="phone"
                type="tel"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Dirección"
                name="address"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Repetir Contraseña"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptPolicies"
                    value="acceptPolicies"
                    color="primary"
                    required
                    sx={{ color: "#04233A" }}
                  />
                }
                label="Acepto la Política de Privacidad y la Política de Cookies."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 3,
              color: "#04233A",
              bgcolor: "#CCFF00",
              "&:hover": {
                backgroundColor: "#e9ff60",
              },
            }}
          >
            Registrarme
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item sx={{ mb: 6 }}>
              <Link href="/login" variant="body2" sx={{ color: "#04233A" }}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
