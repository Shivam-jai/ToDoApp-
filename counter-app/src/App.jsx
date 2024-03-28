
import { useState } from "react";

function App() {
  const [count, setCount]=useState(0);
  
  return(
    <div>
      <customButton count={count} setCount={setCount}></customButton>
    </div>
  )

 }

 function customButton(props){

  function clickHandler(){
     props.setCount(count+1)
  }

  return <button onClick = {clickHandler}>
    counter {props.count}
  </button>
 }    


export default App
