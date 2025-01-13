import React, {useState } from "react";


interface CellProps {
  cells: number[][],
  setCellsHelper: (x: number, y: number, player: number) => void
  position: number[] 
  player : number
}

// Winner = ({ winner }) => {
function Winner ({winner}: {winner: number}){

  return (
    <div>
      <div> Player {winner} won </div>
    </div>
    )
} 


function Cell(props: CellProps){


  function handleClick() {

    console.log("handleClick")

    props.setCellsHelper(props.position[0],props.position[1],props.player)
    }

  // not sure if this transation is bad juju
  let output = '_'
  
  if (props.cells[props.position[0]][props.position[1]] === 1){
    output = 'X'
  }
  else if  (props.cells[props.position[0]][props.position[1]] === 2){
    output = 'O'
  }

  return  (
  <div className="col" onClick={() => handleClick()}>[{output}]</div>
  )

}

function TicTac({})  {


  const [cells, setCells] = useState([[0,0,0],[0,0,0],[0,0,0]])
  const [player, nextPlayer] = useState(1)
  const [winner, setWinner] = useState(0)

  function setCellsHelper(x: number, y: number, player: number){
    const newArray =[...cells]
    if(cells[x][y] === 0){
      // valid move
      newArray[x][y] = player
      //check if they won
      check_for_win(cells)
      //next player
      nextPlayerHelper(player)
      
      setCells(newArray)

    }
    
  }

  function nextPlayerHelper(player: number){
    if (player === 1){
      // test i fi have to return a value
      nextPlayer(2)
    }
    else if (player === 2){
      nextPlayer(1)
    }

  }

  function check_for_win(cells: number[][]){

    //  Check rows
    for (let i = 0; i < 3; i++) {
        if (
          cells[i][0] == 1 &&
          cells[i][1] == 1 && 
          cells[i][2] == 1){
            // player 1 wins
            setWinner(1)
        }
        else if (
          cells[i][0] == 2 &&
        cells[i][1] == 2 && 
        cells[i][2] == 2){
            // player 2 wins
            setWinner(2) 
        }
        // Check columns
        else if (
          cells[0][i] == 1 &&
          cells[1][i] == 1 && 
          cells[2][i] == 1){
            // player 1 wins
            setWinner(1)
        }
        else if (
          cells[0][i] == 2 &&
          cells[1][i] == 2 && 
          cells[2][i] == 2){
            // player 2 wins
            return 2 
        }
      
    }
    // check diagonals
    if (
      cells[0][0] == 1 &&
      cells[1][1] == 1 && 
      cells[2][2] == 1){
        // player 1 wins
        setWinner(1)
    }
    else if (
      cells[0][2] == 2 &&
      cells[1][1] == 2 && 
      cells[2][0] == 2){
        // player 2 wins
        setWinner(2) 
    }
  
  }



  if (winner !== 0){
    return <Winner winner={winner}/>
  }


  return(
  <div >
    <div className="row">
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[0,0]} player={player}/>
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[0,1]} player={player}/>
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[0,2]} player={player}/>

    </div>
    <div className="row">
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[1,0]} player={player}/>
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[1,1]} player={player}/>
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[1,2]} player={player}/>

    </div>
    <div className="row">
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[2,0]} player={player}/>
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[2,1]} player={player}/>
      <Cell cells={cells} setCellsHelper={setCellsHelper} position={[2,2]} player={player}/>

    </div>

  </div>
  )
}

export default TicTac;