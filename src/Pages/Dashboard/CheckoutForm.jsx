import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import Loader from "../Shared/Loader";
import { Toaster, toast } from "react-hot-toast";

const CheckoutForm = ({ price, classId }) => {
  const [cardError, setCarderror] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [transactionIdStripe, setTransactionId] = useState("");

  const stripePromise = loadStripe(toString(import.meta.env.VITE_PAYMENT_KEY));

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCarderror(error.message);
      console.log("error card", error);
    } else {
      setCarderror("");
      console.log("paymentMethod", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment intent", paymentIntent);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const enrollmentDetails = {
        transactionId: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        payment_method: paymentIntent.payment_method_types[0],
        status: paymentIntent.status,
        classId: classId,
        user: user.email,
      };
      fetch("http://localhost:5000/myenrolled", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enrollmentDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          fetch(`http://localhost:5000/deletedClass/${classId}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                toast("payment succesfull");
                navigate("/dashboard/enrolled");
              }
            });
        });
    }
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <CardElement
            className="border py-3 px-2"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="text-center mt-8">
            <button
              className="btn btn-wide bg-red-700 border-0 text-white "
              type="submit"
              disabled={!stripe || !clientSecret || processing}
            >
              Pay
            </button>
          </div>
        </form>
        <p className="text-center my-5 text-red-700">{cardError}</p>
        {transactionIdStripe && (
          <p className="text-center my-5 text-red-700">
            Your Payment is reach to us! Thank You
          </p>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default CheckoutForm;
