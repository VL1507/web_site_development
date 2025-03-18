interface ITask {
    name: string;
    description: string;
}

function loadTasks() {
    const tasks: ITask[] = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task: ITask) => {
        addTaskToList(task);
    });
}

function addTaskToList(task: ITask) {
    const ul_task = document.getElementById("task-list");

    const li_task = document.createElement("li");

    const div_task_name = document.createElement("div");
    div_task_name.textContent = task.name;
    li_task.appendChild(div_task_name);

    ul_task.appendChild(li_task);
}

function addTask() {
    const task_name_input = document.getElementById("task-name");
    const task_description_input = document.getElementById("task-description");

    // console.log(task_name, task_description);

    const task: ITask = {
        name: task_name_input.value.trim(),
        description: task_description_input.value.trim(),
    };

    task_name_input.value = "";
    task_description_input.value = "";

    addTaskToList(task);
}

function saveTask(task) {}

document.getElementById("btn-add-task").addEventListener("click", (e) => {
    addTask();
});

loadTasks();
