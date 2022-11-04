import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopPics } from "../actions/getTopPics";
import { actionClearState } from "../store/testBackend";
import '../styles/test-redux.css'

const TestBackend = () => {
    const dispatch = useDispatch()
    const top_pics = useSelector( state => state.backend.top_pics )

    return (
        <div className="test-redux">
            <h1>Test Backend</h1>
            <div>
                <button className="test-redux-btns" onClick={() => dispatch(fetchTopPics())}>Получить картинки от сервера</button>
                <button className="test-redux-btns" onClick={() => dispatch(actionClearState())}>Очистить состояние</button>
            </div>
            {top_pics && top_pics.length > 0 ?
                <div>
                    {top_pics.map(pic => 
                        <div key={pic.filename}>
                            {pic.author}: {pic.filename}
                        </div>
                    )}
                </div>
                :
                <div>
                    Массив картинок пуст
                </div>
            }
        </div>
    )
}

export default TestBackend;
