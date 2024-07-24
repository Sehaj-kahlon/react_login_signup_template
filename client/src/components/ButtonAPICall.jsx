import React, { useState } from "react";
import { Button } from "antd";

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
      <div>
        <Button onClick={fun}>Button</Button>
        {error ? <p>Error: {error}</p> : <div>{data}</div> }
      </div>
      <div>open Network tab in inspect element to see the api calls</div>
    </div>
  );
}

export default ButtonAPICall;
