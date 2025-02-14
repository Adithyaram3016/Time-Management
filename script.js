function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;

    if (taskInput.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");
    listItem.classList.add("task-item");

    // Create a priority indicator (colored dot)
    let priorityDot = document.createElement("span");
    priorityDot.classList.add("priority-dot", priority); // Apply CSS class

    // Create task text
    let taskText = document.createElement("span");
    taskText.textContent = taskInput;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Append elements to list item
    listItem.appendChild(priorityDot);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    // Clear input field
    document.getElementById("taskInput").value = "";
}
