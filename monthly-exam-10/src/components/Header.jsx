import Seachbar from "./Seachbar";

export default function Header({userLength,onSetSearchText}) {
  return (
    <div className="header">
      
      <div>
        <h1>User Dicectory</h1>
        <p>Total User: {userLength}</p>
      </div>

      <Seachbar onSetSearchText = {onSetSearchText}/>
    </div>
  )
}
