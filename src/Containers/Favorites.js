import React, { Component } from "react"
import BeyCard from '../Components/BeyCard'



export default class Favorites extends Component {
  
  renderFaveCards = () => {
    console.log("In FAVORITES:", this.props.beyArray)
    return (
      this.props.beyArray.map((beyObj) => <BeyCard key={beyObj.id} beyObj={beyObj} addToFaves={this.props.addToFaves} />)
    )
  }
  
  render() {
    
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFaveCards()}
      </div>
    );
  }
}
