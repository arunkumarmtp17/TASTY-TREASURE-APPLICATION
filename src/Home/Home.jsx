import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { MdFavorite } from "react-icons/md";
const Home = ({ cart, setCart, recipes }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCart = (recipe) => {
    const recipeExists = cart.some(item => item.recipeName === recipe.recipeName);
    if (!recipeExists) {
      setCart([...cart, recipe]);
    } else {
      const updatedCart = cart.filter(item => item.recipeName !== recipe.recipeName);
      setCart(updatedCart);
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.recipeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='homecss'>
      <div className='filter'>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="recipe-container">
        {filteredRecipes.map((recipe, index) => (
          <div className='recipecard' key={index}>
            <Link to={`/recipe/${index}`}>
              <div>
                <img src={recipe.imageUrl} alt={recipe.recipeName} width={200} height={100} className="recipe-image" />
                <h3 className="recipe-title">Recipe Name: {recipe.recipeName}</h3>
                <h4>Time: {recipe.timeToCook}</h4>
              </div>
            </Link>
            {
              cart.some(item => item.recipeName === recipe.recipeName) ? (
                <button onClick={() => handleCart(recipe)}>Remove from <MdFavorite /> </button>
              ) : (
                <button onClick={() => handleCart(recipe)}>Add to <MdFavorite /> </button>
              )
            }
          </div>
        ))}
        <div className='recipecard'>
          <Link to="/add-recipe">
            Add own recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
