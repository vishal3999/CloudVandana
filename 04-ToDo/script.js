document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete" onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    input.value = ""; // Clear input field
}

// Function to remove a task
function removeTask(button) {
    button.parentElement.remove();
}
