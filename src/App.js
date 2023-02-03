import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import NewRecipes from './NewRecipes';

function App() {

const MY_ID = "657d446c";
const MY_KEY = "0110134246780b6e18d3358604f72349";

const [search, setSearch] = useState('');
const [recipes, setRecipes] = useState([]);
const [searchWord, setSearchWord] = useState('kale');

useEffect( () => {
  const recipes = async () =>{
const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${searchWord}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await responce.json();
setRecipes(data.hits);
  }
  recipes()
}, [searchWord])

const recipeSearch = (e) => {
setSearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setSearchWord(search);
}

  return (
    <div className="App">
<div className="container">

<video autoPlay muted loop>
<source src={video} type="video/mp4" />
</video>

<h1>Recipe`s finder</h1>
</div>

<div className="container">
  <form onSubmit={finalSearch}>
   <input className='search' placeholder='Search...' onChange={recipeSearch} value={search}>
   </input>
  </form>
  </div>

  <div className="container">
    <h2>write the ingredient and press Enter! </h2>
  </div>

<div>
{recipes.map((element, index) => (
  <NewRecipes key={index}
  label={element.recipe.label} 
  image={element.recipe.image} 
  mealType={element.recipe.mealType}
  ingredients={element.recipe.ingredientLines}
  totalWeight={element.recipe.totalWeight}
  />
))}
</div>

    </div>
  );
}

export default App;
