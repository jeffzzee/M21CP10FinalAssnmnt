import React from "react";

function Bio(props) {
  const {name, bD, image} = props
  return (<div>
    <img src={image} alt="user picture"/>
    <h1>{name}</h1>
    <h2>Birthday: {bD}</h2>
  </div>)
}

export default Bio;