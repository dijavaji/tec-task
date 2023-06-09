import { BrowserRouter,Routes, Route, } from "react-router-dom";
//agrego cliente de gql
import {ApolloProvider} from "@apollo/client";
import { ToastContainer } from "react-toastify";

import './App.css';
import client from "./config/apollo";
import Header from './components/ui/Header';
import AddTaskComponent from './components/AddTaskComponent';

import EditTaskComponent from './components/EditTaskComponent';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header/>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick={true}
          pauseOnHover draggable rtl={false} pauseOnFocusLoss/>
        <RoutesSwitch/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

function RoutesSwitch() {
  return (
    <div className="container mt-3">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/addTask" element={<AddTaskComponent/>} />
            <Route path="/tasks/:id" element={<EditTaskComponent/>} />
          </Routes>
    </div>
  );
}

export default App;
