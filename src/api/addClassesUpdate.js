// uodateStatus for addedclasss by student

export const updateStatus = async (id, status) => {
  const response = await fetch(`http://localhost:5000/addclasses/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  const data = await response.json();
  return data;
};
