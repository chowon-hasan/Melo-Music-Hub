import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Auth";

const useSelectClasses = (id) => {
  const { user, loading } = useContext(AuthContext);
  const [myclasses, setMyClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/myclasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
        setIsLoading(false);
      });
  }, [user]);

  return { myclasses, isLoading };
};

export default useSelectClasses;
