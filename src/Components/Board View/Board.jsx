import React, { useContext, useState } from "react";
import { closestCorners, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import {dataContext} from "../../context/dataContextProvider"
import Columns from "./Columns";
export default function Board (){
   const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
  );
  const [tasks, setTasks]=useContext(dataContext);
  console.log("context is", tasks);  
  
 const [items, setItems] = useState([
   {id: 1, task: "Eat", status: "IN_PROGRESS"}, 
   {id: 2, task: "Sleep", status: "TODO"},     
   {id: 3, task: "Gym", status: "IN_PROGRESS"},
   {id: 4, task: "doing homework", status: "COMPLETED"}, 
]);
  const handleDragDnd=(e)=>{
      if (!e.over) return;
    const taskId = e.active.id;
    const newStatus = e.over.id;
    setItems(items.map(item => 
    item.id === taskId ? {...item, status: newStatus} : item
  ));
  }
  return (
    <DndContext onDragEnd={handleDragDnd} collisionDetection={closestCorners} sensors={sensors}>
    <Columns items={items} setItems={setItems}/>
    </DndContext>
  )
}