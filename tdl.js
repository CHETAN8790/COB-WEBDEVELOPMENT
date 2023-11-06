function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(task) {
    task.parentNode.remove();
}
