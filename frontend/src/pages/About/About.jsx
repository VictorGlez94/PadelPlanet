import { Typography } from '@mui/material'
import './About.css'


function About() {
  return (
    <Typography sx={{ mb: 10}}>
      <div className="container">
        <h1>Sobre Nosotros</h1>
        <p>
          En esta web se utilizan cookies de terceros y propias para conseguir
          que tengas una mejor experiencia de navegación, puedas compartir
          contenido en redes sociales y para que podamos obtener estadísticas de
          los usuarios.
        </p>
      </div>
    </Typography>
  )
}

export default About

