import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useState, useEffect } from 'react';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData({
        usuario: user.username || '',
        nombre: user.name || '',
        fechaNacimiento: user.birthday || '',
        telefono: user.phone || '',
        direccion: user.address || '',
        genero: user.gender || '',
        email: user.email || '',
        cardnumber: user.card_number || '',
        foto: user.user_img || '',
      });
    }
  }, []);

  const handleSave = (updatedData) => {
    setUserData(updatedData);
    localStorage.setItem('user', JSON.stringify(updatedData));
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

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
