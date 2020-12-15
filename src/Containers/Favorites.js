import React, { Component } from "react"
import BeyCard from '../Components/BeyCard'



function Favorites(props) {
  
  const renderCards = () => {
    return (
      props.beyArray.map((beyObj) => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={props.clickHandler} />)
    )
  }
  

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {renderCards()}
    </div>
  )
  
}

export default Favorites