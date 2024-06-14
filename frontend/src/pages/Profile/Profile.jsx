import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useState } from 'react';


function Profile() {
  const initialUserData = {
    usuario: 'john_doe',
    nombre: 'John Doe',
    fechaNacimiento: '1990-01-01',
    telefono: '123456789',
    direccion: '123 Main St',
    genero: 'hombre',
    email: 'john@example.com',
    cardnumber: '1234 5678 9101 1121',
    foto: '',
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleSave = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <Container>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <ProfileCard data={userData} onSave={handleSave} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;

