import { useState } from "react";
import AddTask from "./AddTask";
import Navigate from "./Navigate";
import {taskArr} from "../data.js"

let nextId = 4;

export default function TaskApp() {
  const [taskList , setTaskList] = useState(taskArr);
  
 
  function handleAddTask(text){
     setTaskList([
      ...taskList,
      {id:nextId++, taskName: text, isChecked: false}
     ])
  }

  function clearAll(){
     setTaskList(
      taskList.filter((task)=>{
        return task.isChecked !== true;
      })
     )
  }

  function handleCheck(isTrue , id){
   setTaskList(
    taskList.map((taskObj)=>{
       if(taskObj.id == id){
        return {...taskObj, isChecked: isTrue}
       }
       else{
        return taskObj
       }
    })
   )
  }

  function handleDelete(id){
    setTaskList(taskList.filter((task)=>{
     return task.id !== id;
    }))
  }

  return (
    <div className="bg-white shadow-xl flex flex-col justify-start items-center rounded-lg max-w-sm w-full sm:max-w-md gap-4 min-h-100 p-6">
      <h1 className="text-2xl font-bold">📋 Task Manager</h1>

      <AddTask onHandleAddTask = {handleAddTask}/>

      <Navigate taskList = {taskList} onHandleCheck = {handleCheck} onHandleDelete = {handleDelete}/> 

      <button onClick={clearAll} className="border-2 border-red-500 rounded px-4 py-1 text-red-700 shadow">Clear Completed</button>
      
    </div>
  )
}
