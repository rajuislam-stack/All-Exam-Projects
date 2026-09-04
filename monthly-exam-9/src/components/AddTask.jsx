import { useRef, useState } from "react"

export default function AddTask({onHandleAddTask}) {
   const [text ,setText] = useState('');
   let ref = useRef(null);

   function handleFocus(){
     ref.current.focus();
   }

  return (
    <div className="w-full flex gap-2 items-center">
      <input 
      type="text"
      value={text}
      ref={ref}
      placeholder="Enter a new task"
      onChange={(e)=> setText(e.target.value)}
      className="border-2 pl-1 h-8 rounded w-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-none focus:shadow-blue-950 focus:shadow-md"
       />
      <button onClick={()=>{
         if(text == ''){
          alert('Please write something!');
          return;
         }
         onHandleAddTask(text);
         handleFocus();
         setText('')
      }} className="border px-10 py-1.5 rounded bg-blue-950 text-white shadow-black-50">Add</button>
    </div>
  )
}
