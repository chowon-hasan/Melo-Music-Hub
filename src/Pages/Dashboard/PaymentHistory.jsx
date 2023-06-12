import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payHistory, setPayHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://melo-music-hub-server-chowon-hasan.vercel.app/payment/history/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPayHistory(data);
      });
  }, []);
  return (
    <div className="w-9/12 py-24">
      <div className="text-center mb-5">
        <h1 className="font-bold text-red-700">Payment Historty</h1>
      </div>
      {payHistory.length == 0 && (
        <>
          <div className="text-center py-5">
            <p className="font-bold"> You haven't purchase any course</p>
          </div>
        </>
      )}
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black">
                <th>SL No</th>
                <th>Tranaction Id</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payHistory.map((payment, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <span className="font-bold text-red-700 ms-3">
                      {payment.transactionId}
                    </span>
                  </td>
                  <td>
                    $
                    <span className="font-bold text-red-700 ms-3">
                      {payment.amount / 100}
                    </span>
                  </td>
                  <td>
                    <span className="font-bold text-red-700 ms-3">
                      {payment.currency}
                    </span>
                  </td>
                  <td>
                    <span className="font-bold text-red-700 ms-3">
                      {payment.payment_method}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-xs bg-green-100 border-0 text-black hover:bg-green-100">
                      {payment.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
