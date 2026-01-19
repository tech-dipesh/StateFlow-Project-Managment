import React, { useContext} from "react";
import { closestCorners, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import {dataContext} from "../../context/dataContextProvider"
import Columns from "./Columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Createbutton from "../Common/Createbutton";
export default function Board (){
   const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
  );
  const {tasks, setTasks}=useContext(dataContext);

  const handleDragDnd=(e)=>{
      if (!e.over) return;
    const taskId = e.active.id;
    const newStatus = e.over.id;
      const currentTaskValue = tasks.find(t => t.id === taskId);
    setTasks(tasks.map(task => 
    task.id === taskId ? {...task, status: newStatus} : task
  ));
  }
  return (
    <DndContext onDragEnd={handleDragDnd} collisionDetection={closestCorners} sensors={sensors}>
    <Columns/>
    <Createbutton/>
    </DndContext>
  )
}