import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";

class App extends React.Component {

  state={
    faveBey: []
  }
  
  checkState = () => {
    console.log("After SetState:",this.state)
  }
  addToFaves = (beyObj) => {
    if(!beyObj.favorite) {
      beyObj.favorite = true
      this.setState((prevState) => ({faveBey: [...prevState.faveBey, beyObj]}), this.checkState)
    } else {
      beyObj.favorite = false
      this.setState((prevState) => (
        {faveBey: prevState.faveBey.filter(beyObj => beyObj.favorite == true)}
        ), this.checkState)
        window.alert("I got a hot sauce in my bag, swag")
    }
  }


  render(){
    return (
      <div className="container" >
          <BeyContainer addToFaves={this.addToFaves} />
          <Favorites beyArray={this.state.faveBey} addToFaves={this.addToFaves} />
      </div>
    )
  }
  
}

export default App
