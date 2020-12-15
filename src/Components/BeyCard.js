import React from "react";

function BeyCard(props) {
    
  const localClickHandler = () => {
    props.clickHandler(props.beyObj.id)
  }

  return (
    <div onClick={localClickHandler} className="card">
      <h2>{props.beyObj.name} </h2>
      <img src={props.beyObj.img} alt="Bey Slayin'"></img>
    </div>
  )
}

export default BeyCard;
