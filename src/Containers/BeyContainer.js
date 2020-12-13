import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api.js'

class BeyContainer extends React.Component {
  
  renderCards = () => {
    return (
      beyArray.map((beyObj) => <BeyCard key={beyObj.id} beyObj={beyObj} addToFaves={this.props.addToFaves} />)
    )
  }  

  render() {

    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderCards()}
      </div>
    );
  }
}

export default BeyContainer;
