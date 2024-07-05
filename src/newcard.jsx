import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Newcard = ({ addRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [timeToCook, setTimeToCook] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      recipeName,
      timeToCook,
      materialsNeeded: materialsNeeded.split(',').map(item => item.trim()),
      imageUrl,
    };

    addRecipe(newRecipe);
    navigate('/');
  };

  return (
    <div className="new-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input 
            type="text" 
            value={recipeName} 
            onChange={(e) => setRecipeName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Time to Cook:
          <input 
            type="text" 
            value={timeToCook} 
            onChange={(e) => setTimeToCook(e.target.value)} 
            required 
          />
        </label>
        <label>
          Materials Needed (comma-separated):
          <input 
            type="text" 
            value={materialsNeeded} 
            onChange={(e) => setMaterialsNeeded(e.target.value)} 
            required 
          />
        </label>
        <label>
          Image URL:
          <input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default Newcard;
