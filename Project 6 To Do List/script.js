// Selecting DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const checkbox = document.getElementById("checkbox");

// Array to store tasks
let tasks = [];

// Load tasks from localStorage
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load dark mode state from localStorage
function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark");
    checkbox.checked = true;
  } else {
    document.body.classList.remove("dark");
    checkbox.checked = false;
  }
}

// Save dark mode state to localStorage
function saveDarkMode() {
  const darkMode = document.body.classList.contains("dark")
    ? "enabled"
    : "disabled";
  localStorage.setItem("darkMode", darkMode);
}

// Function to render tasks
function renderTasks() {
  // Clear the current list
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    if (task.completed) {
      taskItem.classList.add("complete");
    }
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-button" onclick="deleteTask(event, ${index})">Delete</button>
    `;
    taskItem.addEventListener("click", () => toggleComplete(index));

    // Apply dark mode styles if dark mode is active
    if (document.body.classList.contains("dark")) {
      taskItem.style.color = "#e0e0e0";
      taskItem.style.backgroundColor = "#444";
      taskItem.style.borderColor = "#555";
    }

    taskList.appendChild(taskItem);
  });
}

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(event, index) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the task item
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Function to toggle task completion
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  saveDarkMode();
  renderTasks();
}

// Event listener for the add task button
addTaskButton.addEventListener("click", addTask);

// Optional: Event listener for Enter key to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Event listener for dark mode checkbox
checkbox.addEventListener("change", toggleDarkMode);

// Load tasks and dark mode state when the page loads
loadTasks();
loadDarkMode();
