import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../context/CartContext";
import { Box, Typography } from "@mui/material";
import CheckoutForm from "./CheckoutForm";

function Payment() {
  const { cart } = useCart();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    };

    setTotal(calculateTotal());
  }, [cart]);

  useEffect(() => {
    fetch("/config")
      .then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        console.error("Error fetching Stripe config:", error);
      });
  }, []);

  useEffect(() => {
    if (total > 0) {
      fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: total * 100 }), // Asegúrate de que el servidor espere el monto en centavos
      })
        .then(async (result) => {
          if (!result.ok) {
            throw new Error("Error al obtener el cliente secreto");
          }
          const { clientSecret } = await result.json();
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }
  }, [total]);

  /*
  if (!stripePromise) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">Cargando...</Typography>
      </Box>
    );
  }*/ 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" marginTop={'10px'} marginBottom={'10px'}>Elige tu método de pago: </Typography>
      <Typography marginBottom={'10px'}>El importe total de tu compra es de <strong>{total.toFixed(2)} €</strong> </Typography>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
}

export default Payment;
