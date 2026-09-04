import { useState } from "react";
import Square from "./Square";


//Function to determine winner

function calculateWinner(squares){
  const testCase = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ];

  for(let i = 0; i < testCase.length; i++){
     let [a,b,c] = testCase[i];
    if(squares[a] && squares[a] === squares[b] & squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}


//Main component

export default function Board() {

const [xIsNext, setXIsNext] = useState(true);
const [squares,setSquares] = useState(Array(9).fill(null))

function handleClick(i){

  if(squares[i] || calculateWinner(squares)) return;

  const nextSquares = squares.slice();

      if(xIsNext) nextSquares[i] = 'X';
      else nextSquares[i] = 'O';

      setSquares(nextSquares);
      setXIsNext(!xIsNext);
}


let winner = calculateWinner(squares);
let status;

if(winner) status = 'Winner: ' + winner;
else status = 'Next Player: ' + (xIsNext ? 'X': 'O');


  return (
    <div className="m-4">

       <h1 className="mb-3 text-fuchsia-800">{status}</h1>

      <div className="flex">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
      </div>
    </div>
  );
}

