"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items"; 

export default function Page() {

  const [items, setItems] = useState(Array.isArray(itemsData) ? itemsData : []);

  function handleItemSelect(itemName) {
    const cleanedName = itemName
      .replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "")
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <div className="container flex justify-between gap-8 p-6">
      <div className="left-panel w-1/2">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={(newItem) => setItems([...items, newItem])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="right-panel w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
