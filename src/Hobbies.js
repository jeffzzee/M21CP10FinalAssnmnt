import React from "react";

function Hobbies({hobbyList}) {
  let ULHobbies = hobbyList.map((each, index)=><li key={index}>{each}</li>)
  if (hobbyList.length!==0){return (<div className="hobbies">
    <h3>Hobbies</h3>
    <ul>
    {ULHobbies}
    </ul>
    </div>)}
}

export default Hobbies;