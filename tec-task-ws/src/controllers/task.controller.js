const Task = require("../models/task.model");

async function createTask(input){
  console.log("registrando tareas",input);
  const newTask = input;
  try {
    const task = new Task(newTask);
    task.save();
    return task;
  } catch (error) {
    console.log("Error al crear tarea", error);
    throw new Error("Error al crear tarea");
  }
}

async function getTasks(id){
  console.log("obteniendo tarea",id);
  let tasks = [];
  try{
    if(id) tasks.push(await Task.findById(id));
    if(tasks.length === 0) tasks = await Task.find({}).sort({ createAt: -1 });
    if(!tasks[0]) throw new Error("La tarea no existe");
  }catch(ex){
    console.log("Error al obtener tarea", ex);
    throw new Error("Error al obtener tarea");
  }
  return tasks;
}

async function updateTask(id, input){
  console.log("actualizando tarea",id);
  console.log(input);
  try{
    result = Task.findByIdAndUpdate(id, input, { useFindAndModify: true });
    return result;
  }catch(ex){
    console.error("Error en la actualizacion de tarea ",ex);
    throw new Error("Error en la actualizacion de tarea");
  }
}

async function deleteTask(id){
  try {
    console.log("eliminando tarea");
    const deletedTask = await Task.findByIdAndDelete(id);
    return `Task ${deletedTask.id} delete Successfully`;
    } catch (error) {
      console.error("Error al eliminar la tarea ",error);
      throw error
  }
}

module.exports = {createTask, getTasks, updateTask, deleteTask};
