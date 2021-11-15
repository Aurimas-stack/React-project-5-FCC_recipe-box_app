import React from 'react';
import './App.css';
import Recipes from '../Recipes/Recipes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {
        'Artichoke Pasta' : {
          name: 'Artichoke Pasta'
        }, 
        'Garlic Chicken' : {
          name: 'Garlic Chicken'
        }, 
        'Easy Chocolate Pie' : {
          name: 'Easy Chocolate Pie'
        },
        'Lime Chicken Tacos' : {
          name: 'Lime Chicken Tacos'
        }, 
        'Artichoke Dip' : {
          name: 'Artichoke Dip'
        }
      }
    }
  }
  render() {
    return (
      <div className='app'>
        <h1 className='title'>Recipe Box</h1>
        <div className='recipe-titles'>
          <Recipes recipes={this.state.recipes}/>
        </div>

      </div>
    )
  }
}

export default App;
