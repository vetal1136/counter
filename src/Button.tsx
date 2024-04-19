import React from 'react';
import './App.css';

type ButtonType = {
    name: string;
    callBack: () => void;
    disabled: boolean;


}
export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>

            <button className="btn" onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

