import "./Shipping.css";
import { Typography } from "@mui/material";

function Shipping() {
  return (
    <Typography sx={{ mb: 10}}> 
    <div className="container">
    <h1>Política de Envíos y Devoluciones</h1>
    <section>
      <h2>Envíos</h2>
      <p>En PadelPlanet nos comprometemos a ofrecerte un servicio de envío rápido y eficiente. Todos nuestros productos son enviados dentro de las 24 horas siguientes a la confirmación del pedido, a menos que se indique lo contrario en la descripción del producto.</p>
      <p>El tiempo de entrega estimado es de 2 a 5 días laborables, dependiendo de la ubicación del destinatario. Los pedidos realizados durante fines de semana o días festivos pueden requerir un tiempo adicional de procesamiento.</p>
    </section>
    <section>
      <h2>Devoluciones</h2>
      <p>Queremos que estés completamente satisfecho con tu compra en PadelPlanet. Si por alguna razón no estás conforme con tu pedido, ofrecemos una política de devolución flexible.</p>
      <p>Tienes hasta 30 días desde la recepción del producto para devolverlo si no cumple con tus expectativas. El artículo debe estar en su estado original y sin usar, y debe incluir todos los accesorios y etiquetas originales.</p>
      <p>Para iniciar un proceso de devolución, por favor contáctanos a través de nuestro servicio de atención al cliente. Una vez aprobada la devolución, te proporcionaremos las instrucciones necesarias para enviar el producto de vuelta.</p>
      <p>Los costos de envío asociados a la devolución serán cubiertos por el cliente, a menos que el motivo de la devolución sea debido a un error nuestro o un producto defectuoso.</p>
    </section>
    </div>
    </Typography>
  );
}

export default Shipping;
