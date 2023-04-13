import React, {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
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
  }

  return (
    <div className="list row">

        <div className="col-md-6">
          <h4>Lista de Tareas</h4>

          <ul className="list-group">
            {getTasks &&
              getTasks.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.name}
                </li>
              ))}
          </ul>
        </div>

      </div>
  )
}

export default TasksListComponent;
