import React from "react";

function BeyCard(props) {
  
  
  const favesClickHandler = () => {
    props.addToFaves(props.beyObj)
  }

  return (
    <div onClick={favesClickHandler} className="card">
      <h2>{props.beyObj.name} </h2>
      <img src={props.beyObj.img} alt="Bey Slayin'"></img>
    </div>
  )
}

export default BeyCard;
