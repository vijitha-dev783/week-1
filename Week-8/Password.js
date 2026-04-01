import React,{useState} from "react";
function Password()
{
    const [password,setPassword]=useState("");
    const [strength,setStrength]=useState("");
    const checkStrength=(pass)=>
    {
        let score=0;
        if(pass.length>=0)
            score++;
        if(/[A-Z]/.test(pass))
            score++;
        if(/[0-9]/.test(pass))
            score++;
        if(/[!@#$%^&*]/.test(pass))
            score++;
        if(score<=2)
            setStrength("Weak");
        else if(score==3)
            setStrength("Medium");
        else
            setStrength("Strong");
    };
    const handleChange=(e)=>
    {
        const value=e.target.value;
        setPassword(value);
        checkStrength(value);
    }
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>Password Checker</h1>
            <input 
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handleChange}/>
            <h2>Strength:{strength}</h2>
        </div>
    );
}
export default Password;