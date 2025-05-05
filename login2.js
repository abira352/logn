function login(){
    return new Promise((resolve) =>{
        console.log("login")
        resolve();
    });
   
}
function processdata(){
    return new Promise((resolve) =>{
        console.log("processdata")
        resolve();
    });
   
}
function fetchdata(){
    return new Promise((resolve) =>{
        console.log("fetchdata")
        resolve();
    });
   
}
function displaydata(){
    return new Promise((resolve) =>{
        console.log("displaydata")
        resolve();
    });
   
}
login()
.then(processdata())
.then(fetchdata())
.then(displaydata())

function add() 
{
        alert("work is done 😎😊😎😎😎😀")
    
}