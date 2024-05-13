import './Game.css';
import React, { useState, useRef, useEffect } from 'react';
import {Helmet} from "react-helmet";

const ROWS = 20;
const COLS = 10;

const tetrominos = {
    'I': [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0]
    ],
    'J': [
      [1,0,0],
      [1,1,1],
      [0,0,0],
    ],
    'L': [
      [0,0,1],
      [1,1,1],
      [0,0,0],
    ],
    'O': [
      [1,1],
      [1,1],
    ],
    'S': [
      [0,1,1],
      [1,1,0],
      [0,0,0],
    ],
    'Z': [
      [1,1,0],
      [0,1,1],
      [0,0,0],
    ],
    'T': [
      [0,1,0],
      [1,1,1],
      [0,0,0],
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

    const createBoard = () => {
        const newBoard = [];
        for (let row = 0; row < ROWS; row++) {
          newBoard.push(Array.from(Array(COLS), () => 0));
        }
        setBoard(newBoard);
        console.log(board);
    }

    const movePieceDown = () => {

    }

    const updateGame = (time) => {
        const deltaTime = time - lastUpdateTimeRef.current;
        if (deltaTime > 500) {
          movePieceDown();
          lastUpdateTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(updateGame);
    }

    useEffect(() => {
        createBoard();
        requestRef.current = requestAnimationFrame(updateGame);
        return () => cancelAnimationFrame(requestRef.current);
      }, []);

    // function Loop(){
    //     updateGame()
    // }

    // Loop();

    const renderBoard = () => { 
        return (<div className="Game">
        <div className='Game-board'>
            <div className="Game-playfield">
            <div className='Game-square'/>
                <div className='Game-square' style={{gridColumn: '10', gridRow: '10'}}/>
                <div className='Game-square'/>
                <div className='Game-square'/>
                <div className='Game-square'/>
            </div>
            <div className='Game-menu'>
                        <p>asdsad</p>
            </div>
        </div>
            
        <p>
        asdsadsa someasjdiajfijehafhjewqurfhwhjuifd
        </p>
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
