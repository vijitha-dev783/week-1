import React,{useState} from "react";
function Ex1_Counter()
{
  const[count,setCount]=useState(0);
  const[theme,setTheme]=useState("light");
  const increment=()=>{setCount(count+1);};
  const decrement=()=>{ if(count>0) setCount(count-1);};
  const reset=()=>{setCount(0);}
  const toggleTheme=()=>{setTheme(theme==="light"?"dark":"light");};
  const style={backgroundColor:theme==="light"?"white":"black",
    color:theme==="light"?"black":"white",
    textAlign:"center",
    padding:"50px"
  };
  return(
    <div style={style}>
      <h1>Smart Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button><br/><br/>
      <button onClick={decrement} disabled={count===0}>Decrement</button><br/><br/>
      <button onClick={reset}>Reset</button><br/><br/>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Ex1_Counter;