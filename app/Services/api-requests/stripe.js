// import { loadStripe } from "@stripe/stripe-js";
import { accessToken } from "../access-token/access_token";
import { BASE_URL } from "../config/url-manager";
import axios from "axios";
// const stripePromise = loadStripe("your_stripe_public_key");

export const handleCheckoutStripe = async (id) => {
  const access_token = accessToken();
  if (access_token !== null || access_token !== undefined || access_token) {
    const result = await axios.post(
      `${BASE_URL}/api/stripe/certnowPaymentStripe/${id}`,
      {
        items: [{ id: 1, quantity: 1 }],
      },
      {
        headers: {
          access_token: access_token,
        },
      }
    );
    return result;
  } else {
    return "You dont have jwt";
  }
};
export const handlePaymentSuccess = async (sessionId, paymentStatus) => {
  const access_token = accessToken();
  if (access_token !== null || access_token !== undefined || access_token) {
    const result = await axios.post(
      `${BASE_URL}/api/stripe/handlePaymentSuccess`,
      {
        sessionId: sessionId,
        paymentStatus: paymentStatus,
      },
      {
        headers: {
          access_token: access_token,
        },
      }
    );
    return result;
  } else {
    return "You dont have jwt";
  }
};
