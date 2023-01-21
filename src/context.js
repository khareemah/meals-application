import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState({});
  const [inputValue, setInputValue] = useState("");

  const fetchMeals = async (url) => {
    try {
      const response = await fetch(url);
      const { meals } = await response.json();
      setMeals(meals);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    const mealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    fetchMeals(mealsURL);
  }, []);

  const fetchRandomMeal = (e) => {
    e.preventDefault();
    const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    setInputValue("");
    fetchMeals(randomURL);
  };

  const showMeal = (id, isInFavorites) => {
    setShowModal(true);
    let meal;
    if (isInFavorites) {
      meal = favorites.find((favorite) => favorite.idMeal === id);
    } else {
      meal = meals.find((meal) => meal.idMeal === id);
    }
    setSelectedMeal(meal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const addToFavorites = (id) => {
    const isInFavorites = favorites.find((favorite) => favorite.idMeal === id);
    if (isInFavorites) {
      return;
    }
    const favMeal = meals.find((meal) => meal.idMeal === id);
    const newFavs = [...favorites, favMeal];
    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };
  const removeFromFavorites = (id) => {
    const newFavs = favorites.filter((favorite) => favorite.idMeal !== id);
    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };
  return (
    <AppContext.Provider
      value={{
        meals,
        isLoading,
        fetchRandomMeal,
        fetchMeals,
        addToFavorites,
        favorites,
        removeFromFavorites,
        showMeal,
        selectedMeal,
        showModal,
        closeModal,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
