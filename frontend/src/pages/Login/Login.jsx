import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
// import users from '/home/victor/code/final-project/PadelPlanet/frontend/src/assets/db/users.json';  // Asumiendo que el archivo JSON está en el mismo directorio
// import users from '../../../src/assets/db/users.json';  // Asumiendo que el archivo JSON está en el mismo directorio
import { useAuth } from '../../context/AuthContext';


export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get("password");

    try {
      await login(email, password);
      console.log(isAuthenticated, "after authentication");

      // Check if the user is authenticated
      if (isAuthenticated) {
        navigate('/perfil');
      } else {
        setError('Email o contraseña incorrectos');
      }
    } catch (err) {
      setError('Error al iniciar sesión');
      console.error(err);
    }
    // const user = users.find((user) => user.email === email);

    // if (user && user.password === password) {
    //   localStorage.setItem('user', JSON.stringify(user));
    //   navigate('/perfil');
    // } else {
    //   setError('Email o contraseña incorrectos');
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: '#04233A' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicia sesión
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuérdame"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 3,
              color: '#04233A',
              bgcolor: '#CCFF00',
              '&:hover': {
                backgroundColor: '#e9ff60',
              },
            }}
          >
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ color: '#04233A' }}>
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/registro" variant="body2" sx={{ color: '#04233A' }}>
                {"¿No tienes cuenta? Regístrate"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
