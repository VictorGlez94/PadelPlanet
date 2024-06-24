import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../context/CartContext";
import { Box, Typography } from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import {api} from "../../services/config";


function Payment() {
  const { cart } = useCart();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      
      return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    };

    setTotal(calculateTotal());
  }, [cart]);

  useEffect(() => {
    console.log(api.getUri)
    api
      .get("payment/config")
      .then((response) => {
        console.log(response)
        const { publishableKey } = response.data;
        setStripePromise(loadStripe(publishableKey));

      })
      .catch((error) => {
        console.error("Error fetching Stripe config:", error);
      });
  }, []);

  useEffect(() => {
    console.log(api.getUri);
    if (total > 0) {
      api
        .post("payment/create-payment-intent", {
          amount: total * 100,
          currency: "EUR",
          receiptEmail: "jdanielperez@outlook.es",
        })
        .then((response) => {
          console.log(response);
          const { clientSecret } = response.data;
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }
  }, [total]);

  
  if (!stripePromise) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">Cargando...</Typography>
      </Box>
    );
  }
  

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
