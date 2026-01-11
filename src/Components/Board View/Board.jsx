import React, { useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import Columns from "./Columns";
export default function Board (){

  console.log("Board data can be accessed now.");
  
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
    <DndContext onDragEnd={handleDragDnd} collisionDetection={closestCorners}>
    <Columns items={items} setItems={setItems}/>
    </DndContext>
  )
}