const { resolve } = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

async function getPayment(req, res) {
  try {
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getConfig(req, res) {
  try {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createPayment(req, res) {
  const { paymentMethodType, currency, receiptEmail } = req.body;
  console.log(req.body)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: currency,
      amount: req.body.amount,
      payment_method: paymentMethodType,
      receipt_email: receiptEmail,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
}

module.exports = {
  getPayment,
  getConfig,
  createPayment,
};
