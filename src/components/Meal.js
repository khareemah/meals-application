import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { useGlobalContext } from "../context";

const Meal = ({ idMeal: id, strMeal: name, strMealThumb: image }) => {
  const { addToFavorites, showMeal } = useGlobalContext();
  return (
    <article key={id} className="single-meal" onClick={() => showMeal(id)}>
      <img src={image} className="img" alt={name} />
      <footer>
        <h5>{name}</h5>
        <button className="like-btn" onClick={() => addToFavorites(id)}>
          <BsHandThumbsUp />
        </button>
      </footer>
    </article>
  );
};

export default Meal;
