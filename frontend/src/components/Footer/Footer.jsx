import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const elements = [
    {
      header: "Redes sociales",
      links: [
        <InstagramIcon />,
        <FacebookIcon />,
        <TwitterIcon />,
        <YouTubeIcon />,
      ],
    },
    {
      header: "Atención al cliente",
      links: [
        <span key="contacto-link">
          <Link
            to="/contacto"
            style={{
              textDecoration: "none",
              color: "inherit",
              textTransform: "capitalize",
            }}
          >
            Contacto
          </Link>
        </span>,
        "Métodos de pago",
        "Envíos y devoluciones",
      ],
    },
    {
      header: "Información General",
      links: [
        <span key="about-link">
        <Link
          to="/sobre-nosotros"
          style={{
            textDecoration: "none",
            color: "inherit",
            textTransform: "capitalize",
          }}
        >
          Sobre nosotros
        </Link>
      </span>,
        "Política de privacidad",
        "Política de cookies",
        "Aviso legal",
      ],
    },
  ];

  function generateFooterElements() {
    const footerElements = elements.map((column, index) => {
      return (
        <Grid item xs={12} md={4} key={index}>
          {" "}
          {}
          <Box borderBottom={1}>
            <Button sx={{ color: "white", fontWeight: "bold" }}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link, i) => {
            if (typeof link === "string") {
              const formattedLink =
                link.charAt(0).toUpperCase() + link.slice(1).toLowerCase();
              return (
                <Box key={i}>
                  <Button sx={{ color: "white", textTransform: "capitalize" }}>
                    {formattedLink}
                  </Button>
                </Box>
              );
            } else {
              return (
                <Box key={i} sx={{ display: "inline-flex", marginTop: 1 }}>
                  <Button sx={{ color: "white" }}>{link}</Button>
                </Box>
              );
            }
          })}
        </Grid>
      );
    });
    return footerElements;
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
        textAlign={"center"}
        py={2}
        m={0}
        bgcolor="#CCFF00"
        color={"#04233A"}
        fontWeight={"bold"}
      >
        <Typography>© PadelPlanet 2024 - All Rights Reserved</Typography>
      </Box>
    </footer>
  );
}

export default Footer;
