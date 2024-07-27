import React, { useState } from "react";
import { Button, Input } from "antd";
function POSTAPICall() {
  const BASE_URL = "http://localhost:5000";
  const [result, setResult] = useState(null);
  const [Error, setError] = useState(null);
  const displaydata = async () => {
    try {
      const response = await fetch(`${BASE_URL}/postCall`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numberA: inputs.numberA, numberB: inputs.numberB }),
      });
      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
      } else {
        setError("Network call Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };
  const [inputs, setInputs] = useState({ numberA: null, numberB: null });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <div>
      <Input
        placeholder="Enter number A"
        name="numberA"
        value={inputs.numberA}
        onChange={handleInputChange}
      ></Input>
      <Input
        placeholder="Enter number B"
        name="numberB"
        value={inputs.numberB}
        onChange={handleInputChange}
      ></Input>
      <Button onClick={displaydata}>Submit</Button>
      {result && <div>Result: {result}</div>}
      {Error && <div>Error: {Error}</div>}
    </div>
  );
}

export default POSTAPICall;
