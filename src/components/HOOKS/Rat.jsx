 import { useState } from "react";
 
 export const States = () => {
   const [count,setCount]=useState(0)
  const handle = () => {
  setCount(()=> count + 10000000000000000000)
  }
  const bandle = () => {
    setCount(()=> count-1)
  }







  return (
    <>
      <h2>{count}</h2>
      <button onClick={handle}>Increment</button>
      <button onMouseEnter={bandle}>Increment</button>
    </>
  );
};
