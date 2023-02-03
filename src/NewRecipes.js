function NewRecipes ({label, image, ingredients, mealType, totalWeight, healthLabels}){
    return(
        <div>

            <div className="container">
            <h3>{label}</h3>
            </div>

            <div className="container">
            <img src={image} alt="food"/>
            </div>

            <div className="container">
              <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="container">
            <p>Meal type: {mealType}</p>
            </div>

            <div className="container">
            <p className="par">Total weight: {totalWeight.toFixed()} gramm</p>
            </div>

        </div>

    )
}

export default NewRecipes;

