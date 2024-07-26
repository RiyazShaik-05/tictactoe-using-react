import React, {useState} from 'react';
import './TicTacToe.css'

export default function TicTacToe() {
    const [array,updateArray] = useState([null,null,null,null,null,null,null,null,null]);
    const [xMove,setMove] = useState(true);
    const [msg,setMsg] = useState(<h2>Tic-Tac-Toe using <span>React</span></h2>);
    const handleClick = (index) => {
        if(array[index] || checkWinner(array)){
            return;
        }
        const tempArray = [...array];
        tempArray[index] = xMove ? 'X' : 'O';
        updateArray(tempArray);
        setMove(!xMove);

        const winner = checkWinner(tempArray);
        if (winner) {
            setMsg(<h2>Congratulations! <span>{winner}</span> Wins!</h2>);
        } else if (!tempArray.includes(null)) {
            setMsg(<h2>It's a <span>Draw!</span></h2>);
        } else {
            setMsg(<h2>Next Move: <span>{xMove ? 'O' : 'X'}</span></h2>);
        }
    };

    const handleReset = () => {
        updateArray([null,null,null,null,null,null,null,null,null]);
        setMove(true);
        setMsg(<h2>Tic-Tac-Toe using <span>React</span></h2>);
    }

    const checkWinner = (arr) => {
        const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
              return array[a];
            }
        }
        return null;
    }

    return(
        <>
            <div className='win-message'>{msg}</div>
            <div className='container'>
                <button className='my-button' onClick={() => handleClick(0)}>{array[0]}</button>
                <button className='my-button' onClick={() => handleClick(1)}>{array[1]}</button>
                <button className='my-button' onClick={() => handleClick(2)}>{array[2]}</button>
                <button className='my-button' onClick={() => handleClick(3)}>{array[3]}</button>
                <button className='my-button' onClick={() => handleClick(4)}>{array[4]}</button>
                <button className='my-button' onClick={() => handleClick(5)}>{array[5]}</button>
                <button className='my-button' onClick={() => handleClick(6)}>{array[6]}</button>
                <button className='my-button' onClick={() => handleClick(7)}>{array[7]}</button>
                <button className='my-button' onClick={() => handleClick(8)}>{array[8]}</button>
            </div>
            <button className='reset-button' onClick={handleReset}>Reset</button>
            <footer>Ok background colors aren't great ik :)</footer>
        </>
    )
}