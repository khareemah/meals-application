import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { closeModal, selectedMeal } = useGlobalContext();
  const {
    strMeal: name,
    strMealThumb: img,
    strSource,
    strInstructions,
  } = selectedMeal;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={img} className="img modal-img" alt={name} />
        <div className="modal-content">
          <h4>{name}</h4>
          <p>Cooking Instructions</p>
          <p>{strInstructions}</p>
          <a href={strSource} target="_blank" rel="noreferrer">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
