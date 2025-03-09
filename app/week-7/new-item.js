"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !quantity) {
      alert("Please enter both name and quantity!");
      return;
    }

    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity: parseInt(quantity, 10),
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity("");
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="w-full p-2 border rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded text-black bg-white"
        >
          {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
}
