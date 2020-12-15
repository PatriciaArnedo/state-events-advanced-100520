import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"
import Favorites from "./Containers/Favorites"
import api from './api'

class App extends React.Component {

  state={
    beyArray: api
  }
  
  addToFaves = (beyObjId) => {
    const newBeyArray = [...this.state.beyArray]
    let foundObj = newBeyArray.find(beyEl => beyEl.id === beyObjId)

    foundObj.favorite = true

    this.setState({beyArray: newBeyArray})
  }

  removeFromFaves = (beyObjId) => {
    const newBeyArray = [...this.state.beyArray]
    let foundObj = newBeyArray.find(beyEl => beyEl.id === beyObjId)

    foundObj.favorite = false

    this.setState({beyArray: newBeyArray})
    window.alert("I got hot sauce in my bag, swag.")
  }

  allFavoriteBeys = () => {
    return this.state.beyArray.filter(beyEl => beyEl.favorite)
  }



  render(){
    return (
      <div className="container" >
          <BeyContainer beyArray={this.state.beyArray} clickHandler={this.addToFaves} />
          <Favorites beyArray={this.allFavoriteBeys()} clickHandler={this.removeFromFaves} />
      </div>
    )
  }
  
}

export default App



// addToFaves = (beyObj) => {
//   if(!beyObj.favorite) {
//     beyObj.favorite = true
//     this.setState((prevState) => (
//       {faveBey: [...prevState.faveBey, beyObj]}
//       ), this.checkState)
//   } else {
//     beyObj.favorite = false
//     this.setState((prevState) => (
//       {faveBey: prevState.faveBey.filter(beyObj => beyObj.favorite === true)}
//       ), this.checkState)
//       window.alert("I got a hot sauce in my bag, swag")
//   }
// }