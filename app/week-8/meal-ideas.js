"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    async function fetchMealIdeas() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    }

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Meal Ideas for {ingredient || "?"}
      </h2>
      <ul className="meal-list">
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="60" />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
