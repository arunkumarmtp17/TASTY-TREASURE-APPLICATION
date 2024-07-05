import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import RecipeDetails from './Recipedetail/RecipeDetail';
import AddRecipe from './AddRecipe/AddRecipe'; // Import AddRecipe component
import { FaHome } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import './App.css';
import { recipesdetail } from './Home/data';

const App = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState(() => {
    // Load initial recipes from local storage, or fall back to the default recipes
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : recipesdetail;
  });

  useEffect(() => {
    // Save recipes to local storage whenever the recipes state changes
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);
  
  return (
    <Router>
      <div>
        <nav>
          <div className='nav'>
            <ul>
              <li>
                <Link to="/"><FaHome size={40} /></Link>
              </li>
              <li>
                <h2 >TASTY TREASURE</h2>
              </li>
              <li>
                <Link to="/cart"><MdFavorite size={40} /></Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} recipes={recipes} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/recipe/:index" element={<RecipeDetails  recipes={recipes}/>} />
          <Route path="/add-recipe" element={<AddRecipe recipes={recipes} setRecipes={setRecipes} />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
