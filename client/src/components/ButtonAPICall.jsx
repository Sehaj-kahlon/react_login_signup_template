import React, { useState } from "react";

function ButtonAPICall() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = "http://localhost:5000";
  const fun = () => {
    fetch(`${BASE_URL}/buttonCall`)
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
  };

  return (
    <div>
      <button onClick={fun}>data</button>
      {data}
    </div>
  );
}

export default ButtonAPICall;
