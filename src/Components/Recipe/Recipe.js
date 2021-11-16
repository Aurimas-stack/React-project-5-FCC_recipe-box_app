import './Recipe.css';

const Recipe = ({recipe, selectRecipe}) => {
    const recipeIngredients = Object.values(recipe).filter((e) => e.name === selectRecipe).map(e => e.ingredients);
    const recipeDirections = Object.values(recipe).filter((e) => e.name === selectRecipe).map(e => e.directions);
    return (
        <div className='info-container'>
            <div className='ingredients'>
                <h3 className='ingredients-title'>Ingredients :</h3>
                <ul className='ingredient-list'>
                {
                    recipeIngredients.map((ingredient) => {
                        return ingredient.map((repIn, i) => {
                            return (
                                <li key={i}>
                                {repIn}
                                </li>
                            )
                        })
                    })
                }
                </ul>
            </div>
            <div className='ingredients'>
                <h3 className='ingredients-title'>Directions :</h3>
                <ol className='direction-list'>
                {
                    recipeDirections.map((direction) => {
                        return direction.map((repDir, i) => {
                            return (
                                <li key={i}>
                                {repDir}
                                </li>
                            )
                        })
                    })
                }
                </ol>
            </div>
        </div>
    )
}
export default Recipe;