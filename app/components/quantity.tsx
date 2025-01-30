"use client";
import React, { useState } from "react";

const quantity = (block: any) => {
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    setAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0));
  };
  return (
    <div className={`  ${block} items-center gap-4`}>
      <h1>Quantity</h1>
      <div className="flex ">
        <button
          className="cursor-pointer hover:bg-red-600 px-7 py-2 rounded-md"
          onClick={decreaseAmount}
        >
          -
        </button>
        <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
          {amount}
        </button>
        <button
          className="cursor-pointer hover:bg-green-600 px-7 py-2 rounded-md"
          onClick={increaseAmount}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default quantity;
