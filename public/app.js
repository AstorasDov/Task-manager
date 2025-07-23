const addTaskBtn = document.querySelector("#addTaskBtn");
const container = document.querySelector("#container");

const sleep = (ms) => { return new Promise(resolve=>setTimeout(resolve,ms)); }

addTaskBtn.addEventListener("mousedown",async (e)=>{
    addTaskBtn.style.width = "60px";
    await sleep(100);
    addTaskBtn.style.width = "200px";
});

async function loadTasks () {
    const response = await fetch('/api/tasks');
    const json = await response.json();
    const tasks = json.tasks;
    if (tasks.length > 0) {container.innerHTML = "";document.querySelector("#reminder").style.display = "none"}
    for(const task of tasks){
        const taskHTML = `<label class="task">${task.name}</label>`;
        container.innerHTML += taskHTML;
    };const taskEl = Array.from(container.querySelectorAll('.task'));
    taskEl.forEach(task=>{
        task.addEventListener("click",async ()=>{
            await sleep(150);
            task.remove();
        })
    })
}

window.addEventListener("DOMContentLoaded",loadTasks);
