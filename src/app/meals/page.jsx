"use client";

import { useEffect, useState } from "react";

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);

        // If search empty → load default meals
        const query = search.trim() ? search : "a";

        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );

        const data = await res.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.log(error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, [search]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search Box */}
      <input
        type="text"
        className="w-full p-3 border rounded-lg mb-6"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-bold">{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}