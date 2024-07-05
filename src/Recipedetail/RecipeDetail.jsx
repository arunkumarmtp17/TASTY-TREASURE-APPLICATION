import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { recipesdetail } from '../Home/data'; // Ensure this path is correct
import './recipe.css';
import { FaStepBackward } from "react-icons/fa";

const RecipeDetails = ({recipes}) => {
  const { index } = useParams();
  const recipe = recipes[index];

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="recipe-details-container">
      <Link to="/" className="back-home-button">
        <FaStepBackward /> Back
      </Link>
      <h2 className="recipe-title">{recipe.recipeName}</h2>
      <div className="recipe-image-container">
        <img src={recipe.imageUrl} alt={recipe.recipeName} className="recipe-image1" />
      </div>
      <div className="recipe-info1">
        <p className="recipe-time">Time to Cook: {recipe.timeToCook}</p>
        <h3>Materials Needed:</h3>
        <ul className="materials-list">
          {recipe.materialsNeeded.map((material, idx) => (
            <li key={idx}> 🥚{material}</li>
          ))}
        </ul>
        {recipe.notes && (
          <div className="recipe-notes">
            <h3>Notes:</h3>
            {recipe.notes.split('\n').map((note, index) => (
              <p key={index}><span role="img" aria-label="egg">🥚</span> {note}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
