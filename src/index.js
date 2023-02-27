// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

// });

const input = document.getElementById("new-task-description");
const lists = document.getElementById("list")
const form = document.getElementById("create-task-form")
const tasks = document.getElementById("tasks")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  addTask(input)
  form.reset()
  
  
  function addTask (input) {
    
    let listItem = document.createElement('li');
    let deleteButton = document.createElement("button")
    deleteButton.addEventListener('click', deleteTask)
    listItem.appendChild(document.createTextNode(input.value));
    listItem.appendChild(deleteButton);
    document.querySelector('ul').appendChild(listItem);
    deleteButton.className = "delete-bttn";
    deleteButton.textContent = "X";
  }
})


const deleteTask = (e) => {
  e.target.parentNode.remove()}





 