import React, {useState } from "react";


interface CellProps {
  cellState: string,
  setCellState: React.Dispatch<React.SetStateAction<string>>
  player: number,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>
  position: number[] // is there a tuple eqvalent or should i just create a specific interface for this?
  setWinner: React.Dispatch<React.SetStateAction<number>> 
}

interface WinnerProps {
  player: number
}

const trackerboard = [[0,0,0],
                      [0,0,0],
                      [0,0,0]]

function check_for_win(){

  //  Check rows
  for (let i = 0; i < 3; i++) {
      if (
      trackerboard[i][0] == 1 &&
      trackerboard[i][1] == 1 && 
      trackerboard[i][2] == 1){
          // player 1 wins
          return 1
      }
      else if (
      trackerboard[i][0] == 2 &&
      trackerboard[i][1] == 2 && 
      trackerboard[i][2] == 2){
          // player 2 wins
          return 2 
      }
      // Check columns
      else if (
      trackerboard[0][i] == 1 &&
      trackerboard[1][i] == 1 && 
      trackerboard[2][i] == 1){
          // player 1 wins
          return 1
      }
      else if (
      trackerboard[0][i] == 2 &&
      trackerboard[1][i] == 2 && 
      trackerboard[2][i] == 2){
          // player 2 wins
          return 2 
      }
    
  }
  // check diagonals
  if (
  trackerboard[0][0] == 1 &&
  trackerboard[1][1] == 1 && 
  trackerboard[2][2] == 1){
      // player 1 wins
      return 1
  }
  else if (
  trackerboard[0][2] == 2 &&
  trackerboard[1][1] == 2 && 
  trackerboard[2][0] == 2){
      // player 2 wins
      return 2 
  }

  return 0 
}


function Winner (WinnerProps: WinnerProps){

  return (
    <div>
      <div> Player {WinnerProps.player} won </div>
    </div>
    )
}


function Cell(CellProps: CellProps){


  function handleClick() {

    console.log("handleClick")

    if (CellProps.cellState === "_"){
      // can be clicked
      let win = 0

      if (CellProps.player === 1) {
        trackerboard[CellProps.position[0]][CellProps.position[1]] = 1
        CellProps.setCellState("X")
        win = check_for_win()
        // next player's turn
        CellProps.setCurrentPlayer(2)
      }
      if (CellProps.player === 2){
        trackerboard[CellProps.position[0]][CellProps.position[1]] = 2
        CellProps.setCellState("O")
        win = check_for_win()
        // next player's turn
        CellProps.setCurrentPlayer(1)

      }
      if (win === 1) {
        // player 1 wins
        CellProps.setWinner(1)
      }
      else if (win === 2) {
        // player 2 wins
        CellProps.setWinner(2)
      }
    }
  }

  return  (
  <div className="col" onClick={() => handleClick()}>[{CellProps.cellState}]</div>
  )

}

function TicTac({})  {


  const [cell00, setCell00] = useState("_")
  const [cell01, setCell01] = useState("_")
  const [cell02, setCell02] = useState("_")
  const [cell10, setCell10] = useState("_")
  const [cell11, setCell11] = useState("_")
  const [cell12, setCell12] = useState("_")
  const [cell20, setCell20] = useState("_")
  const [cell21, setCell21] = useState("_")
  const [cell22, setCell22] = useState("_")
  const [player, setCurrentPlayer] = useState(1)
  const [winner, setWinner] = useState(0)


  if (winner !== 0){
    return <Winner player={player}/>
  }


  return(
  <div >
    <div className="row">
      <Cell cellState={cell00} setCellState={setCell00} player={player} setCurrentPlayer={setCurrentPlayer} position={[0,0]} setWinner={setWinner}/>
      <Cell cellState={cell01} setCellState={setCell01} player={player} setCurrentPlayer={setCurrentPlayer} position={[0,1]} setWinner={setWinner}/>
      <Cell cellState={cell02} setCellState={setCell02} player={player} setCurrentPlayer={setCurrentPlayer} position={[0,2]} setWinner={setWinner}/>

    </div>
    <div className="row">
      <Cell cellState={cell10} setCellState={setCell10} player={player} setCurrentPlayer={setCurrentPlayer} position={[1,0]} setWinner={setWinner}/>
      <Cell cellState={cell11} setCellState={setCell11} player={player} setCurrentPlayer={setCurrentPlayer} position={[1,1]} setWinner={setWinner}/>
      <Cell cellState={cell12} setCellState={setCell12} player={player} setCurrentPlayer={setCurrentPlayer} position={[1,2]} setWinner={setWinner}/>

    </div>
    <div className="row">
      <Cell cellState={cell20} setCellState={setCell20} player={player} setCurrentPlayer={setCurrentPlayer} position={[2,0]} setWinner={setWinner}/>
      <Cell cellState={cell21} setCellState={setCell21} player={player} setCurrentPlayer={setCurrentPlayer} position={[2,1]} setWinner={setWinner}/>
      <Cell cellState={cell22} setCellState={setCell22} player={player} setCurrentPlayer={setCurrentPlayer} position={[2,2]} setWinner={setWinner}/>
    </div>

  </div>
  )
}

export default TicTac;