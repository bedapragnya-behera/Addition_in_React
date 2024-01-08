import { useState } from "react";
import React from "react";
import './addition.css';
const Addition = () => {

   const [number1, setNumber1] = useState ();
   const [number2, setNumber2] = useState ();
   const [total, setTotal] = useState (0);

   function addNumbers() {
    setTotal(number1 + number2);
  }

    return (
        <div>
            <h2>Let's Add Numbers</h2>
            <input
                placeholder="First Number"
                type="number"
                value={number1}
                onChange={(e) => setNumber1(Number(e.target.value))}
            />
            <input
                placeholder="Second Number"
                type="number"
                value={number2}
                onChange={(e) => setNumber2(Number(e.target.value))}
            />

            <button onClick={addNumbers}>Result</button>
            <p>Total: {total || ""}</p>
        </div>
    )
}

export default Addition

