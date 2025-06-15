import './App.css'
import AppGame from "./Components/game.jsx";
import Board from "./Components/board.jsx";


export default function App() {

  return (
    <div className="App">
        <img src="../public/tic-tac-toe.png" alt="tic-tac-toe" className="logo" />
        <AppGame />
        {/*<Board/>*/}
    </div>
  )
}


