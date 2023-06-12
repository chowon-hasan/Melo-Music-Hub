// uodateStatus for addedclasss by student

export const updateStatus = async (id, status) => {
  const response = await fetch(
    `https://melo-music-hub-server-chowon-hasan.vercel.app/addclasses/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  const data = await response.json();
  return data;
};
