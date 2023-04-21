import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import {useQuery, useMutation} from "@apollo/client";
import { toast } from "react-toastify";

import {GET_TASKS, UPDATE_TASK} from "../../services/TaskService";
import TaskComponent from "../TaskComponent";

function EditTaskComponent() {
  const {id} = useParams();
  //const [task, setTask] = useState();
  const [updateTask] = useMutation(UPDATE_TASK);
  //consulto tarea
  const {data, loading, error, refetch} =useQuery(GET_TASKS,{
    variables:{id,},
  });
  if(loading) return null;
  if(error) return <div>error 404</div>
  const {getTasks} = data;

  //setTask(getTasks[0]);
  const handleUpdateTask = async (task) =>{
    console.log(task);
    console.log(id);
    try {
        await updateTask({
          variables: {
            id:id,
            input:  {
        	   name: task.title,
             limitDate: task.deadline,
             startTime: task.startTime,
             finishTime: task.finishTime,
             complete: task.complete,
             remind:task.remind,
             repeat:task.repeat,
             modifiedBy:"web-app",
             modifiedDate:Date(),
            },
        },
      } );
        refetch();
        toast.success("Tarea actualizada correctamente");
      } catch (error) {
        console.log(error);
        toast.error("Error al actualizar tarea");
      }
  }
  return (
    <TaskComponent task={getTasks[0]} onUpdate={handleUpdateTask} />
  )
}

export default EditTaskComponent;
