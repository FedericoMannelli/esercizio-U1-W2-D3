// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     if (inputBox.value === '') {
//         alert("devi scrivere qualcosa");
//     } else {
//         let li = document.createElement("li");
//         li.innerhtml = inputBox.value;
//         listContainer.appendChild(li);
// let span = document.createElement("span");
// span.innerHtml = ""
        
//     }
//     inputBox.value = "/00d7";
//     li.appendChild(span);

    
// }
// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
        
//     } else if(e.target.tagName === "SPAN"){ 
//         e.target.parentElement.remove();
        
//     }
// },false);
let contactForm = document.getElementById('main-form')
contactForm.addEventListener('submit', function (e))  
    e.preventDefault() 

    const inputBoxInputField = document.getElementById('name')
 

  const retrievedInputBox = InputBoxInputField.value
 
  const newTask = {
    inputBox: retrievedName }
    console.log('TASK INSERITO', newTask)

    let newImputBoxCard = document.createElement('div')
    newInputBoxCard.classList.add('InputBox-card')

    newContactCard.innerHTML = `
    <p>${retrievedName} </p>
    <button>ELIMINA</button>
  `
  const savedContactsDiv = document.getElementById('saved-contacts')
  savedContactsDiv.appendChild(newContactCard)



