// database.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { db } from './firebase-config.js';

// Save a single task to Firestore
export async function saveTask(taskText) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      text: taskText,
      completed: false,
      createdAt: new Date()
    });
    console.log("Task saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving task: ", error);
    throw error;
  }
}

// Load all tasks from Firestore
export async function loadTasks() {
  try {
    // Query tasks ordered by creation date
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log("Loaded tasks:", tasks);
    return tasks;
  } catch (error) {
    console.error("Error loading tasks: ", error);
    return [];
  }
}

// Update a task (mark as completed/uncompleted)
export async function updateTask(taskId, updates) {
  try {
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, updates);
    console.log("Task updated:", taskId);
  } catch (error) {
    console.error("Error updating task: ", error);
    throw error;
  }
}

// Delete a task from Firestore
export async function deleteTask(taskId) {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
    console.log("Task deleted:", taskId);
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
}

/*
// Legacy functions for localStorage (keep as backup)
export function saveDataLocally() {
  const listContainer = document.getElementById("list-container");
  localStorage.setItem("data", listContainer.innerHTML);
}

export function loadDataLocally() {
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = localStorage.getItem("data") || "";
  
  const checkedItems = listContainer.querySelectorAll("li.checked");
  checkedItems.forEach(item => item.remove());
}

export function clearData() {
  localStorage.removeItem("data");
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
}
*/