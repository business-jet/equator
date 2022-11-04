import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDec, actionInc } from "../store/testReducer";

import '../styles/test-redux.css'

const TestRedux = () => {
    const dispatch = useDispatch()
    const value = useSelector( state => state.test.value )
    
    const incValue = () => {
        dispatch(actionInc(5))
    }

    const decValue = () => {
        dispatch(actionDec(5))
    }

    return (
        <div className="test-redux">
            <h1>Test Redux</h1>
            <div>
                Value: {value}
            </div>
            <div>
                <button className="test-redux-btns" onClick={() => decValue()}>Уменьшить</button>
                <button className="test-redux-btns" onClick={() => incValue()}>Увеличить</button>
            </div>
        </div>
    )
}

export default TestRedux;
