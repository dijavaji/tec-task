import React, {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import { Link } from "react-router-dom";

import {GET_TASKS} from "../../services/TaskService";

const TasksListComponent = () => {
  const [taskSelect, setTaskSelect] = useState(null);
  const [currentTask, setCurrentTask] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  //consulto las tareas
  const { data, loading, startPolling, stopPolling } = useQuery(
    GET_TASKS
  );

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return null;
  const { getTasks } = data;

  const setActiveTutorial= (tutorial, index) =>{
    setCurrentTask(tutorial);
    setCurrentIndex(index);
    console.log(tutorial);
  }

  return (
    <div className="list row">

        <div className="col-md-6">
          <h4>Lista de Tareas</h4>

          <ul className="list-group">
            {getTasks &&
              getTasks.map((task, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveTutorial(task, index)} key={index}>
                  {task.name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentTask ? (
            <div>
              <h4>Tarea</h4>
              <div>
                <label>
                  <strong>Titulo:</strong>
                </label>{" "}
                {currentTask.name}
              </div>
              <div>
                <label>
                  <strong>Descripcion:</strong>
                </label>{" "}
                {currentTask.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTask.complete ? "Completada" : "Pendiente"}
              </div>

              <Link to={"/tutorials/" + currentTask.id} className="badge badge-warning" > Editar </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor de click en la tarea...</p>
            </div>
          )}
        </div>

      </div>
  )
}

export default TasksListComponent;
