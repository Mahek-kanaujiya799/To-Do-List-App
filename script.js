const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task Button Click
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTaskToDOM(taskText);
    taskInput.value = "";
  }
});

// Add task to DOM
function addTaskToDOM(text) {
  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">🗑</button>
    </div>
  `;

  // Complete Task
  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete Task
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
}
