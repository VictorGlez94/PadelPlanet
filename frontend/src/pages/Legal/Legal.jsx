import "./Legal.css";
import { Typography } from "@mui/material";

function Legal() {
  return (
    <Typography>
      <div className="container">
        <h1>Aviso Legal</h1>
        <p>
          En cumplimiento con el deber de información dispuesto en la Ley
          34/2002 de Servicios de la Sociedad de la Información y el Comercio
          Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los
          siguientes datos de información general de este sitio web:
        </p>

        <h2>El Usuario</h2>
        <p>
          El acceso, la navegación y uso del Sitio Web, confiere la condición de
          Usuario, por lo que se aceptan, desde que se inicia la navegación por
          el Sitio Web, todas las Condiciones aquí establecidas, así como sus
          ulteriores modificaciones, sin perjuicio de la aplicación de la
          correspondiente normativa legal de obligado cumplimiento según el
          caso. Dada la relevancia de lo anterior, se recomienda al Usuario
          leerlas cada vez que visite el Sitio Web.
        </p>

        <h2>
          III. Acceso y Navegación en el Sitio Web: Exclusión de Garantías y
          Responsabilidad
        </h2>
        <p>
          No garantiza la continuidad, disponibilidad y utilidad del Sitio Web,
          ni de los Contenidos o Servicios.
        </p>

        <h2>IV. Política de Enlaces</h2>
        <p>
          No ofrece ni comercializa por sí ni por medio de terceros los
          productos y/o servicios disponibles en dichos sitios enlazados.
        </p>

        <h2>V. Propiedad Intelectual e Industrial</h2>
        <p>
          Por sí o como parte cesionaria, es titular de todos los derechos de
          propiedad intelectual e industrial del Sitio Web, así como de los
          elementos contenidos en el mismo.
        </p>

        <h2>VI. Acciones Legales, Legislación Aplicable y Jurisdicción</h2>
        <p>
          Se reserva la facultad de presentar las acciones civiles o penales que
          considere necesarias por la utilización indebida del Sitio Web y
          Contenidos, o por el incumplimiento de las presentes Condiciones.
        </p>
      </div>
    </Typography>
  );
}

export default Legal;
