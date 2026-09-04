
export default function Task({taskObj, onHandleCheck, onHandleDelete}) {
  return (
    <div className="task">
      <div className="flex justify-between p-1">
         <label>
          <input
           type="checkbox"
           checked = {taskObj.isChecked}
           onChange={(e)=> onHandleCheck(e.target.checked, taskObj.id)}
           className="accent-blue-900 cursor-pointer mr-1"
           />
          <span className="font-medium text-gray-400 ">{taskObj.taskName}</span>
         </label>
         <button onClick={()=>onHandleDelete(taskObj.id)} className="p-1 cursor-pointer text-red-600"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <hr className="border-gray-300"/>
    </div>
  )
}
