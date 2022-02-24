import { useState } from 'react';

export function GenerateRecipeButton() {
  const ingredients = [
    'potato',
    'apple',
    'chocolate',
    'cheese',
    'carrot',
    'raspberry',
    'ham',
  ];
  const recipes = ['pie', 'curry', 'trifle', 'pasta', 'bagel'];

  const [suggestedRecipe, setRecipe] = useState('pasta');

  const [suggestedMethod, setMethod] = useState('method 1');

  return (
    <div>
      <button id="generate_recipe_button" onClick={() => setRecipe('curry')}>
        Generate New Recipe
      </button>
      <h2>Your recipe: A ham and cheese {suggestedRecipe}</h2>
      {/* <h2>
        Your recipe: A {<RandomElementSelector ingredients={ingredients} />} and{' '}
        <br />
        {<RandomElementSelector ingredients={ingredients} />} <br />
        {<RandomElementSelector ingredients={recipes} />}
      </h2> */}
      <h2>Method</h2>
      <CreateMethod suggestedRecipe={suggestedRecipe} />
    </div>
  );
}

function RandomElementSelector({ ingredients }) {
  const length = ingredients.length;
  return ingredients[Math.floor(Math.random() * length + 1)];
}

function CreateMethod(suggestedRecipe) {
  if ({ suggestedRecipe } == 'curry') {
    return (
      <ol>
        <li>method1</li>
      </ol>
    );
  } else if ({ suggestedRecipe } == 'pasta') {
    return (
      <ol>
        <li>method2</li>
      </ol>
    );
  }
  return (
    <ol>
      <li>default method</li>
    </ol>
  );
}
