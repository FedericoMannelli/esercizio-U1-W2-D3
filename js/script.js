const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("devi scrivere qualcosa");
    } else {
        let li = document.createElement("li");
        li.innerhtml = inputBox.value;
        listContainer.appendChild(li);
let span = document.createElement("span");
span.innerHtml = ""
        
    }
    inputBox.value = "/00d7";
    li.appendChild(span);

    
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        
    } else if(e.target.tagName === "SPAN"){ 
        e.target.parentElement.remove();
        
    }
},false);