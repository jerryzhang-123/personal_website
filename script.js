function showMessage() { 
    alert("Hello! Welcome to my website."); 
    }
function changeBgColor() { 
    document.body.style.backgroundColor= "purple"; 
    }
function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello," + name + "!Welcome to my website!";
}
function changeBgColorUser(){
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor= color
}
function changeHeadingSize(){
    let size = document.getElementById("sizeInput").value;
    document.getElementById("size").style.fontSize = size + "px";
}
function checkAge(){
    let age = document.getElementById("ageInput").value;
    if(age >= 18){
        alert("you're an adult!");
    }else{
        alert("you're still a kid");
    }
}
console.log