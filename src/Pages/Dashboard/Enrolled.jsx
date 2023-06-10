import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Auth";

const Enrolled = () => {
  const { user } = useContext(AuthContext);
  const [enrolledClass, setEnrolledClass] = useState({});
  const [example, setExample] = useState([]);

  console.log(example);

  useEffect(() => {
    fetch(`http://localhost:5000/payment/history/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setExample(data);
        console.log("payment histroy ", data[0].classId);
        fetch(
          `http://localhost:5000/student/enrolledClasses/${data[0].classId}?userEmail=${user.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            setEnrolledClass(data);
          });
      });
  }, [user]);

  return (
    <div>
      <h1>enrolled page</h1>
      <h1>{enrolledClass.name}</h1>
    </div>
  );
};

export default Enrolled;
