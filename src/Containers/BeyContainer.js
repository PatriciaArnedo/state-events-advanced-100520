import React from "react";
import BeyCard from '../Components/BeyCard'

function BeyContainer(props) {
  
  const renderCards = () => {
    return (
      props.beyArray.map((beyObj) => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={props.clickHandler} />)
    )
  }  


  return (
    <div className="index">
      <h1>Index</h1>
      {renderCards()}
    </div>
  )

}

export default BeyContainer;
