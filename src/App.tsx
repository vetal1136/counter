import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";


type taskCountersType = {
    id: number

}

function App() {

    let [taskCounters, settaskCounters] = useState<taskCountersType[]>([
        {id: 1},
        {id: 2},
    ])

    const maxNumber = 5;
    const minNumber = 0;
    const step = 1;


    const [count, setCount] = useState<number>(minNumber)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    const Inc = () => {
        if (count < maxNumber) {
            setCount(count + step)
        }
    }

    // const setToLocalStorage = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(count))
    // }
    //
    // const getToLocalStorage = () => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setCount(newValue)
    //     }
    // }

    const Reset = () => {
        setCount(minNumber)
    }


    return (
        <div className="App">
            {taskCounters.map(el => {
                return (
                    <div className="wrapper-counter">
                        <div className="counter">
                            <h1 className={count === maxNumber ? "max-number" : ""}>
                                {count}
                            </h1>
                        </div>
                        <div className="counter-btn">
                            <Button name={"plus"} callBack={Inc} disabled={count === maxNumber}/>
                            <Button name={"reset"} callBack={Reset} disabled={count === minNumber}/>
                        </div>
                    </div>
                )
            })}

        </div>

    );
}

export default App;
