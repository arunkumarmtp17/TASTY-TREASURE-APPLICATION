import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './address.css';

const AddRecipe = ({ recipes, setRecipes }) => {
  const [newRecipe, setNewRecipe] = useState({
    recipeName: '',
    timeToCook: '',
    materialsNeeded: [],
    imageUrl: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({
      ...newRecipe,
      [name]: value
    });
  };

  const handleMaterialsChange = (e, index) => {
    const updatedMaterials = [...newRecipe.materialsNeeded];
    updatedMaterials[index] = e.target.value;
    setNewRecipe({
      ...newRecipe,
      materialsNeeded: updatedMaterials
    });
  };

  const addMaterial = () => {
    setNewRecipe({
      ...newRecipe,
      materialsNeeded: [...newRecipe.materialsNeeded, '']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, newRecipe]);
    navigate('/');
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="recipeName"
            value={newRecipe.recipeName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time to Cook:
          <input
            type="text"
            name="timeToCook"
            value={newRecipe.timeToCook}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={newRecipe.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Materials Needed:
          {newRecipe.materialsNeeded.map((material, index) => (
            <input
              key={index}
              type="text"
              value={material}
              onChange={(e) => handleMaterialsChange(e, index)}
              required
            />
          ))}
          <button type="button" onClick={addMaterial}>Add Material</button>
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
