import './Game.css';
import React, { useState, useRef, useEffect } from 'react';
import {Helmet} from "react-helmet";

const ROWS = 20;
const COLS = 10;

const tetrominos = {
    'I': [
      [1,1,1,1]
    ],
    'J': [
      [1,0,0],
      [1,1,1]
    ],
    'L': [
      [0,0,1],
      [1,1,1]
    ],
    'O': [
      [1,1],
      [1,1],
    ],
    'S': [
      [0,1,1],
      [1,1,0]
    ],
    'Z': [
      [1,1,0],
      [0,1,1]
    ],
    'T': [
      [0,1,0],
      [1,1,1]
    ]
  };

const colors = {
    'I': 'cyan',
    'O': 'yellow',
    'T': 'purple',
    'S': 'green',
    'Z': 'red',
    'J': 'blue',
    'L': 'orange'
};


function Game() {
    const [board, setBoard] = useState([]);
    const [currentPiece, setCurrentPiece] = useState({ shape: [], x: 0, y: 0 });
    const requestRef = useRef();
    const lastUpdateTimeRef = useRef(0);

    const [bag, setBag] = useState(['I', 'O', 'T', 'S', 'Z', 'J', 'L']);
    const [curBagPosition, setCurBagPosition] = useState(0);
    const [curPiece, setCurPiece] = useState('');
    const [defaultSpawnLocation, setDefaultSpawnLocation] = useState([0, 3]);
    const [piecePlaced, setPiecePlaced] = useState(true);

    function Squares() {
      return (
        board.map((row, rowIndex) => (
            row.map((col, colIndex) => (
                col === 0 ? null : (<div key={`${colIndex}${rowIndex}`} id={`${colIndex}${rowIndex}`} className='Game-square' style={{ gridColumn: colIndex + 1, gridRow: rowIndex + 1 }} />)
            ))
        ))
    );
    }

    function createBoard(){
        const newBoard = [];
        for (let row = 0; row < ROWS; row++) {
          newBoard.push(Array.from(Array(COLS), () => 0));
        }
        setBoard(newBoard);
    }

    const movePieceDown = () => {
      // console.log(board)
    }

    const spawnPiece = () =>{
      // setCurPiece(bag[curBagPosition]);
      // setCurBagPosition(curBagPosition + 1);
      // const curTetromino = tetrominos[curPiece];
      // console.log(curTetromino.length);
      // console.log(curTetromino[0].length);
      // console.log(defaultSpawnLocation);
      // console.log(board);
      
      // // for (var i = 0; i < 6; i++){
      // //   console.log("sasi");
      // // }

      // for (var row = defaultSpawnLocation[1]; row < defaultSpawnLocation[1] + curTetromino[0].length; row++){
      //   for (var col = defaultSpawnLocation[0]; col < defaultSpawnLocation[0] + curTetromino.length; col++){
      //     board[col][row] = 1;
      //     console.log(`${col} ${row}`);
      //   }
      // }
      console.log(board);
    }

    //probably inefficient shuffle found on stackoverflow
    function shuffleArray(array) {
      let shuffledArray = array.slice(); // Create a copy of the array
      let currentIndex = shuffledArray.length;
    
      while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
          shuffledArray[randomIndex], shuffledArray[currentIndex]];
      }
    
      return shuffledArray; // Return the shuffled copy
    }

    const generateBag = () => {
      setBag(shuffleArray(bag));
      setCurBagPosition(0);
    }

    const updateGame = (time) => {
        const deltaTime = time - lastUpdateTimeRef.current;
        if (deltaTime > 500) { // every game tick
          // movePieceDown();

          // if (piecePlaced != false){
          //   setPiecePlaced(false);
          //   spawnPiece();
          // }
          if (curBagPosition === bag.length) {
            generateBag();
          }
          lastUpdateTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(updateGame);
    }

    useEffect(() => {
      if (piecePlaced) {
          spawnPiece();
          setPiecePlaced(false);
          }
      }, [piecePlaced]);

    // useEffect(() => {
    //   if (curBagPosition >= bag.length) {
    //       generateBag();
    //   }
    //   }, [curBagPosition, bag]);
      
    useEffect(() => {
        createBoard();
        shuffleArray(bag);
        requestRef.current = requestAnimationFrame(updateGame);
        return () => cancelAnimationFrame(requestRef.current);
      }, []);

    const renderBoard = () => { 
        return (<div className="Game">
        <div className='Game-board'>
            <div className="Game-playfield">
              <Squares />
            </div>
            <div className='Game-menu'>
              <p>asdsad</p>
            </div>
        </div>
        <p>asdsadsa someasjdiajfijehafhjewqurfhwhjuifd</p>
    </div>);
    }

    return (
    <>
        <Helmet>
            <meta name="viewport" 
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        </Helmet>
        {renderBoard()}
    </>
  );
}

export default Game;
