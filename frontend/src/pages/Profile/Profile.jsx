import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useState, useEffect } from 'react';
import { api } from "../../services/config"
// const { token } = useAuth();


function Profile() {
  const [userData, setUserData] = useState(null);
  const headers = {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem('token'),
  };
  // let responseRequest;
  useEffect(() => {
        api
          .get("user/ownProfile", {
            headers: headers,
          })
          .then((response) => {
            setUserData({
              usuario: response.data.result.username || "",
              nombre: response.data.result.name || "",
              fechaNacimiento: response.data.result.birthday || "",
              telefono: response.data.result.phone || "",
              direccion: response.data.result.address || "",
              genero: response.data.result.gender || "",
              email: response.data.result.email || "",
              cardnumber: response.data.result.card_number || "",
              foto: response.data.result.user_immg || "",
            });
          })
          .catch((error) => {
            console.error("Error fetching Stripe config:", error);
          });

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
