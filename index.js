function login(callback){
        console.log("login")
        callback();
    }
function fetchdata(callback){
    console.log("fetchdata")
    callback();
}
function processdata(callback){
    console.log("processdata")
    callback();
}
function displaydata(){
    console.log("displaydata")
}
login(()=>{
    fetchdata(()=>{
        processdata(()=>{
            displaydata();
        })           
})
})
function add() 
{
        alert("work is done 😎😊😎😎😎😀")
    
}