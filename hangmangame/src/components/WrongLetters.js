import React from "react";

const WrongLetters=({wrongLetters})=>{
    return (
        <div className="wrong-letters-container">
         {wrongLetters.length > 0 && <p>Wrong</p>}
         {wrongLetters.map((letter,i) => <span>{letter}</span>)
         .reduce((prev,curr) => prev===null ? [curr]: [prev,',',curr],null)}
      </div>
    )
}
export default WrongLetters;