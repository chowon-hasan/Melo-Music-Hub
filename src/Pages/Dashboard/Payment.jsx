import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import useSelectClasses from "../../Hookes/useSelectClasses";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE);

const Payment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const priceNew = queryParams.get("price");
  const classId = queryParams.get("id");
  const totalPrice = parseInt(priceNew);
  const price = parseFloat(totalPrice.toFixed(2));

  console.log(typeof price, price, classId);

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-red-700 my-5">Payment Method</h1>
        <p className="my-3 font-bold ">Your total price $ {price}</p>
      </div>
      <div className="border p-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} classId={classId}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
