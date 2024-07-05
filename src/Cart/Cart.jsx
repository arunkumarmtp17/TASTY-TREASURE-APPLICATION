import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = ({ cart, setCart }) => {
  const handleCart = (index) => {
    const updatedCart = cart.filter((item, idx) => idx !== index);
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  return (
    <div className='cart2'>
      {cart.map((recipe, index) => (
        <div className='recipecard' key={index}>
          <Link to={`/recipe/${index}`}>
            <div>
              <img src={recipe.imageUrl} alt={recipe.recipeName} width={200} height={150} className="recipe-image" />
              <h3 className="recipe-title">Recipe Name: {recipe.recipeName}</h3>
              <h4>Time: {recipe.timeToCook}</h4>
            </div>
          </Link>
          <button onClick={() => handleCart(index)}>Delete from Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
