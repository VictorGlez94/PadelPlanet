import { useState, useEffect } from "react";
import "./About.css";
import { Box, Typography } from "@mui/material";

const testimonies = [
  {
    name: "Laura Martínez",
    text: "¡PadelPlanet ha revolucionado mi forma de comprar equipamiento deportivo! Encontré justo lo que necesitaba y a un precio inmejorable.",
  },
  {
    name: "Miguel Torres",
    text: "Me encanta la facilidad con la que pude vender mi vieja pala de pádel. ¡Y el dinero extra vino perfecto para comprar una nueva!",
  },
  {
    name: "Ana García",
    text: "El servicio al cliente es increíble. Tuve un pequeño problema con mi pedido y lo resolvieron rápidamente. ¡Muy recomendable!",
  },
  {
    name: "Carlos Fernández",
    text: "La variedad de productos es asombrosa y todos en excelente estado. Definitivamente, seguiré comprando en PadelPlanet.",
  },
  {
    name: "Lucía Rodríguez",
    text: "La comunidad de PadelPlanet es genial. He conocido a muchos jugadores apasionados y he encontrado todo el equipo que necesito.",
  },
];

function About() {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prev) => (prev + 1) % testimonies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ mb: 10 }}>
      <div className="container">
        <Typography variant="h3" sx={{textAlign: 'center', mb: 5}}>Sobre Nosotros</Typography>
        <Typography variant="body1" paragraph>
          Bienvenido a PadelPlanet, tu destino número uno para todo lo relacionado con el mundo del pádel. Fundada en 2024, nuestra misión es ofrecer a los entusiastas del pádel una plataforma donde puedan encontrar, comprar y vender artículos de segunda mano de manera fácil y segura.
        </Typography>
        <Typography variant="body1" paragraph>
          En PadelPlanet, creemos en la economía circular y en darle una segunda vida a los productos deportivos. Ofrecemos una amplia variedad de productos, desde palas y pelotas hasta ropa y accesorios, todos verificados por nuestro equipo para garantizar su calidad.
        </Typography>
        <Typography variant="body1" paragraph>
          Nuestro equipo está compuesto por apasionados del pádel que entienden tus necesidades y están aquí para ayudarte en cada paso del camino. Nos enorgullece ofrecer un servicio al cliente excepcional y estamos comprometidos con la satisfacción de nuestros usuarios.
        </Typography>
        <Typography variant="body1" paragraph>
          Únete a nuestra comunidad y descubre lo fácil que puede ser encontrar los mejores productos de pádel a precios increíbles. ¡Nos vemos en la pista!
        </Typography>
          <Typography variant="h4" sx={{textAlign: 'center', mt: 5, mb: 3}}>Testimonios</Typography>
          <Box sx={{ boxShadow: 2, bgcolor: '#E6F5A8', padding: 3, border: '1px solid', borderRadius: 5 }}>
          <Typography variant="h6" sx={{textAlign: 'center', mb: 2}} paragraph>
            {testimonies[currentTestimony].text}
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 'bold'}}>{testimonies[currentTestimony].name}</Typography>
        </Box>
      </div>
    </Box>
  );
}

export default About;
