import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/client";

import {GET_TASKS} from "../../services/TaskService";

const TaskComponent = () => {
  const {id} = useParams();
  const [task, setTask] = useState();
  //consulto tarea
  const {data, loading, error} =useQuery(GET_TASKS,{
    variables:{id,},
  });
  if(loading) return null;
  if(error) return <div>error 404</div>
  const {getTasks} = data;
  console.log(getTasks[0]);
  //setTask(getTasks[0]);
  return (
    <div>TaskComponent</div>
  )
}

export default TaskComponent;
