import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Auth";
import Loader from "../Shared/Loader";

const Enrolled = () => {
  const { user } = useContext(AuthContext);
  const [enrolledClass, setEnrolledClass] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/payment/history/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // fetch(
        //   `http://localhost:5000/student/enrolledClasses/${data[0].classId}?userEmail=${user.email}`
        // )
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setEnrolledClass(data);
        //     setLoading(false);
        //   });
        fetch(
          `http://localhost:5000/student/enrolledClasses?userEmail=${user.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            setEnrolledClass(data);
            console.log(data);
            setLoading(false);
          });
      });
  }, [user]);

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="font-bold text-red-700">My Enrolled Courses</h1>
      </div>
      {loading && <Loader />}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-red-700">
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((c, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={c.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{c.name}</div>
                    </div>
                  </div>
                </td>
                <td>{c.instructor}</td>
                <td className="text-red-700 font-bold">$ {c.price}</td>
                <th>
                  <button className="btn bg-green-100 border-0 text-black btn-xs hover:bg-green-100">
                    {c.paymentHistory.status}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Enrolled;
