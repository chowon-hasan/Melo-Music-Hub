import React, { useEffect, useState } from "react";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  });
  return (
    <div>
      <h1>{instructor.length}</h1>
    </div>
  );
};

export default Instructor;
