import React, { Component } from 'react'
import ProNutrition from './Components/ProNutrition'
import FoodData from './resources/FoodData'

export default class App extends Component {
  constructor(){
    super()
    this.state={newArray:FoodData}
  }
  render() {
    let {newArray} = this.state
    let handleChange = (event) => {
      let value = event.target.value;

      let filteredFood = FoodData.filter((el)=>el.name.includes(value))
      this.setState({newArray:filteredFood})
      console.log(newArray)
    }

    return (
      <div>
        <div>
          <input type="text" placeholder='search food' onChange={handleChange} />
        </div>
        {
          newArray.map((el,i)=>(
            <ProNutrition key={i} {...el}/>
          )

          )
        }
      </div>
    )
  }
}