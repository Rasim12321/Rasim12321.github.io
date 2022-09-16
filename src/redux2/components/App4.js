import React from "react"
import { Provider } from "react-redux"
import {createStore} from 'redux'
import rootReducer from '../reducers'
import initialState from "../store/initialState"

import App5 from "./App5"

const store = createStore(rootReducer, initialState)
//создаем хранилище , первый параметр - функции изменяющие состояние хран-ща, 2й - начальное состояние

export default function App4(){
    return(
        <Provider store={store}>
            <App5></App5>
        </Provider>
       
    )
}