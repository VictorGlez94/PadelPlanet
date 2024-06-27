import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completado`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Ha ocurrido un error");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element"/>
      <button disabled={isProcessing || !stripe || !elements} id="submit" style = {{marginTop: '30px', width: '100%', backgroundColor: '#CCFF00', color: '#04233A', padding: '10px 0px', fontWeight: 'bold', fontSize: '14px'}}>
        <span id="button-text">
          {isProcessing ? "Procesando el pago " : "Pagar"}
        </span>
      </button>
     
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
