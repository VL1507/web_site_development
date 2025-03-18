function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
        addTaskToList(task);
    });
}

function addTaskToList(task) {
    const ul_task = document.getElementById("task-list");

    const li_task = document.createElement("li");

    div_task_name = document.createElement("div");
    div_task_name.textContent = task.name;
    li_task.appendChild(div_task_name);

    div_task_description = document.createElement("div");
    div_task_description.textContent = task.description;
    li_task.appendChild(div_task_description);

    btn_delete = document.createElement("button");
    btn_delete.textContent = "Удалить";
    btn_delete.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTask(task);
        li_task.remove();
    });
    li_task.appendChild(btn_delete);

    ul_task.appendChild(li_task);
}

function addTask() {
    const task_name_input = document.getElementById("task-name");
    const task_description_input = document.getElementById("task-description");

    console.log(
        task_name_input.value.trim(),
        task_description_input.value.trim()
    );

    if (task_name_input.value.trim() === "") {
        alert("Название не может быть пустым");
        return;
    }

    const task = {
        id: Date.now(),
        name: task_name_input.value.trim(),
        description: task_description_input.value.trim(),
    };

    task_name_input.value = "";
    task_description_input.value = "";

    saveTask(task);
    addTaskToList(task);
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskToDelete) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    console.log(updatedTasks, taskToDelete);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

document.getElementById("btn-add-task").addEventListener("click", (e) => {
    addTask();
});

loadTasks();
