import './Recipes.css';

const Recipes = ({recipes, recipeSelect, checkColor}) => {
    return (
        <div className='recipe-title-container'>
            {
                Object.keys(recipes).map((obj, i) => {
                    return (
                        <div
                            onClick={recipeSelect}
                            style={checkColor === i.toString() ? {backgroundColor: '#00382B', color: '#C1E0D2'} : {backgroundColor: null, color: '#00382B'}} 
                            id={i.toString()}
                            className='recipe' 
                            key={i}>{obj}
                        </div>
                        )
                })

            }
        </div>
    )
}
export default Recipes;