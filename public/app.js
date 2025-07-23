const addTaskBtn = document.querySelector("#addTaskBtn");
const container = document.querySelector("#container");

async function loadTasks () {
    const response = await fetch('/api/tasks');
    const json = await response.json();
    const tasks = json.tasks;
    if (tasks.length > 0) {container.innerHTML = "";document.querySelector("#reminder").style.display = "none"}
    for(const task of tasks){
        const taskHTML = `<label class="task">${task.name}</label>`;
        container.innerHTML += taskHTML;
    }
}

window.addEventListener("DOMContentLoaded",loadTasks);