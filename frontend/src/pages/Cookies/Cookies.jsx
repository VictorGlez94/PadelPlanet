import "./Cookies.css";
import { Typography } from "@mui/material";

function CookiesPolicy() {
  return (
    <Typography sx={{ mb: 10}}>
      <div className="container">
        <h1>Política de Cookies</h1>
        <p>
          En esta web se utilizan cookies de terceros y propias para conseguir
          que tengas una mejor experiencia de navegación, puedas compartir
          contenido en redes sociales y para que podamos obtener estadísticas de
          los usuarios.
        </p>

        <p>
          Puedes evitar la descarga de cookies a través de la configuración de
          tu navegador, evitando que las cookies se almacenen en su dispositivo.
        </p>

        <p>
          Como propietario de este sitio web, te comunico que no utilizamos
          ninguna información personal procedente de cookies, tan sólo
          realizamos estadísticas generales de visitas que no suponen ninguna
          información personal.
        </p>

        <p>
          Es muy importante que leas la presente política de cookies y
          comprendas que, si continúas navegando, consideraremos que aceptas su
          uso.
        </p>

        <p>
          Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de
          Servicios de la Sociedad de la Información y Comercio Electrónico, si
          continúas navegando, estarás prestando tu consentimiento para el
          empleo de los referidos mecanismos.
        </p>

        <h2>Entidad Responsable</h2>

        <p>
          La entidad responsable de la recogida, procesamiento y utilización de
          tus datos personales, en el sentido establecido por la Ley de
          Protección de Datos Personales es la página PadelPlanet, propiedad de
          Alguien – Calle Inventada 1, Padelandia.
        </p>

        <h2>¿Qué son las cookies?</h2>

        <p>
          Las cookies son un conjunto de datos que un servidor deposita en el
          navegador del usuario para recoger la información de registro estándar
          de Internet y la información del comportamiento de los visitantes en
          un sitio web. Es decir, se trata de pequeños archivos de texto que
          quedan almacenados en el disco duro del ordenador y que sirven para
          identificar al usuario cuando se conecta nuevamente al sitio web. Su
          objetivo es registrar la visita del usuario y guardar cierta
          información. Su uso es común y frecuente en la web ya que permite a
          las páginas funcionar de manera más eficiente y conseguir una mayor
          personalización y análisis sobre el comportamiento del usuario.
        </p>
      </div>
    </Typography>
  );
}

export default CookiesPolicy;
