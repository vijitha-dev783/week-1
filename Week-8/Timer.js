import React,{useState,useEffect} from "react";
function Timer()
{
    const [seconds,setSeconds]=useState(0);
    const[isRunning,setIsRunning]=useState(false);
    const [laps,setLaps]=useState([]);
    useEffect(()=>
    {
        let interval;
        if(isRunning)
        {
            interval=setInterval(()=>
            {
                setSeconds(prev=>prev+1);
            },1000);
        }
        return ()=>clearInterval(interval);},[isRunning]);
    const formatTime=()=>
    {
        const min=Math.floor(seconds/60);
        const sec=seconds%60;
        return (
            String(min).padStart(2,"0")+
            ":"+
            String(sec).padStart(2,"0")
        );
    };
    return(
        <div style={{textAlign:"center",margibTop:"50px"}}>
            <h1>StopWatch</h1>
            <h2>{formatTime}</h2>
            <button onClick={()=>setIsRunning(true)}>Start</button><br/><br/>
            <button onClick={()=>setIsRunning(false)}>Pause</button><br/><br/>
            <button onClick={()=>
                {
                    setIsRunning(false);
                    setSeconds(0);
                    setLaps([]);
                }
            }>Reset</button><br/><br/>
            <button onClick={()=>setLaps([...laps,formatTime()])}>Lap</button>
            <h3>Laps:</h3>
            <ul>
                {laps.map((lap,index)=>(
                    <li key={index}>{lap}</li>
                ))}
            </ul>
        </div>
    );
}
export default Timer;