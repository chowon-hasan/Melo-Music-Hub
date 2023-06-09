import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import useSelectClasses from "../../Hookes/useSelectClasses";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE);

const Payment = () => {
  const { myclasses, isLoading } = useSelectClasses();
  const total = myclasses.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-red-700 my-5">Payment Method</h1>
        <p className="my-3 font-bold ">Your total price $ {price}</p>
      </div>
      <div className="border p-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
