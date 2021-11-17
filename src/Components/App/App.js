import React from 'react';
import './App.css';
import Recipes from '../Recipes/Recipes';
import Recipe from '../Recipe/Recipe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       recipes: JSON.parse(localStorage.getItem('lastState')) || {
        'Artichoke Pasta' : {
          name: 'Artichoke Pasta',
          ingredients: [
            '2 tablespoons butter', '2 cloves garlic, minced', '1 cup heavy cream', '3/4 teaspoon salt',
            '1 teaspoon fresh-ground black pepper', '2 1/2 cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters',
            '3/4 pound fusilli', '1/2 cup grated Parmesan cheese', '2 tablespoons chopped chives, scallion tops, or parsley'
          ],
          directions: [
            'In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.',
            'In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives.'
        ]
        }, 
        'Garlic Chicken' : {
          name: 'Garlic Chicken',
          ingredients: [
            '3 tablespoons butter', '1 teaspoon seasoning salt', '1 teaspoon onion powder', '4 skinless, boneless chicken breast halves',
            '2 teaspoons garlic powder'
          ],
          directions: [
            'Melt butter in a large skillet over medium high heat.', 'Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.',
            'Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.'
          ]
        }, 
        'Easy Chocolate Pie' : {
          name: 'Easy Chocolate Pie', 
          ingredients: [
            '1 (12 ounce) can evaporated milk', '1 (5.9 ounce) package chocolate instant pudding mix', '1/2 cup miniature semi-sweet chocolate chips (optional)',
            '1 (9 inch) graham cracker pie crust', 'Another can of whipped cream for garnish (optional)'
          ],
          directions: [
            'Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended and mixture just begins to thicken. Stir in half of the chocolate chips.',
            'Add contents of whipped cream can; stir gently but quickly until well blended. Pour into crust; cover.',
            'Refrigerate 6 hours, or until set. Cut into 8 slices to serve. Garnish with additional whipped cream and remaining chocolate chips, if desired.'
          ]
        },
        'Lime Chicken Tacos' : {
          name: 'Lime Chicken Tacos',
          ingredients: [
            '1 1/2 pounds skinless, boneless chicken breast meat - cubed', '1/8 cup red wine vinegar', '1 teaspoon white sugar',
            '1/2 teaspoon salt', '1/2 teaspoon ground black pepper', '2 green onions, chopped', '2 cloves garlic, minced',
            '1 teaspoon dried oregano', '10 (6 inch) corn tortillas', '1 tomato, diced', '1/4 cup shredded lettuce', 
            '1/4 cup shredded Monterey Jack cheese', '1/4 cup salsa'
          ],
          directions: [
            'Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes.',
            'Heat an iron skillet over medium heat. Place a tortilla in the pan, warm, and turn over to heat the other side. Repeat with remaining tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa.'
          ]
        }, 
        'Artichoke Dip' : {
          name: 'Artichoke Dip',
          ingredients: [
            '1 8oz package soft cream cheese', '4oz mayonnaise', '4oz sour cream', '1/4 Cup Fresh Grated Parmesan Cheese',
            '1/4 Cup Fresh Grated Romano Cheese', '2 eggs', '3/4 Cup dairy sour cream', '1 16oz can artichoke hearts',
            '1/4 Cup fresh chopped chives', '1 tbs fresh minced garlic'
          ],
          directions: [
            'Soften the cream cheese before mixing.', 'Rinse well, then dice the artichokes into small ½” size pieces.',
            'Into a mixing bowl place the softened cream cheese. Mix in the mayonnaise, sour cream, the Parmesan and Romano cheese, artichokes and garlic.',
            'When the mixture is fairly well blended, spoon into a 9” round glass pie dish.', 'Set Oven to Bake at 350 degrees.',
            'Place un-covered dish into oven for 20 – 25 minutes until the edges appear slightly golden and mixture is bubbling at the edge.',
            'Remove and sprinkle chopped chives on top and let cool about 5 minutes before serving.'
          ]
        }
      },
      elToChange: '',
      recipeTitle: '',
      pressIcon: false,
      pressEdit: false,
      recipe_name: '',
      rec_ingredients: '',
      rec_directions: '',
    }
    this.handleColorSelect = this.handleColorSelect.bind(this);
    this.handleEditFormOpen  = this.handleEditFormOpen.bind(this);
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
    this.handleMakingRecipe = this.handleMakingRecipe.bind(this);
  }
  handleColorSelect = (event) => {
    this.setState({
      elToChange: event.target.id,
      recipeTitle: event.target.textContent
    })
    event.preventDefault();
  }
  handleEditFormOpen = (event) => {
    this.setState({
      pressEdit: true
    })
    event.preventDefault();
  }
  handleFormOpen = (event) => {
    this.setState({
      pressIcon:true
    })
    event.preventDefault();
  }
  handleFormClose = (event) => {
    this.setState({
      pressIcon:false,
      pressEdit:false
    })
    event.preventDefault();
  }
  handleNewRecipe = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    })
    event.preventDefault();
  }
  handleMakingRecipe = (event) => {
    let newIngredients = this.state.rec_ingredients;
    let newDirections = this.state.rec_directions;
    let newObj = {
      [this.state.recipe_name]: {
        name: this.state.recipe_name,
        ingredients: newIngredients.split("/"),
        directions: newDirections.split("/")
      }
    }
    this.setState(prevState => ({
      recipes: {...prevState.recipes, ...newObj}
    }))
    const recipe = newObj;
    const lastState = this.state.recipes;
    localStorage.setItem('recipe', JSON.stringify(recipe));
    localStorage.setItem('lastState', JSON.stringify(lastState));
    event.preventDefault();
  }
  componentDidMount() {
    const recipe = JSON.parse(localStorage.getItem('recipe'));
      this.setState(prevState => ({
        recipes: {...prevState.recipes, ...recipe}
      }))
  }
  render() {
    return (
      <div className='app'>
        <h1 className='title'>Recipe Box</h1>
        <div className='recipe-titles'>
          <Recipes recipes={this.state.recipes} checkColor={this.state.elToChange} recipeSelect={this.handleColorSelect}/>
        </div>
        {
          this.state.recipeTitle !== '' ?
          <div className='recipe-info'>
            <div className='recipe-info-header'>
              <h2 className='recipe-title'>{this.state.recipeTitle}</h2>
              <i title='Delete the recipe' className="far fa-trash-alt fa-2x"></i>
              <i title='Edit the recipe' className="far fa-edit fa-2x" onClick={this.handleEditFormOpen}></i>
            </div>
            <Recipe recipe={this.state.recipes} selectRecipe={this.state.recipeTitle}/>
            <i title='Add new recipe' className="far fa-plus-square fa-2x" onClick={this.handleFormOpen}></i>
          </div>
          :
          null
        }
        {
          this.state.pressEdit === false ? null :
            <div className='add-recipe-form'>
              <i className="far fa-times-circle fa-2x" onClick={this.handleFormClose} title='Close window'></i>
              <div className='name-cont'>
                <h3>Edit recipe Name</h3>
                <input name='recipe_name'type='text' value={this.state.recipe_name} placeholder='Enter Recipe Name' onChange={this.handleNewRecipe}/>
              </div>
              <div className='name-cont'>
                <h3>Edit ingredients</h3>
                <textarea name='rec_ingredients'type='text' value={this.state.rec_ingredients} placeholder='Seperate each ingredient with "/" : 2 Eggs / Milk' onChange={this.handleNewRecipe}/>
              </div>
              <div className='name-cont'>
                <h3>Edit directions</h3>
                <textarea name='rec_directions' type='text' value={this.state.rec_directions} placeholder='Seperate each direction with "/"' onChange={this.handleNewRecipe}/>
              </div>
              <div className='button-cont'>
                <button title='Add Recipe' onClick={(event) => {this.handleMakingRecipe(event); this.handleFormClose(event);}}>Save</button>
                <button title='Close window'onClick={this.handleFormClose}>Close</button>
              </div>
            </div>
        }
        {
          this.state.pressIcon === false ? null :
            <div className='add-recipe-form'>
              <i className="far fa-times-circle fa-2x" onClick={this.handleFormClose} title='Close window'></i>
              <div className='name-cont'>
                <h3>Recipe Name</h3>
                <input name='recipe_name'type='text' value={this.state.recipe_name} placeholder='Enter Recipe Name' onChange={this.handleNewRecipe}/>
              </div>
              <div className='name-cont'>
                <h3>Ingredients</h3>
                <textarea name='rec_ingredients'type='text' value={this.state.rec_ingredients} placeholder='Seperate each ingredient with "/" : 2 Eggs / Milk' onChange={this.handleNewRecipe}/>
              </div>
              <div className='name-cont'>
                <h3>Directions</h3>
                <textarea name='rec_directions' type='text' value={this.state.rec_directions} placeholder='Seperate each direction with "/"' onChange={this.handleNewRecipe}/>
              </div>
                <div className='button-cont'>
                  <button title='Add Recipe' onClick={(event) => {this.handleMakingRecipe(event); this.handleFormClose(event);}}>Add</button>
                  <button title='Close window'onClick={this.handleFormClose}>Close</button>
                </div>
            </div>
        }
      </div>
    )
  }
}

export default App;
