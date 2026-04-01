import React,{useState,useEffect} from "react";
const Posts=()=>
{
    const link="https;//jsonplaceholder.typicode.com/posts";
    const [show,setShow]=useState([]);
    const showData=async(apiCall)=>
    {
        const response=await fetch(apiCall);
        console.log(response);
        const data=await response.json();
        console.log(data);
    }
    showData(link);
    return(
        <div>{}</div>
    )
}
export default Posts;