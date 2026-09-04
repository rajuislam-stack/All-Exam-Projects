
export default function LiveTaskCount({filteredArr}) {
  return (
    <>
     <div className="flex justify-around items-center  m-2">
      <p className="text-blue-600 font-mono">Total: {filteredArr.length}</p>
      <p className="text-green-600 font-mono">Completed: {filteredArr.filter((task)=> task.isChecked).length}</p>
      <p className="text-amber-600 font-mono">Pending: {filteredArr.filter((task)=> !task.isChecked).length}</p>
    </div>
     <hr className="border-gray-300 border"/>
    </>
  )
}
