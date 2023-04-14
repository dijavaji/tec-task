import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";



const TasksListComponent = (props) => {
  const {tasks} = props;
  const [currentTask, setCurrentTask] = useState();
  const [currentIndex, setCurrentIndex] = useState();

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
            {tasks &&
              tasks.map((task, index) => (
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
          <button className="m-3 btn btn-success">
          <Link to={"/addTask"} className="nav-link">
            Agregar tarea
          </Link>
          </button>
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
              <button type="button" className="m-1 btn btn-primary">
                <Link to={"/tasks/" + currentTask.id} className="nav-link" > Editar </Link>
              </button>
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
