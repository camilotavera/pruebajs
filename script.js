document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    // Función para agregar tareas
    const addTask = (task) => {
        tasks.push({ task, completed: false });
        renderTasks();
    };

    // Función para renderizar las tareas
});