let body = document.body;
  
body.style.backgroundColor = "pink";
let img = document.createElement("img");
body.appendChild(img);
img.setAttribute("src" , "./lightbulb-OFF.png")
img.style.height = "600px";
img.style.width = "600px";

let button = document.createElement("button");
body.appendChild(button)

button.innerHTML = "OFF";

button.onclick =()=>{
if(button.innerHTML=="OFF"){
    button.innerHTML= "ON";
    img.setAttribute("src" , "./lightbulb-ON.png");
    img.style.height = "630px";
    img.style.width = "450px";
}
else{
    button.innerHTML="OFF";
    img.setAttribute("src" , "./lightbulb-OFF.png")
    img.style.height = "600px";
    img.style.width = "600px";

}
}

