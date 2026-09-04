
import { useState } from "react"
import Task from "./Task"
import LiveTaskCount from "./LiveTaskCount";


export default function Navigate({taskList, onHandleCheck,onHandleDelete}) {

  const [filterState, setFilterState] = useState('all');

  let filteredArr;

  if(filterState == 'all'){
    filteredArr = taskList;
  }
  else if(filterState == 'completed'){
    filteredArr = taskList.filter((task)=> task.isChecked);
  }
  else{
    filteredArr = taskList.filter((task)=> !task.isChecked);
  }
  

  return (
    <div className="w-full" >
     
       <div className="flex justify-around gap-2 w-full">
        <button onClick={()=> setFilterState('all')} className={`border-2 border-blue-700 text-blue-600 px-3 py-1 rounded font-medium  ${filterState == 'all' ? 'bg-blue-900 text-white border-none' : ''}`}>All ({taskList.length})</button>
    
        <button onClick={()=> setFilterState('completed')} className={`border-green-500 border-2 px-2 rounded text-green-500 font-medium focus:bg-green-700 ${filterState == 'completed' ? 'bg-green-950 text-white border-none': ''}`} >Completed ({taskList.filter((task)=> task.isChecked).length})</button>

        <button onClick={()=> setFilterState('pending')} className={`border-2 border-amber-500 rounded px-2 font-medium text-amber-500 ${filterState == 'pending' ? 'bg-amber-900 text-white border-none':''}`}>Pending: ({taskList.filter((task)=> !task.isChecked).length})</button>
       </div>

       <LiveTaskCount filteredArr ={filteredArr}/>
       
       <div className="flex flex-col gap-1 ">
         {filteredArr.map((task)=>{
      return <Task taskObj = {task} key={task.id} onHandleDelete = {onHandleDelete} onHandleCheck = {onHandleCheck}/> 
     })}
       </div>

    </div>
  )
}
