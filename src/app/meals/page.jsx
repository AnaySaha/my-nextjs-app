"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import MealSearchinput from "./components/MealSearchinput";

export default function MealsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);

        const query = searchQuery || "a";

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
  }, [searchQuery]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <MealSearchinput />

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-4 gap-6 mt-6">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="border p-4 rounded">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover"
            />
            <h2 className="font-bold">{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}