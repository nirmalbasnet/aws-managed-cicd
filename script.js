// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim(); // Get input and trim spaces

  if (taskText) {
    const li = document.createElement("li"); // Create a new list item
    li.textContent = taskText;

    const deleteBtn = document.createElement("span"); // Create delete button
    deleteBtn.textContent = "×";
    deleteBtn.onclick = () => li.remove(); // Remove task on click

    li.appendChild(deleteBtn); // Add delete button to list item
    taskList.appendChild(li); // Add list item to the task list

    taskInput.value = ""; // Clear input field
  }
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Optional: Add task when pressing Enter
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
