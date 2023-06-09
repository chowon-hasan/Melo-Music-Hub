import React, { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [payHistory, setPayHistory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/payment/history")
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
                    <button className="btn btn-xs bg-green-100 border-0 text-black">
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
