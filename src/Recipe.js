import React from 'react';
import style from './recipe.module.css';    

const Recipe = ({title, calories, image, ingredients}) => {
    return(
   <div className={style.Recipe}>
       <h1>{title}</h1>
       <li>
           {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
           ))}
       </li>
       <p>{calories}</p>
       <img className={style.image} src={image} alt=''/>

   </div>
    );

};

export default Recipe;