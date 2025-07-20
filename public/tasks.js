// tasks.js
import { saveData } from './database.js';

export function addTask() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  
  // if the input is empty or only contains whitespace, alert the user
  if (inputBox.value.trim() === "") {
    alert("you must write something!");
  } else {
    // create a new list item and set its text to the input value
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // append the new list item to the list container
    listContainer.appendChild(li);

    // create a "×" span element to act as a delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // unicode for "×" icon
    li.appendChild(span); // add the delete button to the list item
  }

  // clear the input field after task is added
  inputBox.value = "";

  // save the updated task list to localstorage
  saveData();
}

export function setupTaskListeners() {
  const listContainer = document.getElementById("list-container");
  
  //handle clicks on tasks or their delete buttons
  listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      // toggle the "checked" class to mark task as completed or not
      e.target.classList.toggle("checked");
      saveData(); // save updated state
    } else if (e.target.tagName === "SPAN") {
      // if delete button is clicked, remove the selected task
      e.target.parentElement.remove();
      saveData(); // save updated state
    }
  }, false);
}

export function setupKeyboardListeners() {
  const inputBox = document.getElementById("input-box");

  // add more support for adding a task by pressing the enter key
  inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
}