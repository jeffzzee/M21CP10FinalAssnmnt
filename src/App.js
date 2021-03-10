import React from "react";
import Hobbies from "./Hobbies";
import Bio from "./Bio"
import Schedule from "./Schedule"

function App() {
  const name = "Kitty Kat";
  const birthday = "January 1";
  const imageSrc =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
  const hobbies = ["watching birds", "hiding in a box", "napping"];
  const dailyActivities = [
    { time: "8:00 am", description: "wake up" },
    { time: "8:30 am", description: "breakfast" },
    { time: "9:00 am", description: "morning nap" },
    { time: "12:00 pm", description: "lunch" },
    { time: "1:00 pm", description: "afternoon nap" },
    { time: "6:00 pm", description: "dinner" },
    { time: "7:00 pm", description: "play" },
    { time: "10:00 pm", description: "bedtime" },
  ];
  return (<div>
    <Bio name={name} bD={birthday} image={imageSrc}/>
    <Hobbies hobbyList={hobbies}/>
    <Schedule dayList={dailyActivities}/>
  </div>)
}

export default App;