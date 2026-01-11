import React, { useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import Columns from "./Columns";
export default function Board (){
  const [items, setItems] = useState([
     {task: "Eat", status: "In Progress"},
     {task: "Sleep", status: "To do"},
     {task: "Gym", status: "In Progress"},
     {task: "doing homework", status: "Completed"},
   ]);
  return (
    <DndContext collisionDetection={closestCorners}>
    <Columns/>
    </DndContext>
  )
}