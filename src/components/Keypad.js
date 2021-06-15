// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends React.Component {

   handleTyping = () => {
      console.log("Entering password...")
   }

   render() {
      return (
         <input type="password" onKeyUp={this.handleTyping} />
      )
   }
}

export default Keypad;