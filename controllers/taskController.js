let tasks = [
    {
        id: 1, 
        title:"Tarea 1", 
        description:"Descripción de la Tarea 1"
    },
    {
        id: 2, 
        title:"Tarea 2", 
        description:"Descripción de la Tarea 2"
    },
    {
        id: 3, 
        title:"Tarea 3", 
        description:"Descripción de la Tarea 3"
    }
];

function getAllTasks() {
    return tasks;
}

function createTask(title, description) {
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
}

function deleteTask(id){
    tasks.splice(tasks.findIndex(task => task.id === Number(id)), 1);
}

function updateTask(id, titulo, descrip){
    index = tasks.findIndex(task => task.id === Number(id));
    tasks[index] = {
        id: index+1,
        title: titulo,
        description: descrip
    };
    return tasks[index]
}

module.exports = {
    getAllTasks, createTask, deleteTask,updateTask
}