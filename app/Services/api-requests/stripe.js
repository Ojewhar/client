import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../config/url-manager";
import axios from "axios";
import { access_token } from "../access-token/access_token";
// const stripePromise = loadStripe("your_stripe_public_key");

export const handleCheckoutStripe = async () => {
  const accessToken = access_token();
  if (accessToken !== null || accessToken !== undefined || accessToken) {
    const result = await axios.post(
      `${BASE_URL}/api/stripe/certnowPaymentStripe`,
      {
        items: [{ id: 1, quantity: 1 }],
      },
      {
        headers: {
          access_token: accessToken,
        },
      }
    );
    return result;
  } else {
    return "You dont have jwt";
  }
};
