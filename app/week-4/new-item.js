"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Function to increment quantity (Max 20)
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Function to decrement quantity (Min 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg w-fit mx-auto mt-6">
      {/* Quantity Display (Black Text) */}
      <span className="text-lg font-bold text-black">{quantity}</span>

      {/* Square Decrement Button */}
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`w-10 h-10 flex items-center justify-center text-white font-bold transition ${
          quantity === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 shadow-md"
        }`}
      >
        -
      </button>

      {/* Square Increment Button */}
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`w-10 h-10 flex items-center justify-center text-white font-bold transition ${
          quantity === 20
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 shadow-md"
        }`}
      >
        +
      </button>
    </div>
  );
}
