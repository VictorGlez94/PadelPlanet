import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      bgcolor="white"
      color="#04233A"
    >
      <Container sx={{textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
        ¡Vaya! Parece que has golpeado la pelota fuera de la pista.
        </Typography>
        <img src="src/assets/images/error 404.png" alt="Error 404" style={{ maxHeight: '200px', width: 'auto', marginTop: '20px', marginBottom: '20px'}}/>
        <Typography variant="body1" gutterBottom>
         La página que estás buscando no existe.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{
            mt: 3,
            bgcolor: "#CCFF00",
            color: "#04233A",
            "&:hover": {
              backgroundColor: "#e9ff60",
            },
          }}
        >
          Volver a la página principal
        </Button>
      </Container>
    </Box>
  );
}

export default NotFound;
