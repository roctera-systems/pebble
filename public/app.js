// firebase generated google authentication
function google_login() {

  const provider = new firebase.auth.GoogleAuthProvider();

  // calls firebase.auth() to prompt google login popup (returns promise)
  firebase.auth().signInWithPopup(provider)
    // because signInWithPopup returns a promise (since its an async func this is completing the promise)
    .then(result => {
      const user = result.user;
      const greeting = document.createElement('div');
      greeting.textContent = `Hello ${user.displayName}`;
      document.body.appendChild(greeting);
      console.log(user);
    })
    .catch(console.log);
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function to add a new task to the list
function addTask() {
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

// wait for the dom to fully load before attaching the enter key event
document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");

    // add support for adding a task by pressing the enter key
    inputBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

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

// save the current task list (html) to localstorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// load saved tasks from localstorage and remove completed (checked) ones
function showTask() {
    // load tasks from localstorage into the list
    listContainer.innerHTML = localStorage.getItem("data") || "";

// remove any tasks that were marked as completed before reload
    const checkedItems = listContainer.querySelectorAll("li.checked");
    checkedItems.forEach(item => item.remove());
}

// run showTask once when the page loads to restore saved tasks
showTask();