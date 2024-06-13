import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileCard from '../../components/ProfileCard/ProfileCard';


function Profile() {
  const userData = {
    usuario: 'ejemploUsuario',
    nombre: 'Ejemplo Nombre',
    fechaNacimiento: '01/01/1990',
    telefono: '123-456-7890',
    direccion: 'Ejemplo Dirección',
    genero: 'Masculino',
  };

  return (
    <Container>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <ProfileCard data={userData} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;

