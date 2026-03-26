import MealSearchinput from "./components/MealSearchinput";

export const metadata = {
  title: "All Meals",
};

async function getMeals(query) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      {
        cache: "no-store", // always fresh data
      }
    );

    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function MealsPage({ searchParams }) {
  const query = searchParams?.search || "a";

  const meals = await getMeals(query);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <MealSearchinput />

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