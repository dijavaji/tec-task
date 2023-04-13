const Task = require("../models/task.model");

async function createTask(input){
  console.log("registrando tareas",input);
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
    tasks = await Task.find({}).sort({ createAt: -1 });
    if(!tasks) throw new Error("La tarea no existe");
  }catch(ex){
    console.log(ex);
  }
  return tasks;
}

async function updateTask(id, input){
  console.log("actualizando tarea");
  try{
    let task = Task.findByIdAndUpdate(id, input, { useFindAndModify: false });

    return input;
  }catch(ex){
    console.error("Error en la actualizacion de tarea ",ex);
    throw new Error("Error en la actualizacion de tarea");
  }
}

module.exports = {createTask, getTasks, updateTask};
