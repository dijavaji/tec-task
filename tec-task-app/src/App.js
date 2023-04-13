import { BrowserRouter,Routes, Route, } from "react-router-dom";
//agrego cliente de gql
import {ApolloProvider} from "@apollo/client";

import './App.css';
import client from "./config/apollo";
import Header from './components/ui/Header';
import AddTaskComponent from './components/AddTaskComponent';
import TasksListComponent from './components/TasksListComponent';
import TaskComponent from './components/TaskComponent';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header/>
        <RoutesSwitch/>
      </BrowserRouter>
    </ApolloProvider>
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
