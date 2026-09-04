export default function Square({value,onSquareClick, receiveData}){
  return (
    <>
    <button onClick={onSquareClick}  className="border w-13 h-13 text-2xl bg-amber-50 text-pink-950">{value}</button>
    </>
  )
}