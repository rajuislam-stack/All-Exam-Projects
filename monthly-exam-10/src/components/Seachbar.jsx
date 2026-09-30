import { useEffect, useState } from "react"

export default function Seachbar({onSetSearchText}) {
  const [text ,setText] = useState('');

  useEffect(()=>{
     let id = setTimeout(()=>{
      onSetSearchText(text);
     },100);

     return ()=>{
      clearTimeout(id);
     }
  }, [text])

  return (
    <div>

      <label>
      
        <input
          type="text"
          placeholder=" Search by name" 
          value={text}
          onChange={(e)=>{
             setText(e.target.value);
          }}
          />
      </label>
    </div>
  )
}
