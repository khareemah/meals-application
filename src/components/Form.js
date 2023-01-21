import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { fetchRandomMeal, setInputValue, inputValue, fetchMeals } =
    useGlobalContext();

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const mealsURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetchMeals(mealsURL);
  };

  return (
    <header className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" className="btn">
          search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={fetchRandomMeal}
        >
          suprise me!
        </button>
      </form>
    </header>
  );
};

export default Form;
