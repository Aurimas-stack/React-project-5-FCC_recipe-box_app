import './Recipes.css';

const Recipes = (recipes) => {
    return (
        <div className='recipe-title-container'>
            {
                Object.values(recipes).map((key) =>{
                    return Object.keys(key).map((obj, i) => 
                        <div 
                        className='recipe' 
                        key={i}>{obj}</div>)
                })
            }
        </div>
    )
}
export default Recipes;