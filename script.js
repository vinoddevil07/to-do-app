const inputbox = document.getElementById("input-box");
const orderlist = document.getElementById("order-list");
function addTask(){
    if (inputbox.value == '') {
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        orderlist.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 
    }
    inputbox.value =" ";
    saveData();
}
orderlist.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data" , orderlist.innerHTML);
}
function showTask(){
    orderlist.innerHTML= localStorage.getItem("data");
}showTask();