const Task = require("../models/task.model");

async function createTask(input){
  console.log("registrando tareas");
  const newTask = input;
  try {
    const task = new Task(newTask);
    task.save();
    return task;
  } catch (error) {
    console.log(error);
  }
}

async function getTasks(id){
  console.log("obteniendo tarea",id);
  let tasks = null;
  try{
    if(id) tasks = await Task.findById(id);
    tasks = await Task.find({});
    if(!tasks) throw new Error("La tarea no existe");
  }catch(ex){
    console.log(ex);
  }
  return tasks;
}

async function updateTask(id){
  console.log("actualizando tarea");
  let user = null;
  return user;
}

module.exports = {createTask, getTasks, updateTask};
