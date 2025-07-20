// tasks.js
import { saveTask, updateTask, deleteTask, loadTasks } from './database.js';

export async function addTask() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  try {
    // Save to Firestore and get the document ID
    const taskId = await saveTask(inputBox.value.trim());
    
    // Create DOM element with the Firestore document ID
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.dataset.taskId = taskId; // Store Firestore ID in DOM
    
    // Add delete button
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    // Add to DOM
    listContainer.appendChild(li);
    
    // Clear input
    inputBox.value = "";
    
    console.log("Task added successfully!");
  } catch (error) {
    console.error("Failed to add task:", error);
    alert("Failed to add task. Please try again.");
  }
}

export async function loadAndDisplayTasks() {
  const listContainer = document.getElementById("list-container");
  
  try {
    const tasks = await loadTasks();
    
    // Clear existing tasks
    listContainer.innerHTML = "";
    
    // Display each task
    tasks.forEach(task => {
      if (!task.completed) { // Only show non-completed tasks
        const li = document.createElement("li");
        li.innerHTML = task.text;
        li.dataset.taskId = task.id; // Store Firestore ID
        
        // Add delete button
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        listContainer.appendChild(li);
      }
    });
    
    console.log("Tasks loaded and displayed!");
  } catch (error) {
    console.error("Failed to load tasks:", error);
    // Could add fallback to localStorage here if needed
  }
}

export function setupTaskListeners() {
  const listContainer = document.getElementById("list-container");
  
  listContainer.addEventListener("click", async function(e) {
    if (e.target.tagName === "LI") {
      // Toggle completed state
      e.target.classList.toggle("checked");
      
      const taskId = e.target.dataset.taskId;
      if (taskId) {
        try {
          // Update in Firestore
          await updateTask(taskId, { 
            completed: e.target.classList.contains("checked") 
          });
        } catch (error) {
          console.error("Failed to update task:", error);
          // Revert the visual change if Firestore update failed
          e.target.classList.toggle("checked");
        }
      }
    } else if (e.target.tagName === "SPAN") {
      // Delete task
      const li = e.target.parentElement;
      const taskId = li.dataset.taskId;
      
      if (taskId) {
        try {
          // Delete from Firestore
          await deleteTask(taskId);
          // Remove from DOM
          li.remove();
        } catch (error) {
          console.error("Failed to delete task:", error);
          alert("Failed to delete task. Please try again.");
        }
      } else {
        // Fallback for tasks without Firestore ID
        li.remove();
      }
    }
  }, false);
}

export function setupKeyboardListeners() {
  const inputBox = document.getElementById("input-box");
  
  inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
}