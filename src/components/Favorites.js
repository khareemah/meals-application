import React from "react";
import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, removeFromFavorites, showMeal } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((favorite) => {
            const { idMeal, strMealThumb: image } = favorite;
            return (
              <div key={idMeal} className="favorite-item">
                <img
                  src={image}
                  className="favorites-img img"
                  onClick={() => showMeal(idMeal, true)}
                  alt=""
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
