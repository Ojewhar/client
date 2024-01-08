import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your_stripe_public_key");

export const handleCheckoutStripe = async ({ priceId, productId }) => {
  const stripe = await stripePromise;

  // Create a checkout session
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId: productId }),
  });

  const session = await response.json();

  // Redirect to Checkout
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.error(result.error.message);
  }
};
