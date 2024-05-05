import React from "react";
import "./index.css";
import 'animate.css';

//from here we got all the emojis
import emojis from "./emoji";

 function App() {
  //const emojis = [ "🎉", "🍰", "🍫", "🌹", "📚", "🎨", "💎", "🎈", "🧸", "🎮", "🎵", "🍩", "🍬", "🧁", "🥂", "📷", "💻", "🎸", "🔑"];




  // this function will return a random emoji
const getRandomemoji = () =>{
  return emojis[Math.floor(Math.random() * emojis.length)]
}

//this will set initial emoji and name
  const [gift, setGift] = React.useState({
    emoji: "🎁",
    name: "Gift",
  
  })


 //this function will get the random emoji
  const getGift = () => {
    console.log(getRandomemoji());
    setGift(getRandomemoji())
  }


//this function will set the default emoji after we got gift
const setDefault = () => {
  setGift({
    emoji: "🎁",
    name: "Gift",
  })
}


  return (
    <div className="container">
    
    
        <div className = "gift" 
        onClick={gift.emoji == "🎁" &&  getGift}   
        >

          <div 
          className={gift.emoji == "🎁" ? "animate__animated animate__tada giftemoji" : "animate__animated animate__bounceIn giftemoji"}
        
          >
              {gift.emoji}
          </div>
         <p>
         you got {gift.name}
          </p> 
        </div>
        {
        gift.emoji !== "🎁" && <button className="giftbtn" onClick={setDefault}>I don't want {gift.name}</button>
        
        }

    </div>
  );
}

export default App;