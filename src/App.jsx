import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [times,setTimes] = useState(0);

  function test(){
    console.log("Test")
  }

  /*useEffect(()=>{
    //1.The code we want to run
    //3.optional return function
  },[]); //2. Dependency Array
*/

/*No dependencies - It automatically run
useEffect(()=>{
  console.log("I am No Dependencies useEffect");
});
console.log("I am from outside");
*/
/*
//Empty Dependencies Array
useEffect(()=>{
  console.log("I am Empty Dependencies useEffect");
},[]);
*/
/*
//On Mount Cleanup code
useEffect(()=>{
  console.log("Mounted");
  return()=>console.log("Un-Mounted");
},[]);
*/
/*
//Re-Render Cleanup Code
useEffect(()=>{
  console.log("Re-render");
  return()=>console.log("Re-render Cleanup");
});
*/

/*
//State Counter Cleanup Code
useEffect(()=>{
  console.log("I am state counter");
  return()=>console.log("State Counter Cleanup");
},[count]);
*/

 useEffect(() => {
  const random = Math.floor(Math.random() * 1000);
  const timer = setInterval(() => {
    console.log('${random} - Re-render');
  }, 1000);
  return() => clearInterval(timer);
});

  return (
    <>
    <h3>Count:{count}</h3>
    <h3>Times:{times}</h3>
    <button onClick={()=>setCount((value)=>value-1)}>-</button>
    <button onClick={()=>setCount((value)=>value+1)}>+</button>
    <button onClick={()=>setTimes((value)=>value+1)}>T</button>
    </>
  );
};
export default App
