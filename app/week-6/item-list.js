"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items";  // Import from items.js (not .json)

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  let sortedItems = [...itemsData];

  if (groupByCategory) {
    const grouped = sortedItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    for (const category in grouped) {
      grouped[category].sort((a, b) => a.name.localeCompare(b.name));
    }

    sortedItems = Object.entries(grouped).map(([category, items]) => ({
      category,
      items,
    }));
  } else {
    sortedItems.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.category.localeCompare(b.category);
      }
    });
  }

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => {
            setGroupByCategory(false);
            setSortBy("name");
          }}
          className={`px-4 py-2 mr-2 ${sortBy === "name" && !groupByCategory ? "bg-blue-300" : "bg-gray-300"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setGroupByCategory(false);
            setSortBy("category");
          }}
          className={`px-4 py-2 mr-2 ${sortBy === "category" && !groupByCategory ? "bg-blue-300" : "bg-gray-300"}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory(true)}
          className={`px-4 py-2 ${groupByCategory ? "bg-blue-300" : "bg-gray-300"}`}
        >
          Group by Category
        </button>
      </div>

      {groupByCategory ? (
        sortedItems.map(({ category, items }) => (
          <div key={category}>
            <h2 className="capitalize font-bold">{category}</h2>
            <ul>
              {items.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
