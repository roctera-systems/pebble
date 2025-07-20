// app.js
import { google_login } from './google-auth.js';
import { loadTasks } from './database.js';
import { addTask, setupTaskListeners, setupKeyboardListeners, loadAndDisplayTasks } from './tasks.js';

// Initialize the application
async function initApp() {
  console.log("Initializing app...");
  
  // Load and display tasks from Firestore
  await loadAndDisplayTasks();
  
  // Set up event listeners
  setupTaskListeners();
  setupKeyboardListeners();
  setupButtonListeners();
  
  console.log("App initialized successfully!");
}

function setupButtonListeners() {
  const addButton = document.getElementById("add-task-btn");
  const loginButton = document.getElementById("google-login-btn");
  
  if (addButton) {
    addButton.addEventListener("click", addTask);
  }
  
  if (loginButton) {
    loginButton.addEventListener("click", google_login);
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);

// Export functions for potential use in other modules
export {
  google_login,
  addTask,
  loadTasks,
  initApp
};