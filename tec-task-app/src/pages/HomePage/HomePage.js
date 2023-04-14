import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';

import {GET_TASKS} from "../../services/TaskService";
import TasksListComponent from '../../components/TasksListComponent';

const HomePage = () => {
  //consulto las tareas
  const { data, loading, startPolling, stopPolling } = useQuery(
    GET_TASKS
  );
  const [activeTab, setActiveTab] = useState("1");
  const [activeTask, setActiveTask] = useState([]);
  const [inactiveTask, setInactiveTask] = useState([]);
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
    const { getTasks } = data;
    const tasksActive = getTasks.filter(task => task.complete === true);
    const tasksInactive = getTasks.filter(task => task.complete === false);
    setActiveTask(tasksActive);
    setInactiveTask(tasksInactive);
  };

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return null;
  const { getTasks } = data;

  return (
    <div>
    <Nav tabs>
      <NavItem>
        <NavLink className={activeTab === "1" ? "active" : ""} onClick={()=>{ toggle("1");}}>
          Todas
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={activeTab === "2" ? "active" : ""} onClick={()=>{ toggle("2");}}>
          Completas
          </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={activeTab === "3" ? "active" : ""} onClick={()=>{ toggle("3");}}>
          Incompletas
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
   <TabPane tabId="1">
     <Row>
       <Col sm="12">
         <TasksListComponent tasks={getTasks}/>
       </Col>
     </Row>
   </TabPane>
   <TabPane tabId="2">
   <Row>
     <Col sm="12">
       <TasksListComponent tasks={activeTask}/>
     </Col>
   </Row>
   </TabPane>
   <TabPane tabId="3">
   <Row>
     <Col sm="12">
         <TasksListComponent tasks={inactiveTask}/>
     </Col>
   </Row>
   </TabPane>
 </TabContent>
    </div>
  )
}

export default HomePage;
