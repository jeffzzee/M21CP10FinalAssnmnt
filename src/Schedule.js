import React from "react";

function Schedule({dayList}) {
  
  let scheduleTable=dayList.map(({time,description},index)=>(
  
  (<tr>
    <td key={index}>{time}</td>
    <td key={index}>{description}</td>
  </tr>)
  ))
   return ( dayList.length>0 && (<table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Activity</th>
      </tr>
      <tr>
        {scheduleTable}
      </tr>
    </thead>
  </table>))
}

export default Schedule;