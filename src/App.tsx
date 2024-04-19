import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";


function App() {

    const maxNumber = 5;
    const minNumber = 0;
    const step = 1;


    const [count, setCount] = useState<number>(minNumber)

    const Inc = () => {
        if (count < maxNumber) {
            setCount(count + step)
        }

    }
    const Dec = () => {
        setCount(count - step)

    }
    const Reset = () => {
        setCount(minNumber)
    }
    return (

        <div className="App">
            <div className="wrapper-counter">
                <div className="counter">
                    <h1 className={count === maxNumber ? "max-number" : ""}>
                        {count}
                    </h1>
                </div>
                <div className="counter-btn">
                    <Button name={"plus"} callBack={Inc} disabled={count === maxNumber}/>
                    <Button name={"minus"} callBack={Dec} disabled={count === minNumber}/>
                    <Button name={"delete"} callBack={Reset} disabled={count === minNumber}/>
                </div>
            </div>
        </div>
    );
}

export default App;
