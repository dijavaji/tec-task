import { BrowserRouter,Routes, Route, } from "react-router-dom";
import './App.css';
import { Button } from 'reactstrap';
import Header from './components/ui/Header';
import AddTaskComponent from './components/AddTaskComponent';
import TasksListComponent from './components/TasksListComponent';
import TaskComponent from './components/TaskComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <RoutesSwitch/>
      </BrowserRouter>
    </>
  );
}

function RoutesSwitch() {
  return (
    <div className="container mt-3">
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/tasks" element={<TasksListComponent/>} />
            <Route path="/add" element={<AddTaskComponent/>} />
            <Route path="/tasks/:id" element={<TaskComponent/>} />
          </Routes>
    </div>
  );
}

export default App;
