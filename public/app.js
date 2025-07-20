// app.js - Main application file
import { google_login } from './google-auth.js';
import { saveData, loadData, clearData } from './database.js';
import { addTask, setupTaskListeners, setupKeyboardListeners } from './tasks.js';

// Initialize the application
function initApp() {
  // Load saved tasks when the page loads
  loadData();
  
  // Set up event listeners for tasks
  setupTaskListeners();
  setupKeyboardListeners();
  
  // Set up button event listeners (replaces onclick attributes)
  setupButtonListeners();
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

  // Google login button - find the button outside the container
  const loginButton = document.querySelector('button[onclick="google_login()"]');
  if (loginButton) {
    // Remove the onclick attribute and add event listener
    loginButton.removeAttribute('onclick');
    loginButton.addEventListener("click", google_login);
  }


// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);

// Export functions for potential use in other modules (but not globally)
export {
  google_login,
  addTask,
  saveData,
  loadData,
  clearData,
  initApp
};