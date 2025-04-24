const button=document.getElementById("button");
const Username=document.getElementById("Username");
button.onclick=()=>{
    alert("Account successfully created. Click OK to proceed");
}
const sign=document.getElementById("home_icon");
sign.onmouseover=()=>{
    alert("Welcome" + Username);
}

