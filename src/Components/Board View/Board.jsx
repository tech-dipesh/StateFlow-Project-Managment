import React, { useContext} from "react";
import { closestCorners, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import {dataContext} from "../../context/dataContextProvider"
import Columns from "./Columns";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
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
  const navigate=useNavigate();
  return (
    <DndContext onDragEnd={handleDragDnd} collisionDetection={closestCorners} sensors={sensors}>
    <Columns/>
    <button className="left-60 relative opacitiy-85 cursor-pointer bg-blue-500 font-semibold  py-2 px-4 rounded m-2" onClick={()=>navigate("/list")}><FontAwesomeIcon icon={faPlus}/>Create</button>
    </DndContext>
  )
}