import { useState,useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayName,setEnteredPlayerName] = useState(null);
  // const [isSubmitted,setSubmitted] = useState(false);

  // function handleChange(event){
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }
  function handleClick(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayName??"unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
