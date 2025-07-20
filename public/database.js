// database.js
export function saveData() {
  const listContainer = document.getElementById("list-container");
  localStorage.setItem("data", listContainer.innerHTML);
}

export function loadData() {
  const listContainer = document.getElementById("list-container");
  // load tasks from localstorage into the list
  listContainer.innerHTML = localStorage.getItem("data") || "";

  // remove any tasks that were marked as completed before reload
  const checkedItems = listContainer.querySelectorAll("li.checked");
  checkedItems.forEach(item => item.remove());
}

export function clearData() {
  localStorage.removeItem("data");
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
}