import React, { useEffect, useState } from "react";

function useEffectCall() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = "http://localhost:5000";
  useEffect(() => {
    fetch(`${BASE_URL}/useEffectCall`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((responseData) => {
        setData(responseData.data);
        console.log(responseData);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      {error ? <p>Error: {error}</p> : <div>{data ? <div>{data}</div> : <p>Loading...</p>}</div>}
    </div>
  );
}

export default useEffectCall;
