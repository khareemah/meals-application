import React from "react";
import { useGlobalContext } from "../context";
import Meal from "./Meal";

const Meals = () => {
  const { meals, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (!meals) {
    return (
      <section className="section">
        <h4>No result matched your search</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        return <Meal {...meal} key={meal.idMeal} />;
      })}
    </section>
  );
};

export default Meals;
