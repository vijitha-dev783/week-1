function attemptTracker(){
    let attempts=0;
    return function(){
        attempts++;
        return attempts;
    }
}

let track=attemptTracker();

function login(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    let msg=document.getElementById("message");
    let btn=document.querySelector("button");

    if(user===""){
        msg.innerText="Username cannot be empty";
        return;
    }

    if(pass.length<6){
        msg.innerText="Password must be minimum 6 characters";
        return;
    }

    if(user!=="admin" || pass!=="123456"){
        let count=track();
        msg.innerText="Wrong credentials. Attempt "+count+"/3";

        if(count>=3){
            btn.disabled=true;
            msg.innerText="Login disabled after 3 attempts";
        }
    }else{
        msg.style.color="green";
        msg.innerText="Login Successful";
    }
}