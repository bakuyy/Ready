import React from 'react'
import './read.css'

let myArray = ["It is hard to tell who is an android or a real person some days. Most evenings it isn’t until I arrive home that I realised no one I spoke had blinked or breathed. I am always relieved to see my spouse and children carrying out these comforting reminders of humanity.",
"I never know what to do when someone is singing me happy birthday. It’s why I never tell anyone when my birthday is. It’s also why I make sure I’m home alone all day. So I refuse to open my eyes as I hear someone singing above my bed, leaning in closer and closer.",
"One upon a time, there was a little girl with beautiful golden hair and her name was Goldilocks. One day, she decided to go for a walk in the woods, where she found a sweet little cottage, where there was nobody home. Willfully and destructively, she went through the house like a whirlwind, causing damage and stealing food wherever she went. Understandably, when the three bears came home, they were furious at the mess she’d made and chased her outside. Goldilocks never stole food again. ",
"An alien falls to our planet. It makes friends with a boy and his family. The government finds out about the alien and tries to take him away. The boy and his family help the alien get back to his planet."]


const Read = () => {
  return (
    <div className = "read">
      <h1>PRACTICE READING</h1>
      <div className = "instructions">
        <p> There will be a randomly generated text for your below. Read it to the best of your abilities, and ask the bot for help when you need it!</p>
      <div className = "text">
        <p>{myArray[Math.floor(Math.random()*myArray.length)]}</p>
      </div>
      </div>
    </div>
  )
}

export default Read