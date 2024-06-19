import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const StyledLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "inherit",
    textTransform: "capitalize",
  }));

  const elements = [
    {
      header: "Redes sociales",
      links: [
        <StyledLink to="https://www.instagram.com/" key="instagram-link">
          <InstagramIcon key="instagram-icon" />
        </StyledLink>,
        <StyledLink to="https://www.facebook.com/" key="facebook-link">
          <FacebookIcon key="facebook-icon" />
        </StyledLink>,
        <StyledLink to="https://twitter.com/" key="twitter-link">
          <TwitterIcon key="twitter-icon" />
        </StyledLink>,
        <StyledLink to="https://www.youtube.com/" key="youtube-link">
          <YouTubeIcon key="youtube-icon" />
        </StyledLink>,
      ],
    },
    {
      header: "Atención al cliente",
      links: [
        <StyledLink to="/contacto" key="contacto-link">
          Contacto
        </StyledLink>,
        <StyledLink to="/metodos-pago" key="pagos-link">
          Métodos de pago
        </StyledLink>,
        <StyledLink to="/envios" key="envios-link">
          Envíos y devoluciones
        </StyledLink>,
      ],
    },
    {
      header: "Información General",
      links: [
        <StyledLink to="/sobre-nosotros" key="sobre-nosotros-link">
          Sobre nosotros
        </StyledLink>,
        <StyledLink to="/privacidad" key="privacidad-link">
          Política de privacidad
        </StyledLink>,
        <StyledLink to="/cookies" key="cookies-link">
          Política de cookies
        </StyledLink>,
        <StyledLink to="/aviso-legal" key="legal-link">
          Aviso legal
        </StyledLink>,
      ],
    },
  ];

  function generateFooterElements() {
    return elements.map((column, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Box borderBottom={1}>
          <Button sx={{ color: "white", fontWeight: "bold" }}>
            {column.header}
          </Button>
        </Box>
        <Box
          sx={{
            display: index === 0 ? "inline-flex" : "flex",
            flexDirection: index === 0 ? "row" : "column",
            flexWrap: index === 0 ? "wrap" : "nowrap",
            gap: index === 0 ? 1 : 0,
            mt: 1,
          }}
        >
          {column.links.map((link, i) => {
              return (
                <Box key={i} sx={{ mt: 1 }}>
                  <Button sx={{ color: "white" }}>{link}</Button>
                </Box>
              );
            
          })}
        </Box>
      </Grid>
    ));
  }

  return (
    <footer>
      <Box bgcolor="#04233A" color="white" padding={2}>
        <Container>
          <Grid container spacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box
        py={1}
        m={0}
        bgcolor="#CCFF00"
        color={"#04233A"}
        fontWeight={"bold"}
      >
        <Typography sx={{textAlign:"center"}}>© PadelPlanet 2024</Typography>
      </Box>
    </footer>
  );
}

export default Footer;
